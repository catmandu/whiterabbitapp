const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ActivePackageSchema = new Schema({
  _id: mongoose.ObjectId,
  StartDate: Date,
  Package: mongoose.ObjectId,
  RemainingHours: Number,
  FinishDate: Date,
  SkipNextUpdate: Boolean,
  HoursToSubstract: Number,
});

module.exports = mongoose.model(
  'activePackage',
  ActivePackageSchema,
  'ActivePackages'
);
