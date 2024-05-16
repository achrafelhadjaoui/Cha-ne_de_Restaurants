
const express = require("express")
const { getTeams, createTeam } = require("../controllers/teamController")
const routingTeam = express.Router()

routingTeam.use(express.json())

routingTeam.route("/team")
                .get(getTeams)
                .post(createTeam)


module.exports = routingTeam