const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  bookId: String,
  title: String,
  author: String,
  imageUrl: String,
  about: String,
  category: String,
  availability: Boolean,
  default: false,
});

const bookdata = mongoose.model("bookdata", BookSchema);

module.exports = bookdata;
