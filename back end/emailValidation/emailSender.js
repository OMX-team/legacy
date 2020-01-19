require('dotenv').config()
const sgMail = require('@sendgrid/mail');
console.log(process.env.SENDGRID_API_KEY)
sgMail.setApiKey('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');
/**
username @params 
URL @params 
 */
function sendEmail(to, username, URL) {
    console.log(process.env.SENDGRID_API_KEY)
    console.log(`inside message , to : ${to}, username : ${username}, , url ${URL}`)
    var msg = {
        to: `${to}`,
        from: 'OMX_DO_NOT_REPLY@OMX.com',
        subject: 'Verify_Your_Email',
        text: 'Email Veritfication',
        html: `<h1>Hello ${username}</h1>
        <strong>Thanks for registering to our website</strong><br/>
        <h5>Verify Your Account To Complete Signing Up</h5>
        <button><a href="http:/localhost:4000/api/user/verify?user=${username}&verify_id=${URL}">Verify</a></button>
        `,
    };
    return sgMail.send(msg)
}


module.exports = {
    sendEmail
}