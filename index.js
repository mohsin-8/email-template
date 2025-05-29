const nodemailer = require('nodemailer');
const fs = require('fs');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'alikhanmohsin420@@gmail.com',
    pass: 'ukqpmudowwldjzuc',
  },
});

const htmlContent = fs.readFileSync('index.html', 'utf-8');

const mailOptions = {
  from: 'alikhanmohsin420@gmail.com',
  to: 'alikhanmohsin420@outlook.com',
  subject: 'Test Email Template',
  html: htmlContent,
};

transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//   host: "smtp.office365.com",
//   port: 587,
//   secure: false,
//   auth: {
//     user: "alikhanmohsin420@outlook.com", // your Outlook email
//     pass: "mohsinalikhan123", // your Outlook password
//     // pass: "qmismabqrsyfdoqe", // your Outlook password
//   },
//   tls: {
//     ciphers: 'SSLv3'
//   }
// });

// const mailOptions = {
//   from: "alikhanmohsin420@outlook.com",
//   to: "alikhanmohsin420@outlook.com",
//   subject: "Test Email",
//   text: "This is a test email from Outlook",
// };
// // WZLEJ-RH8X6-PE5C7-LSCPG-2CQM6

// transporter.sendMail(mailOptions, (error, info) => {
//   if (error) {
//     return console.log(error);
//   }
//   console.log("Message sent: %s", info.messageId);
// });
