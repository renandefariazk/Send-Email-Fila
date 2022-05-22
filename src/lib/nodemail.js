const mailer = require("nodemailer");
const config = require("../config/nodemail");

const nodemailer = mailer.createTransport(config);

module.exports = nodemailer;

