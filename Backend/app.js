const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const errorMiddleware = require("./middleware/error");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(cookieParser()); // Fix: Invoke cookieParser as a function

// Route Imports

const pair=require("./routes/pairRoutes");

app.use('/api/v2',pair);



module.exports = app;

// Middleware for error
app.use(errorMiddleware);
