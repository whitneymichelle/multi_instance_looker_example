module.exports = {
  instances: {
    dev: {
      baseUrl: process.env.LOOKER_DEV_URL,
      clientId: process.env.LOOKER_CLIENT_ID,
      clientSecret: process.env.LOOKER_CLIENT_SECRET
    },
    stage: {
      baseUrl: process.env.LOOKER_INSTANCE_2_URL,
      clientId: process.env.LOOKER_CLIENT_ID,
      clientSecret: process.env.LOOKER_CLIENT_SECRET
    },
    prod: {
      baseUrl: process.env.LOOKER_INSTANCE_3_URL,
      clientId: process.env.LOOKER_CLIENT_ID,
      clientSecret: process.env.LOOKER_CLIENT_SECRET
    }
  }
};
