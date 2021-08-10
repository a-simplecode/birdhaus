const sgMail = require('@sendgrid/mail');

export default async (req, res) => {
  const body = JSON.parse(req.body);

  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    to: 'info@bird-haus.com', 
    from: 'noreply@bird-haus.com',
    subject: "I want to work with BirdHaus_ "+body.work,
    text: 'text',
    html: `<div>
    <div><b>Name:</b> ${body.name} </div>
    <div><b>Email:</b> ${body.email} </div>
    <div><b>Phone Number:</b> ${body.number}</div>
    <br></br>
    <div><b>Message:</b> ${body.message}</div>
    </div>`,
  }
  try{
    const response = await sgMail.send(msg);
  }catch (e){
    console.log("---", e);
  }

  res.status(200).json({ status: 'Ok' });
}
