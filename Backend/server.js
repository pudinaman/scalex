const app = require("./app");
const dotenv = require("dotenv");

const connectDatabase = require("../Backend/config/database");
PORT=6000
// handling uncaught exception
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to uncaught exception`);
    process.exit(1);
});

// config
dotenv.config({ path:"Backend/config/config.env" });

// Connect to the database
connectDatabase();

const server = app.listen(PORT, () => {
    console.log(`Server is working on http://localhost:${PORT}`);
});

// unhandled Promise rejection
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to unhandled Promise rejection`);

    server.close(() => {
        process.exit(1);
    });
});
