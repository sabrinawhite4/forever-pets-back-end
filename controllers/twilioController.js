require("dotenv").config();
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const { getUserByEmail } = require("../database/userDb");

module.exports = {
  forgetPassword: async (req, res) => {
    const { email} = req.body;
    const user = await getUserByEmail(email);
    console.log(user);
    const msg = {
      to: email,
      from: "foreverpetsapp@gmail.com", // Change to your verified sender
      subject: "Reset your Password",
      text: `Hi ${user.first_name} ${user.last_name}, click the link below to reset your password!
            
            http://localhost:3000/reset-password?user=${user._id}`,
      html: `<div><h1>Reset Password</h1><h2>Hi ${user.first_name} ${user.last_name}, click the link below to reset your password!</h2><a href=http://localhost:3000/reset-password?user=${user._id}>http://localhost:3000/reset-password?user=${user._id}</a></div>`,
    };
    sgMail
      .send(msg)
      .then((response) => {
        console.log(response[0].statusCode);
          console.log(response[0].headers);
          res.status(200).send("Email sent!");
      })
      .catch((error) => {
          console.error(error);
          res.status(500).send("Error sending email");
      });    
  },
};

