const nodemailer = require('nodemailer');

const requiredVariables = ['SMTP_HOST', 'SMTP_USER', 'SMTP_PASS', 'EMAIL_TO'];
const missingVariables = requiredVariables.filter((name) => !process.env[name]);

if (missingVariables.length > 0) {
  console.error(`Missing environment variables: ${missingVariables.join(', ')}`);
  process.exitCode = 1;
} else {
  const port = Number(process.env.SMTP_PORT || 587);
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  transporter.sendMail({
    from: process.env.EMAIL_FROM || process.env.SMTP_USER,
    to: process.env.EMAIL_TO,
    subject: 'Test Node.js avec Nodemailer',
    text: 'Bonjour ! Cet e-mail de test a ete envoye avec Node.js et Nodemailer.',
  })
    .then((info) => console.log(`Email sent: ${info.messageId}`))
    .catch((error) => {
      console.error('Email could not be sent:', error.message);
      process.exitCode = 1;
    });
}