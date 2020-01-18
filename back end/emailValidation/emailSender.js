require('dotenv').config()
const sgMail = require('@sendgrid/mail');
console.log(process.env.SENDGRID_API_KEY)
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
/**
username @params 
URL @params 
 */
var semdEmail = (to, username, URL) => {
    var msg = {
        to: `${to}`,
        from: 'OMX_DO_NOT_REPLY@OMX.com',
        subject: 'Verify_Your_Email at',
        text: 'Email Veritfication',
        html: `<h1>Hello ${username}</h1>
        <strong>Thanks for registering to our website</strong><br/>
        <h5>Verify Your Account To Complete Signing Up</h5>
        <button><a href="http:/localhost:4200/verify/${url}">Verify</a></button>
        `,
    };
    return sgMail.send(msg)
}


module.export = {
    semdEmail
}