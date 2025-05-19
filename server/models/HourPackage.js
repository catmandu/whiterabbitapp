const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HourPackageSchema = new Schema({
  _id: mongoose.ObjectId,
  Name: String,
  Price: Number,
  HoursAmount: Number,
});

module.exports = mongoose.model(
  'hourPackage',
  HourPackageSchema,
  'HourPackages'
);
