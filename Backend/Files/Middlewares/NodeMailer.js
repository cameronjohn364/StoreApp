const nodemailer = require("nodemailer")

const NodeMailer = (email, otp) => {

  const transporter = nodemailer.createTransport({

    service: "gmail",
    auth: {
      user: "cameronjohn364@gmail.com",
      pass: "wksn lvuh stdg jrzr"
    }

  })

  const emailObj = {

    from: "cameronjohn364@gmail.com",
    to: email,
    subject: "Confirm Your Email",
    text: "Your OTP is "+otp+" this OTP is valid for 5 minutes."
  }

  return transporter.sendMail(emailObj)

}

module.exports = NodeMailer;