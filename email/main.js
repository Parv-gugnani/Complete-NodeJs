const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(express.static("public")); // Serve the HTML file from 'public' directory

// Set up nodemailer transport
// Looking to send emails in production? Check out our Email API/SMTP product!
var transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "M_USER",
    pass: "M_Pass",
  },
});

// Endpoint to send email
app.post("/send-email", (req, res) => {
  const { subject, message } = req.body;

  const mailOptions = {
    from: "from-example@email.com", // Replace with your verified sender
    to: "parv18788@gmail.com", // Hard-code recipient for testing
    subject: subject,
    text: message,
  };

  transport.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "Error sending email." });
    } else {
      return res.status(200).json({ message: "Email sent successfully!" });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
