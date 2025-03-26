import express from "express";
import morgan from "morgan";
import methodOverride from "method-override";
import "./db/connections.js";
//call you connection function here
import birdsRouter from "./controllers/birds.js";
//impot dot config 
const PORT = process.env.PORT || "3000";
const app = express();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(morgan("dev"));
app.set("view engine", "ejs");

// Routes
app.use("/", birdsRouter);

app.listen(PORT, () => {
  console.log(`App is running on port: ${PORT}`);
});