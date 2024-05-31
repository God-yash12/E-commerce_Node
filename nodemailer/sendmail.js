const { text } = require("body-parser");
const { info } = require("console");
const nodemailer = require("nodemailer");
require("dotenv").config();
const path = require("path");
const { send } = require("process");

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "gunyash665@gmail.com",
    pass: 'jelwshwcssywekje',
  },
});

module.exports = {
  sendMailToUser: async (recipientEmail) => {
    const emailOptions = {
      from: {
        name: "Ganesh Thapa",
        address: 'gunyash665@gmail.com',
      },
      to: recipientEmail,
      subject: "sending mail from e-crafting Nepal using nodemailer",
      text: "You are successfully signed up in E-crafting Nepal. Buy your favourite product here. ",
      html: "<p> THANK YOU for your presence </p>",
    //   attachments: {
    //     filename: "nodemailer.jpg",
    //     path: path.join(__dirname, "public", "images", "nodemailer.jpg"),
    //     contentType: "image/jpeg",
    //   },
    };

    try {
        const info = await transporter.sendMail(emailOptions);
        console.log("Email has been sent", info.response)
    } catch (error) {
        console.log("Error Occured", error.message)
    }

  },
};

