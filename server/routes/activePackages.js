const express = require('express');
const router = express.Router();
const activePackageManager = require('../managers/activePackagesManager');

router.get('/:activePackageId', async (req, res) => {
  try {
    const response = await activePackageManager.GetActivePackage(
      req.params.activePackageId
    );

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  const item = new ActivePackage(req.body);
  try {
    const newItem = await item.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Other routes for GET by ID, PUT, DELETE

module.exports = router;
