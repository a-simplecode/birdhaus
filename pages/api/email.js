const sgMail = require('@sendgrid/mail')

export default (req, res) => {
  const body = JSON.parse(req.body);
  console.log(body)


// const msg = {
//   to: 'aamine@bright-lab.com',
//   from: 'amineamine19961996@gmail.com', 
//   subject: 'Email from Amine Amine <?aamine@bright-lab.com>',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// }
// sgMail
//   .send(msg)
//   .then(() => {
//     console.log('Email sent')
//   })
//   .catch((error) => {
//     console.error(error)
//   })
  res.status(200).json({ status: 'Ok' })
}
