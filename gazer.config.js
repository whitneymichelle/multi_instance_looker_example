module.exports = {
    looker: {
      instances: {
        dev: {
          baseUrl: process.env.LOOKER_DEV_URL,
          clientId: process.env.LOOKER_CLIENT_ID,
          clientSecret: process.env.LOOKER_CLIENT_SECRET
        },
        stage: {
          baseUrl: process.env.LOOKER_STAGE_URL,
          clientId: process.env.LOOKER_CLIENT_ID,
          clientSecret: process.env.LOOKER_CLIENT_SECRET
        },
        prod: {
          baseUrl: process.env.LOOKER_PROD_URL,
          clientId: process.env.LOOKER_CLIENT_ID,
          clientSecret: process.env.LOOKER_CLIENT_SECRET
        }
      }
    }
  };
  