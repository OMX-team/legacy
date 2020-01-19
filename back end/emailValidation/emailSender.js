require('dotenv').config()
var sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');
// console.log(process.env.SENDGRID_API_KEY)
/**
 username @params 
 URL @params 
 */
function sendEmail(
    // to = "adammuman81@gmail.com", username = "adam", code = "35sdfsd"
) {
    // check the email before before sending
    var msg = {
        to: 'adammuman81@gmail.com',
        from: 'OMX_DO_NOT_REPLY@OMX.com',
        subject: 'Verify_Your_Email',
        text: 'Email Veritfication',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };
    return sgMail.send(msg)
}
sendEmail().then(() => {
    console.log('message sent')
})
module.exports = {
    sendEmail
}

/** 
 * <h1>Hello ${username}</h1><br/>
        <strong><h2>Thanks for registering to our website</h2></strong><br/>
        <h5>This is your vertification code :</h5><br/>
        <strong><h1>${code}</h1></strong>
 */