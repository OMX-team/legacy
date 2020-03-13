require("dotenv").config();
const SmsService = require("sails-service-sms");
const twillo = SmsService("twilio", {
  sender: process.env.SENDER_NUM,
  provider: {
    accountSid: process.env.ACC_SID,
    authToken: process.env.AUTH_TOKEN
  }
});
