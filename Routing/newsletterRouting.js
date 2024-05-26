const express = require("express")
const {getEmail, getEmails, creatEmail, sendEmails} = require("../controllers/newsletterController")
const router = express.Router()


router.use(express.json())

router.route("/newsletter/:status")
            .get(getEmail)

router.route("/newsletter")
            .get(getEmails)
            .post(creatEmail)

router.route("/newsletter/send")
            .post(sendEmails)
// router.route("/contact").get(getContact)
// router.route("/footer").get(getAbout)

module.exports = router