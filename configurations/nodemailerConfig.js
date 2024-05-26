const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
   host: "smtp.zoho.com",
   port: 587,
   secure: false,
   auth: {
    user: "apprenant.apprenant4@talents4starups.com",
    pass: "upbnU$5q"
   },
   tls: {
    rejectUnauthorized: false // Accept self-signed certificates
   }
})


module.exports = {transporter};