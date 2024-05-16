const {PrismaClient} = require("@prisma/client")
const prisma  = new PrismaClient()



const getEmail = async (req, res) => {
    const eamil = await prisma.newsLetter.findUnique({
        where: {
            status : req.params.nom
        }
    })
    res.send(email)
}

const getEmails = async (req, res) => {
    const email = await prisma.newsLetter.findUnique()
    res.send(email)
}

const creatEmail = async (req, res) => {
    const email = prisma.newsLetter.create({
        data : req.body
    })
    res.send(email)
}

module.exports = {getEmail, getEmails, creatEmail}