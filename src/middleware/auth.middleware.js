const { handleError } = require("../helpers/handleError");
const firebaseAdmin = require("../helpers/firebase");

const authenticateJWT = async (req, res, next) => {
  try {
    const token = req.cookies?.access_token;
    if (!token) {
      handleError("please login", 403);
    }
    const user = await firebaseAdmin.verifyIdToken(token);
    req.user = user;
    next();
    return
  } catch (error) {
     next(error);
  }
};

module.exports = { authenticateJWT };
