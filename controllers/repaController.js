const {PrismaClient} = require("@prisma/client")
const prisma  = new PrismaClient()




const getRepasByCategory = async (category, req, res) => {
    try {
        const repas = await prisma.repas.findMany({
            where: {
                categorieNom: category
            }
        });
        return repas;
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};



const getRepas = async (req, res) => {
    try {
        const breakfast = await getRepasByCategory("breakfast");
        const lunch = await getRepasByCategory("lunch");
        const dinner = await getRepasByCategory("dinner");
        //res.send(breakfast)
        return { breakfast, dinner, lunch };
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};

const createRepas = async (req, res) => {
    try {
        const { nom, description, prix, image, categorieNom, restorantId } = req.body;
        const newRepas = await prisma.repas.create({
            data: {
                nom,
                description,
                prix,
                image,
                categorieNom,
                restorantId,
            },
        });
        res.json(newRepas);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};


module.exports = {createRepas, getRepas,}