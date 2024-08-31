# LookML Project

This repository manages Looker instances using `gazer` and `looker-deploy`.

## Setup

1. **Install Dependencies**
   ```bash
   npm install


Configure Environment Variables Ensure you have the following environment variables set:

Uses these environment variables:

LOOKER_DEV_URL
LOOKER_STAGE_URL
LOOKER_PROD_URL
LOOKER_CLIENT_ID
LOOKER_CLIENT_SECRET
Running Locally

Sync Looker models: npm run sync
Validate Looker models: npm run validate
Deploy Looker changes: npm run deploy

### **Summary**

- **`package.json`**: Defines dependencies and scripts for syncing, validating, and deploying.
- **`gazer.config.js`** and **`looker-deploy.config.js`**: Configure Gazer and Looker Deploy for multiple Looker instances.
- **`.gitlab-ci.yml`**: CI/CD configuration for managing multiple Looker instances, including sync, validate, and deploy stages.
- **`README.md`**: Provides documentation and setup instructions.

This structure ensures a clean and organized way to handle multiple Looker instances, leveraging Gazer and Looker Deploy for managing Looker models and deployments. Adjust configurations and scripts as needed based on your specific requirements.


### Steps for When Need to Manually Copy Settings and Content from One Looker Instance to another

Example: moving setting and content from prod instance to dev instance

Here’s a detailed approach:

1. Setup Environment
Ensure you have access to both Looker environments (production and development) and have configured gazer and looker-deploy with the necessary API credentials and instance configurations.

2. Export LookML and Dashboard Configurations from Production
Using gazer to Export LookML:

 - Configure gazer for Production:

Make sure gazer is configured to connect to your production Looker instance. This typically involves setting up the appropriate credentials and base URL in your gazer.config.js.

// gazer.config.js
module.exports = {
  looker: {
    instances: {
      production: {
        baseUrl: process.env.LOOKER_PROD_URL,
        clientId: process.env.LOOKER_PROD_CLIENT_ID,
        clientSecret: process.env.LOOKER_PROD_CLIENT_SECRET
      }
    }
  }
};

  - Sync LookML from Production:

Use gazer to pull the latest LookML models, views, and other configurations from the production instance.

npx gazer sync --instance production

This will sync all LookML files to your local directory.

  - Export Dashboards:

Depending on how your dashboards are managed, you may need to use Looker’s API or a tool to export dashboard configurations. gazer typically handles LookML, so you might need to manually download dashboards or use the Looker API for this purpose.

If you need to export dashboards, you can use Looker’s API to pull the dashboard definitions. Here’s an example using curl:

curl -X GET "https://your-looker-instance.com/api/3.1/dashboards" \
-H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
-o dashboards.json

3. Import LookML and Dashboards to Development
Using gazer to Import LookML:

Configure gazer for Development:

Update your gazer.config.js to include your development Looker instance.

// gazer.config.js
module.exports = {
  looker: {
    instances: {
      production: { /* Production config */ },
      development: {
        baseUrl: process.env.LOOKER_DEV_URL,
        clientId: process.env.LOOKER_DEV_CLIENT_ID,
        clientSecret: process.env.LOOKER_DEV_CLIENT_SECRET
      }
    }
  }
};

2. Push LookML to Development:

Use gazer to push the synced LookML files to your development instance.

npx gazer push --instance development

Using looker-deploy to Import Dashboards:

Configure looker-deploy for Development:

Similarly, ensure looker-deploy is set up for your development instance.

// looker-deploy.config.js
module.exports = {
  instances: {
    production: { /* Production config */ },
    development: {
      baseUrl: process.env.LOOKER_DEV_URL,
      clientId: process.env.LOOKER_DEV_CLIENT_ID,
      clientSecret: process.env.LOOKER_DEV_CLIENT_SECRET
    }
  }
};

3. Deploy Dashboards:

If you have exported dashboards in JSON format or other configuration files, you will need to push these to the development instance. This might involve using looker-deploy if it supports this functionality, or using a custom script to load the dashboards via the Looker API.

npx looker-deploy deploy --instance development

Ensure you have any necessary scripts or tools to handle the deployment of dashboard configurations if looker-deploy does not directly support dashboards.