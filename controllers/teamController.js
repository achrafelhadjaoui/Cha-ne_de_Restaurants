
const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient()


// const getTeams = async (req, res) => {
//     const teams = prisma.employee.findMany();
//     res.send(teams)
// }


const getTeams = async (req, res) => {
    try {
        // Fetch team members from the database
        const teamMembers = await prisma.employee.findMany();
        
        // Pass team members to the template for rendering
        //res.render("team", { teamMembers });
        //res.send(teamMembers)
        return (teamMembers)
    } catch (error) {
        console.error("Error fetching team members:", error);
        res.status(500).send("Internal Server Error");
    }
};

const createTeam = async (req, res) => {
    const {nom, psition, restorantNom} = req.body
    const teamMembers = await prisma.employee.create({
        data: {
            nom,
            psition,
            restorantNom
        }
    })
    res.render("team", teamMembers)
    res.send(teamMembers)
}

module.exports = { getTeams, createTeam}