const Pair = require("../models/pairModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncError");

// Controller to fetch price and volume by pair ID
exports.getPriceAndVolumeById = catchAsyncErrors(async (req, res, next) => {
  const pairId = req.params.id;

  // Find the pair in the database by ID
  const pair = await Pair.findOne({ 'pairs._id': pairId });

  // If pair is not found, return an error
  if (!pair) {
    return next(new ErrorHandler("Pair not found", 404));
  }

  // Find the specific pair from the pairs array within the document
  const pairData = pair.pairs.find(pair => pair._id.toString() === pairId);

  // Extract price and volume from the pair data
  const { priceUsd, volume } = pairData;

  // Send response with price and volume data
  res.status(200).json({
    success: true,
    priceUsd,
    volume
  });
});
