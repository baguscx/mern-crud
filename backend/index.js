import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRouter from "./routes/User.route.js";

const app = express();

mongoose.connect("mongodb://localhost:27017/mern_crud");
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to Database"));

app.use(cors());
app.use(express.json());
app.use(UserRouter);

app.listen(5000, () => {
  console.log("Server has started on http://localhost:5000");
});
