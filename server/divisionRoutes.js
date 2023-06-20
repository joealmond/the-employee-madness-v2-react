const express = require('express');
const DivisionModel = require("./db/division.model");

const divisionRouter = express.Router();

divisionRouter.get("/", async (req, res) => {
    const divisions = await DivisionModel.find().populate('boss').sort({ created: "desc" });
    return res.json(divisions);
  });
  
  divisionRouter.get("/:id", async (req, res) => {
    const division = await DivisionModel.findById(req.params.id);
    return res.json(division);
  });
  
  divisionRouter.post("/", async (req, res, next) => {
    const division = req.body;
  
    try {
      const saved = await DivisionModel.create(division);
      return res.json(saved);
    } catch (err) {
      return next(err);
    }
  });
  
  divisionRouter.patch("/:id", async (req, res, next) => {
    try {
      const division = await DivisionModel.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { ...req.body } },
        { new: true }
      );
      return res.json(division);
    } catch (err) {
      return next(err);
    }
  });
  
  divisionRouter.delete("/:id", async (req, res, next) => {
    try {
      const division = await DivisionModel.findById(req.params.id);
      const deleted = await division.delete();
      return res.json(deleted);
    } catch (err) {
      return next(err);
    }
  });

  module.exports = divisionRouter;