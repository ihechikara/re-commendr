const express = require("express")
const { createReco, saveReco, getAllReco, getSingleReco } = require("../controllers/recommend")
const requireAuth = require("../middleware/requireAuth")

const router = express.Router()

router.use(requireAuth)

router.get("/", getAllReco)

router.get("/:id", getSingleReco)

router.post("/", createReco)

router.post("/save", saveReco)

module.exports = router