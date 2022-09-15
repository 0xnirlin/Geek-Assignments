let nodemailer = require('nodemailer');

export default function handler(req, res) {
  if (req.method == "POST") {

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
        clientId: process.env.OAUTH_CLIENT_ID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN
      }
    });
    console.log("USER: ",process.env.MAIL_USERNAME + " " + process.env.MAIL_PASSWORD + " " + process.env.OAUTH_CLIENT_ID + " " + process.env.MAIL_PASSWORD)
    

    var mailOptions = {
      from: "ahmadhameedkhan80@gmail.com",
      to: "ahmadhameedkhan80@gmail.com",
      subject: "Client Request Submission",
      text: `Name: ${req.body.name}\nEmail: ${req.body.email}\nContact: ${req.body.contact}\nCourse: ${req.body.course}\n`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  }
}
