const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const librarianSchema = new mongoose.Schema({
  librarianId: String,
  name: String,
  username: String,
  password: String,
});

module.exports = mongoose.model("librariandata", librarianSchema);
