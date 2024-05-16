const { getTeams } = require("../controllers/teamController")
//const { getRestoran } = require("../controllers/restorantController")

const gethome = async (req, res) => {
    try {
        const teamMembers = await getTeams();
        console.log(teamMembers);
        res.render("index", { teamMembers });
    } catch (error) {
        console.error("Error fetching home page:", error);
        res.status(500).send("Internal Server Error");
    }
};

module.exports = {gethome}