const {PrismaClient} = require("@prisma/client")
const {transporter} = require("../configurations/nodemailerConfig")
const { text } = require("express")
const prisma  = new PrismaClient()



const getEmail = async (req, res) => {
    try {
        const email = await prisma.newsLetter.findUnique({
            where: {
                status : req.params.nom
            }
        })
        res.send(email)
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error")
    }
}

const sendEmails = async (req, res) => {
    try {
        const emails = await prisma.newsLetter.findMany({
            select:{
                email: true
            }
        })

        const emailList = emails.map(email => email.email)

        const mailOptions = {
            from: "apprenant.apprenant4@talents4starups.com",
            bcc: emailList,
            subject: "Newsletter",
            text: "thank you for visiting our restorant"
        }

        await transporter.sendMail(mailOptions)

        res.status(200).json({ message: 'Emails sent successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error")
    }
}


const getEmails = async (req, res) => {
    try {
        const email = await prisma.newsLetter.findMany()
        res.send(email)
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error")
    }
    
}

const creatEmail = async (req, res) => {
    try {
        const email = await prisma.newsLetter.create({
            data : req.body
        })
        res.send(email)
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error")
    }

}

module.exports = {getEmail, getEmails, creatEmail, sendEmails}