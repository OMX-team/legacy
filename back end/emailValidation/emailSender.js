require('dotenv').config()
const send = require('gmail-send')({
    user: process.env.gmail_sender,
    pass: process.env.gmail_password,
});

function sendEmail(to, username, code) {
    // check the email before before sending
    var msg = {
        to: `${to}`,
        subject: 'Account Vertification',
        text: 'Verify Your Account',
        html: `
       <div><h1>Hello ${username}</h1><br/>
       <strong><h2>Thanks for registering to our website</h2></strong><br/>
       <h5>This is your vertification code :</h5><br/>
       <strong><h1>${code}</h1></strong>
       </div>`,
    }
    return send(msg)
}
sendEmail().then(({
    result
}) => {
    console.log('message sent', result)
})
module.exports = {
    sendEmail
}