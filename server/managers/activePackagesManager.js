const ActivePackage = require('../models/ActivePackage');
const HourPackagesManager = require('./hourPackagesManager');

const GetActivePackage = async (id) => {
  const activePackage = await ActivePackage.findOne({ _id: id });

  const hourPackage = await HourPackagesManager.GetHourPackage(
    activePackage.Package
  );

  const activePackageDto = activePackage.toJSON();

  activePackageDto.Package = hourPackage.Name;

  return activePackageDto;
};

module.exports = {
  GetActivePackage,
};
