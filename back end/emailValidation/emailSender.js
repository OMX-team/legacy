require('dotenv').config()
const sgMail = require('@sendgrid/mail');
console.log(process.env.SENDGRID_API_KEY)
sgMail.setApiKey('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');
/**
username @params 
URL @params 
 */
function sendEmail(to, username, code) {
    console.log(process.env.SENDGRID_API_KEY)
    console.log(`inside message , to : ${to}, username : ${username}, , url ${code}`)
    // check the email before before sending
    var msg = {
        to: `${to}`,
        from: 'OMX_DO_NOT_REPLY@OMX.com',
        subject: 'Verify_Your_Email',
        text: 'Email Veritfication',
        html: `<div class="container" style="padding: 25% 25% 25% 25%;">
        <h1>Hello ${username}</h1>
        ><strong><h2>Thanks for registering to our website</h2></strong><br/>
        <h5>This is your vertification code :</h5>
        <strong><h2>${code}</h2></strong>
        </div>
        `,
    };
    return sgMail.send(msg, false)
}

module.exports = {
    sendEmail
}