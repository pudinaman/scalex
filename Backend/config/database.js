const mongoose = require("mongoose");
DB_URI='mongodb://127.0.0.1:27017/scalex'
const connectDatabase = () => {
  mongoose.connect(DB_URI, {
    //useNewUrlParser: true,
    //useUnifiedTopology: true,
   // useCreateIndex: true,
   // useFindAndModify: false,
  })
  .then((data) => {
    console.log(`Mongoose connected with server: ${data.connection.host}`);
  })
};

module.exports = connectDatabase;
