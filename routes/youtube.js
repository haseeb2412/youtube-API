const express = require("express")
const router = express.Router();

router.route("/").get(getYoutube)
router.route("/testing").get(getYoutubetesting)