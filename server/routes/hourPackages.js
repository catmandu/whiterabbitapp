const express = require('express');
const router = express.Router();
const HourPackages = require('../models/HourPackage');

router.get('/:hourPackageId', async (req, res) => {
  try {
    const response = await HourPackages.findOne({
      _id: req.params.hourPackageId,
    });

    res.json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
