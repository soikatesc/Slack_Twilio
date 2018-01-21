# Slack_Twilio
Integration of Slack and Twilio using web hooks.

Set up process:
  Installing Modules:
    1. Need to install all the packages from package.json file by 
        npm install 
    2. I have used ngrok globaly:
        npm install ngrok -g
        ngrok http <YOUR_PORT>
   3. Configure the .env file
      i. ACCOUNT_SID from your twilio account
      ii. AUTH_TOKEN from your twilio account
      iii. WEBHOOK_URL_INCOMMING from slack api incomming webhook url
   4. To run the server
      node app.js
