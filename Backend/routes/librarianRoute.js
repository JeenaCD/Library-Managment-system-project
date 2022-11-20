const express = require("express");
const LibrarianData = require("../models/librariandata");
const router = express.Router();
const jwt = require("jsonwebtoken");
const LibraryMemberData = require("../models/librarymemberdata");
const BookData = require("../models/Bookdata");
const ReqBookData = require("../models/requestedbooks");
const librarymemberdata = require("../models/librarymemberdata");

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
  loginLibrarian = req.body;
  var flag = false;
  LibrarianData.find().then((librarian) => {
    for (let i = 0; i < librarian.length; i++) {
      if (
        loginLibrarian.username == librarian[i].username &&
        loginLibrarian.password == librarian[i].password
      ) {
        var _id = librarian[i]._id;
        flag = true;
        break;
      } else {
        flag = false;
      }
    }
    if (flag == true) {
      let payload = {
        subject: loginLibrarian.username + loginLibrarian.password,
      };
      let token = jwt.sign(payload, "secretKey");
      res.status(200).send({ token, flag, _id });
    } else {
      res.status(200).send({ msg: "Invalid Credentials" });
    }
  });
});

router.get("/books", verifyToken, function (req, res) {
  BookData.find().then(function (books) {
    res.send(books);
  });
});
router.get("/profile/:id", verifyToken, (req, res) => {
  const id = req.params.id;
  LibrarianData.findOne({ _id: id }).then((librarian) => {
    res.send(librarian);
  });
});

router.put("/edit", verifyToken, (req, res) => {
  (id = req.body._id),
    (bookId = req.body.bookId),
    (title = req.body.title),
    (author = req.body.author),
    (imageUrl = req.body.imageUrl),
    (category = req.body.category),
    (about = req.body.about),
    BookData.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          bookId: bookId,
          title: title,
          author: author,
          imageUrl: imageUrl,
          category: category,
          about: about,
        },
      }
    ).then(function () {
      res.send();
    });
});

router.delete("/remove/:id", verifyToken, (req, res) => {
  id = req.params.id;
  BookData.findByIdAndDelete({ _id: id }).then(() => {
    res.send();
  });
});

router.post("/addbook", verifyToken, async function (req, res) {
  var flag = false;
  const regBook = await BookData.findOne({ title: req.body.book.title });
  if (!regBook) {
    flag = true;
    var book = {
      bookId: req.body.book.bookId,
      title: req.body.book.title,
      author: req.body.book.author,
      imageUrl: req.body.book.imageUrl,
      about: req.body.book.about,
      category: req.body.book.category,
      availability: false,
    };
    var book = new BookData(book);
    book.save();
    return res.status(200).json({ msg: "Successfully added", flag });
  } else {
    flag = false;
    res.status(200).json({ msg: "This Book already exist", flag });
  }
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
      availability: req.body.book.availability,
      librarymemId: req.body.librarymemId,
    };
    var reqbook = new ReqBookData(reqbook);
    reqbook.save();
    return res.status(200).json({ msg: "Successfully requested", flag });
  } else {
    flag = false;
    return res.status(200).json({ msg: "Already issued to you", flag });
  }
});

router.get("/reqbooks", verifyToken, (req, res) => {
  ReqBookData.find().then(function (books) {
    res.send(books);
  });
});

router.post("/checkbook", verifyToken, async (req, res) => {
  var flag = false;
  await BookData.find({
    $and: [{ _id: req.body.book_id }, { availability: { $ne: true } }],
  }).then((book) => {
    if (book == "") {
      flag = false;
      ReqBookData.findByIdAndDelete({ _id: req.body._id }).then(() => {});
      res.status(200).send({ msg: "Sorry,Already Issued to Someone else" });
    } else {
      flag = true;
      ReqBookData.findByIdAndDelete({ _id: req.body._id }).then(() => {});
      LibraryMemberData.update(
        { _id: req.body.librarymemId },
        { $addToSet: { title: req.body.title } }
      );
      BookData.findByIdAndUpdate(
        { _id: req.body.book_id },
        {
          $set: {
            availability: true,
          },
        }
      ).then(function () {
        res
          .status(200)
          .send({ msg: "Congrats, Requested book issued for You", flag });
      });
    }
  });
});

module.exports = router;
