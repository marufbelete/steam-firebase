const SteamAuth = require("node-steam-openid");
const config = require("../config/config");

const steam = new SteamAuth({
    realm: config.REALM, // Site name displayed to users on logon
    returnUrl: config.RETURN_URL, // Your return route
    apiKey: config.API_KEY // Steam API key
  });

  module.exports=steam