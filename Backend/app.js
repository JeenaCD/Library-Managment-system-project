const express = require("express");
const BookData = require("./models/Bookdata");
const UserData = require("./models/Userdata");
const adminRoute = require("./routes/adminRoute");
const librarianRoute = require("./routes/librarianRoute");
const libraryMemRoute = require("./routes/libraryMemRoute");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const path = require("path");
var app = new express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/main", adminRoute);
app.use("/librarian", librarianRoute);
app.use("/libraryMem", libraryMemRoute);

app.get("/books", function (req, res) {
  BookData.find().then(function (books) {
    res.send(books);
  });
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("listening to port");
});
