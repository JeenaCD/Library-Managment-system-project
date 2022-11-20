const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const Schema = mongoose.Schema;

const ReqBookSchema = new Schema({
  book_id: String,
  title: String,
  author: String,
  category: String,
  imageUrl: String,
  availability: String,
  librarymemId: String,
});

const reqbookdata = mongoose.model("reqbookdata", ReqBookSchema);

module.exports = reqbookdata;
