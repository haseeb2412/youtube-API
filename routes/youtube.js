const express = require("express")
const router = express.Router();
const {getYoutube,getYoutubetesting}  = require("../controller/youtubeController")

router.route("/").get(getYoutube)
router.route("/testing").get(getYoutubetesting)

module.exports = router;