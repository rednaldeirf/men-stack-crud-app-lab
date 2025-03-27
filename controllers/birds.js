import { Router } from "express";
import Bird from "../models/birds.js";

const birdsRouter = Router();

birdsRouter.get("/", (req, res) => {
  res.render("index");
});

// Get the create form
birdsRouter.get("/birds/new", (req, res) => {
  res.render("birds/new");
});

// Get the edit form
birdsRouter.get("/birds/:id/edit", async (req, res) => {
  const { id } = req.params;
  const bird = await Bird.findById(id);

  res.render("birds/edit", { bird });
});

birdsRouter.get("/birds/:id", async (req, res) => {
  const { id } = req.params;
  const bird = await Bird.findById(id);

  res.render("birds/show", { bird });
});

// Get all birds
birdsRouter.get("/birds", async (req, res) => {
  const birds = await Bird.find({});
  res.render("birds/index", { birds });
});

// Create a bird
birdsRouter.post("/birds", async (req, res) => {
  let { name, isReadyToFly } = req.body;

  if (isReadyToFly) {
    isReadyToFly = true;
  } else {
    isReadyToFly = false;
  }

  const bird = await Bird.create({ name, isReadyToFly });

  res.redirect("/birds");
});

birdsRouter.put("/birds/:id", async (req, res) => {
  // Grab the id from the params
  const { id } = req.params;
  const updateData = {
    name: req.body.name,
    isReadyToFly: req.body.isReadyToFly,
  };

  if (updateData.isReadyToFly) {
    updateData.isReadyToFly = true;
  } else {
    updateData.isReadyToFly = false;
  }

  // Get the bird and update it
  await Bird.findByIdAndUpdate(id, updateData, {
    returnDocument: "after",
  });
  // redirect to bird
  res.redirect(`/birds/${id}`);
});

birdsRouter.delete("/birds/:id", async (req, res) => {
  const { id } = req.params;
  await Bird.findByIdAndDelete(id);

  res.redirect("/birds");
});

export default birdsRouter;