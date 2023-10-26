[
'PORT',
'REALM',
'RETURN_URL',
'API_KEY',

].forEach((name) => {
    if (!process.env[name]) {
      throw new Error(`Environment variable ${name} is missing`)
    }
  })

  const config={
    PORT:process.env.PORT,
    REALM:process.env.REALM,
    RETURN_URL:process.env.RETURN_URL,
    API_KEY:process.env.API_KEY,
  }
 
  module.exports=config