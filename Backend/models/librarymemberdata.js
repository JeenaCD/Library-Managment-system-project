const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const librarymemSchema = new mongoose.Schema({
  librarymemberId: String,
  name: String,
  username: String,
  password: String,
  numberOfBooks: String,
  borrowedBooks: [
    {
      title: String,
    },
  ],
});

module.exports = mongoose.model("librarymemberdata", librarymemSchema);
