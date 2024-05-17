const {PrismaClient} = require("@prisma/client")
const prisma  = new PrismaClient()



const getCategorie = async (req, res) => {
    try {
        const categorie = await prisma.categorie.findMany();
        res.json(categorie);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};

const createCategorie = async (req, res) => {
    try {
        const { nom } = req.body;
        const categorie = await prisma.categorie.create({
            data: {
                nom,
            },
        });
        res.json(categorie);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};


module.exports = {getCategorie, createCategorie}