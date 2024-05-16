const express = require("express")
const {getRestoran, getAbout, createRestoran, getRestorants} = require("../controllers/restorantController")
const router = express.Router()


router.use(express.json())

router.route("/restoran/:ville").get(getRestoran)
router.route("/restoran").get(getRestorants)

router.route("/restoran").post(createRestoran)
router.route("/about").get(getAbout)
// router.route("/footer").get(getAbout)

module.exports = router