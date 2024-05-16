const {PrismaClient} = require("@prisma/client")
const { getTeams } = require("../controllers/teamController")
const prisma  = new PrismaClient()


const getRestoran = async (req, res) => {
    try {
        const restaurant = await prisma.restorant.findMany({
            where: {
                ville: req.params.ville
            },
            include: {
                employees: true,
                repas: true
            }
        });
        console.log(req.params.ville)
        if (!restaurant) {
            return res.status(404).json({ error: "Restaurant not found" });
        }
        res.status(200).render("index", {});
        // You can use either res.send() or res.json() depending on your preference
        // res.send(restaurant);
    } catch (error) {
        console.error("Error fetching restaurant:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

const getRestorants = async (req, res) => {
    try {
        const restorants = await prisma.restorant.findMany({
            include: { employees: true, repas: true },
        });
        res.render("index", {});
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};


const createRestoran = async (req, res) => {
    try {
        const { nom, ville, adress, telephone, nombreEmployee } = req.body;
        const newRestorant = await prisma.restorant.create({
            data: {
                nom,
                ville,
                adress,
                telephone,
                nombreEmployee,
            },
        });
        res.send(newRestorant);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
}

// const getContact = async (req, res) => {
//     // res.sendFile(await path.join(__dirname, '../Views', 'about.html'))
//     await res.render("contact", {})
// }

const getAbout = async (req, res) => {
    try {
        const teamMembers = await getTeams();
        console.log(teamMembers);
        res.render("index", { teamMembers });
    } catch (error) {
        console.error("Error fetching about page:", error);
        res.status(500).send("Internal Server Error");
    }
};

module.exports = {getRestoran, getAbout, createRestoran, getRestorants}