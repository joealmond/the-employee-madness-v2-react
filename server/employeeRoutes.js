const express = require('express');
const EmployeeModel = require("./db/employee.model");

const employeeRouter = express.Router();

employeeRouter.get("/", async (req, res) => {
    const employees = await EmployeeModel.find().sort({ created: "desc" });
    return res.json(employees);
  });
  
  employeeRouter.get("/:id", async (req, res) => {
    const employee = await EmployeeModel.findById(req.params.id);
    return res.json(employee);
  });
  
  employeeRouter.post("/", async (req, res, next) => {
    const employee = req.body;
  
    try {
      const saved = await EmployeeModel.create(employee);
      return res.json(saved);
    } catch (err) {
      return next(err);
    }
  });
  
  employeeRouter.patch("/:id", async (req, res, next) => {
    try {
      const employee = await EmployeeModel.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { ...req.body } },
        { new: true }
      );
      return res.json(employee);
    } catch (err) {
      return next(err);
    }
  });
  
  employeeRouter.delete("/:id", async (req, res, next) => {
    try {
      const employee = await EmployeeModel.findById(req.params.id);
      const deleted = await employee.delete();
      return res.json(deleted);
    } catch (err) {
      return next(err);
    }
  });

  module.exports = employeeRouter;