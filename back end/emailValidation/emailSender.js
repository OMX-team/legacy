require('dotenv').config()
const sgMail = require('@sendgrid/mail');
// console.log(process.env.SENDGRID_API_KEY)
/**
 username @params 
 URL @params 
 */
function sendEmail(to = "adammomen0934@gmail.com", username = "adam", code = "35sdfsd") {
    console.log('to', to, 'username', username, 'code', code)
    sgMail.setApiKey('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');
    // check the email before before sending
    var msg = {
        to: `${to}`,
        from: 'OMX_DO_NOT_REPLY@OMX.com',
        subject: 'Verify_Your_Email',
        text: 'Email Veritfication',
        html: `
        <strong>and easy to do anywhere, even with Node.js</strong>
       `,
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