
const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient()





const getTeams = async (req, res) => {
    try {
        // Fetch team members from the database
        const teamMembers = await prisma.employee.findMany();
        return (teamMembers)
    } catch (error) {
        console.error("Error fetching team members:", error);
        res.status(500).send("Internal Server Error");
    }
};

const createTeam = async (req, res) => {
    try {
        const {nom, psition, restorantNom} = req.body
        const teamMembers = await prisma.employee.create({
            data: {
                nom,
                psition,
                restorantNom
            }
        })
        //res.render("team", teamMembers)
        res.json(teamMembers)
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error")
    }
}

module.exports = { getTeams, createTeam}