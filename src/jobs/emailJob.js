// const emailController = require("../controller/emailController");
const nodemailer = require("../lib/nodemail");

module.exports = {
  key: "emailSend",
  async handle(data){
    message = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: "teste titulo",
      text: `Texto do email Teste ${data}`
    }
    await nodemailer.sendMail(message);
  }
}