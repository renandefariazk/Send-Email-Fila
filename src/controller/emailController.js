// const nodemailer = require("../lib/nodemail");
const Queue = require("../lib/queue");

const home = (req, res) =>{
  try{
    res.status(200).send("Projeto Funcionando");
  }catch(err){
    res.status(400).send(err);
  }
}

const email = async (req, res) =>{
  try{
    const nome = "Dante e Zoro";
    await Queue.add({nome});
    res.status(200).send("Projeto Funcionando")
  }catch(err){
    res.status(400).send(err);
  }
}

// const sendEmail = async (data) =>{
//   message = {
//     from: process.env.EMAIL_FROM,
//     to: process.env.EMAIL_TO,
//     subject: "teste titulo",
//     text: `Texto do email Teste ${data}`
//   }
//   await nodemailer.sendMail(message);
// }

module.exports = {home, email};