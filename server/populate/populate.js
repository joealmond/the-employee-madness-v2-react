/*
Loading the .env file and creates environment variables from it
*/
require("dotenv").config();
const mongoose = require("mongoose");
const names = require("./names.json");
const levels = require("./levels.json");
const positions = require("./positions.json");
const positionsObj = require("./positionsObj.json");
const responsibilities = require("./responsibilities.json");
const EmployeeModel = require("../db/employee.model");
const PositionModel = require("../db/position.model");

const mongoUrl = process.env.MONGO_URL;

if (!mongoUrl) {
  console.error("Missing MONGO_URL environment variable");
  process.exit(1); // exit the current program
}

const pick = (from) => from[Math.floor(Math.random() * (from.length - 0))];

const populateEmployees = async () => {
  await EmployeeModel.deleteMany({});

  const employees = names.map((name) => ({
    name,
    level: pick(levels),
    responsibilities: pick(responsibilities),
  }));

  await EmployeeModel.create(...employees);
  console.log("Employees created");
};

const populatePositions = async () => {
  await PositionModel.deleteMany({});

  await PositionModel.create(...positionsObj);
  console.log("Positions created");
};

const main = async () => {
  await mongoose.connect(mongoUrl);

  await populateEmployees();
  await populatePositions();

  await mongoose.disconnect();
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
