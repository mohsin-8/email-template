const nodemailer = require('nodemailer');
const fs = require('fs');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'alikhanmohsin420@@gmail.com',
    pass: 'ukqpmudowwldjzuc', // use App Password (not your main Gmail password)
  },
});

const htmlContent = fs.readFileSync('index.html', 'utf-8');

const mailOptions = {
  from: 'alikhanmohsin420@gmail.com',
  to: 'alikhanmohsin420@gmail.com',
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
