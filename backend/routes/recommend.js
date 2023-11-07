const express = require("express")
const { createReco } = require("../controllers/recommend")

const router = express.Router()

router.post("/", createReco)

module.exports = router