const HourPackage = require('../models/HourPackage');

const GetHourPackage = async (id) => {
  const hourPackage = await HourPackage.findOne({ _id: id });
  return hourPackage;
};

module.exports = {
  GetHourPackage,
};
