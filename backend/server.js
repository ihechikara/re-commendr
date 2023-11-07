const express = require("express")
require("dotenv").config()

const recoRoutes = require("./routes/recommend")

const app = express()

app.use(express.json())
app.use("/api/recommend", recoRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}`)
})