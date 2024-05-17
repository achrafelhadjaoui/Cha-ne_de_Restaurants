
const express = require("express")
const { getRepas, createRepas } = require("../controllers/repaController")
const routing = express.Router()

routing.use(express.json())

routing.route("/repa")
                .get(getRepas)
                .post(createRepas)


module.exports = routing