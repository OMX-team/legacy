require('dotenv').config()
const SmsService = require('sails-service-sms');
// console.log()
const twillo = SmsService('twilio', {
  sender: '+15089805276',
  provider: {
    accountSid: 'ACa444d03c79b4cc905f2b00afe4bad423',
    authToken: '09479bd678297c5d04d9c0d3a7b73727'
  }
});
//uncomment this to send sms
// twillo
//   .send({
//     recipient: ['+21654621974'],
//     message: 'this is for weslati'
//   })
//   .then(res => {
//     console.log(res)
//   })
//   .catch(res => {
//     console.log(res.negotiate)
//   });