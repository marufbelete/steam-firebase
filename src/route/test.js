const express=require('express');
const { errorHandler } = require('../middleware/errohandling.middleware');
const route=express.Router()
const steam = require('../auth/steam')
const firebaseAdmin = require("../helpers/firebase");

route.get("/", async (req, res) => {
    return res.send(`<a href="/auth/steam">Login with steam</a>`);
  });

route.get("/auth/steam", async (req, res) => {
    const redirectUrl = await steam.getRedirectUrl();
    return res.redirect(redirectUrl);
  });

route.get("/auth/steam/authenticate", async (req, res,next) => {
    try {
    const user = await steam.authenticate(req);
    const steamId = user.steamid;
   try {
    const firebaseUser = await firebaseAdmin.getUser(steamId);
    console.log(firebaseUser)
    console.log('user already exist but got token')
    const token = await firebaseAdmin.createCustomToken(firebaseUser.uid);
    return res.json({ token ,user});
   } 
   catch (error) {
    const newUser = await firebaseAdmin.createUser({
      uid: steamId,
      displayName: user.username
    })
    const token = await firebaseAdmin.createCustomToken(newUser.uid);
    return res.json({ token,user });
   }
 } 
  catch (error) {
      console.log(error);
     next(error)
    }
  },errorHandler);

  route.get('/profile', async (req, res,next) => {
    try {
      const decodedToken = await firebaseAdmin.verifyIdToken(token);
      req.user = decodedToken;
      console.log(req.user)
      res.json({message:'secred profile'});
    } catch (error) {
      console.log(error)
      next(error)
    }
  },errorHandler);

  module.exports=route