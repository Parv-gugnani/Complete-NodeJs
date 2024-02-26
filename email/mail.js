var http = require("http");
var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "process.env.mail",
    pass: "process.env.pass",
  },
});

var mailOptions = {
  from: "process.env.mail",
  to: "process.env.myself",
  subject: "Hello from another side",
  text: "This is testing of email",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email Sent Successfully" + info.response);
  }
});
