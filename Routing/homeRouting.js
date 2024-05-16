const express = require("express")
const {gethome} = require("../controllers/home")
const router = express.Router()


router.use(express.json())

router.route("/home").get(gethome)

module.exports = router