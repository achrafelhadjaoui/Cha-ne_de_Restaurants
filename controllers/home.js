const { getTeams } = require("../controllers/teamController")
const { getFooter } = require("../controllers/footerController")
const { getRepas} = require("../controllers/repaController")
//const { getRestoran } = require("../controllers/restorantController")

const gethome = async (req, res) => {
    try {
        const teamMembers = await getTeams();
        const footer = await getFooter();
        const repa = await getRepas();
        

        console.log(teamMembers);
        res.render("index", { teamMembers, footer, repa });
    } catch (error) {
        console.error("Error fetching home page:", error);
        res.status(500).send("Internal Server Error");
    }
};

module.exports = {gethome}