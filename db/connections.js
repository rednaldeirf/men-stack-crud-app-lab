// import mongoose from "mongoose";

// //TODO:turn this into a function and export it in your server.js
// mongoose.connect(process.env.MONGODB_URI).then(
//   () => console.log("Connected to MongoDB"),
//   (err) => console.error(err)
// );

import mongoose from "mongoose";
import { configDotenv } from "dotenv";
configDotenv();

mongoose.connect(process.env.MONGODB_URI).then(
  () => console.log("Connected to MongoDB"),
  (err) => console.error(err)
);