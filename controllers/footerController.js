const {PrismaClient} = require("@prisma/client")
const prisma  = new PrismaClient()



const getFooter = async (req, res) => {
    try {
        const footer = await prisma.restorant.findUnique({
            where : {
                nom : "tajin"
            }
        });
        //res.json(footer);
        return (footer)
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};



module.exports = {getFooter}