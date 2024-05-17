
const express = require("express")
const { getCategorie, createCategorie } = require("../controllers/categorieController")
const routing = express.Router()

routing.use(express.json())

routing.route("/categorie")
                .get(getCategorie)
                .post(createCategorie)


module.exports = routing