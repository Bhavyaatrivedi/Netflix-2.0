require("dotenv").config();

const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());



const connectDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    
    })
    .then((data) => {
      console.log("Connected to DB");
    });
};

connectDatabase();

 app.use("/api/user", userRoutes);

app.listen(5000, () => {
  console.log("server started on port 5000");
});