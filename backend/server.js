const express = require("express");
const cors = require("cors");
require("dotenv").config();

const mongoose = require("mongoose");

const recoRoutes = require("./routes/recommend");
const userRoutes = require("./routes/user");

const app = express();

const corsOptions = {
  origin: "http://localhost:3001", // Specify your client's origin
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204, // Some legacy browsers (IE11, various SmartTVs) choke on 204
};

// Enable CORS for all routes
app.use(cors());

app.use(express.json());
app.use("/api/recommend", recoRoutes);
app.use("/api/user", userRoutes);

mongoose
  .connect(process.env.MONGO_CONNECT)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is listening on port ${process.env.PORT}`);
    });
    console.log("db connected");
  })
  .catch((error) => {
    console.log(error);
  });
