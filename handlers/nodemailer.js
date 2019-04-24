const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  service: 'SendGrid',
  auth: {
    user: process.env.NMUSER,
    pass: process.env.NMPASS
  }
})

exports.sendYe = (email, quote) => {
  return transporter
    .sendMail({
      from: '"YE" <ye@ye.com>',
      to: email,
      subject: 'Ye, yeezus is talking ma frend',
      html: quote
    })
    .then(response => response)
    .catch(err => err)
}
