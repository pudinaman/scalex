// routes/pairRoutes.js

const express = require('express');
const router = express.Router();
const pairController = require('../controllers/pairController');

// Define route to fetch price and volume by pair ID
router.get('/pair/:id', pairController.getPriceAndVolumeById);

module.exports = router;
