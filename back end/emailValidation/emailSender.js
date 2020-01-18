require('dotenv').config()
const sgMail = require('@sendgrid/mail');
console.log(process.env.SENDGRID_API_KEY)
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
    to: 'adammuman81@gmail.com',
    from: 'OMX_DO_NOT_REPLY@OMX.com',
    subject: 'Verify_Your_Email at',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
sgMail.send(msg).then(
    () => console.log('message sent')
)