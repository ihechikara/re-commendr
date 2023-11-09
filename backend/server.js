const express = require("express")
require("dotenv").config()

const mongoose = require("mongoose")

const recoRoutes = require("./routes/recommend")

const app = express()

app.use(express.json())
app.use("/api/recommend", recoRoutes)

mongoose.connect(process.env.MONGO_CONNECT)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server is listening on port ${process.env.PORT}`)
        })
        console.log("db connected")
    })
    .catch((error) => {
        console.log(error)
    })