const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./db/connect");

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("Welcome to store-api"));

//middleware
app.use(express.json());

//routes

app.use(require("./middleware/not-found"));

const startServer = () => {
  try {
    connectDB(process.env.MONGODB_URI);

    app.listen(PORT, console.log(`Server is listening on port ${PORT}...`));
  } catch (error) {
    console.log(error);
  }
};

startServer();
