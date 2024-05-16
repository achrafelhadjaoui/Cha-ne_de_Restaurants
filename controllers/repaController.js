const {PrismaClient} = require("@prisma/client")
const prisma  = new PrismaClient()



const getRepas = async (req, res) => {
    try {
        const repas = await prisma.repas.findMany({
            include: { categorie: true, restorant: true },
        });
        res.json(repas);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};

const createRepas = async (req, res) => {
    try {
        const { nom, description, prix, image, categorieId, restorantId } = req.body;
        const newRepas = await prisma.repas.create({
            data: {
                nom,
                description,
                prix,
                image,
                categorieId,
                restorantId,
            },
        });
        res.json(newRepas);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};


module.exports = {createRepas, getRepas}