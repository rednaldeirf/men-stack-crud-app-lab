// import mongoose from "mongoose";

// const birdSchema = mongoose.Schema({
//   name: { type: String, required: true },
//   description: { type: String, required: true },
//   image: String,
// });

// const Bird = mongoose.model("Bird", birdSchema);

// export default Bird;

import mongoose from "mongoose";

const birdSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  isReadyToFly: Boolean,
});

const Bird = mongoose.model("Bird", birdSchema);

export default Bird;