
const companySchema = require("../models/company.model");
const jwt = require("jsonwebtoken");
const { pick } = require("lodash");


const getCompany = async (req, res) => {
  try {
    const { id } = req.params;
    const company = await companySchema.findById(id).populate("challenges");
    res.status(200).json(company);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};


module.exports = { getCompany };
