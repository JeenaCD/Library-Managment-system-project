const express = require("express");
const AdminData = require("../models/admindata");
const LibrarianData = require("../models/librariandata");
const router = express.Router();
const jwt = require("jsonwebtoken");
const LibraryMemberData = require("../models/librarymemberdata");
const BookData = require("../models/Bookdata");
const ReqBookData = require("../models/requestedbooks");

function verifyToken(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send("Unauthorized request");
  }
  let token = req.headers.authorization.split(" ")[1];
  if (token === "null") {
    return res.status(401).send("Unauthorized request");
  }
  let payload = jwt.verify(token, "secretKey");
  if (!payload) {
    return res.status(401).send("Unauthorized request");
  }
  req.userId = payload.subject;
  next();
}

router.post("/login", (req, res) => {
  loginLibararyMem = req.body;
  var flag = false;
  LibraryMemberData.find().then((libraryMem) => {
    for (let i = 0; i < libraryMem.length; i++) {
      if (
        loginLibararyMem.username == libraryMem[i].username &&
        loginLibararyMem.password == libraryMem[i].password
      ) {
        var _id = libraryMem[i]._id;
        flag = true;
        break;
      } else {
        flag = false;
      }
    }
    if (flag == true) {
      let payload = {
        subject: loginLibararyMem.username + loginLibararyMem.password,
      };
      let token = jwt.sign(payload, "secretKey");
      res.status(200).send({ token, flag, _id });
    } else {
      res.status(200).send({ msg: "Invalid Credentials" });
    }
  });
});

router.get("/profile/:id", verifyToken, (req, res) => {
  const id = req.params.id;
  LibraryMemberData.findOne({ _id: id }).then((librarymem) => {
    res.send(librarymem);
  });
});

router.get("/books", verifyToken, (req, res) => {
  BookData.find().then(function (books) {
    res.send(books);
  });
});

router.post("/booksearch", verifyToken, async (req, res) => {
  await BookData.find({
    $or: [
      { title: { $regex: req.body.title } },
      { author: { $regex: req.body.author } },
      { category: { $regex: req.body.category } },
    ],
  }).then((books) => {
    res.send(books);
  });
});

router.post("/requestbook", verifyToken, async (req, res) => {
  var flag = false;
  const borrowedBook = await LibraryMemberData.findOne({
    "borrowedBooks.title": req.body.book.title,
  });
  if (!borrowedBook) {
    flag = true;
    var reqbook = {
      book_id: req.body.book._id,
      title: req.body.book.title,
      author: req.body.book.author,
      imageUrl: req.body.book.imageUrl,
      availability: req.body.book.availability,
      librarymemId: req.body.librarymemId,
    };
    var reqbook = new ReqBookData(reqbook);
    reqbook.save();
    res.status(200).json({ msg: "Successfully requested", flag });
  } else {
    flag = false;
    res.status(200).json({ msg: "Already issued to you", flag });
  }
});

module.exports = router;
