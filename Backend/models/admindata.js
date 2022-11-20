const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const adminSchema = new mongoose.Schema({
  username: String,
  password: String,
});

module.exports = mongoose.model("admindata", adminSchema);
