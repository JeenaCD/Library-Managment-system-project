const express = require("express");
const AdminData = require("../models/admindata");
const LibrarianData = require("../models/librariandata");
const router = express.Router();
const jwt = require("jsonwebtoken");
const LibraryMemberData = require("../models/librarymemberdata");

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

router.post("/signup", (req, res) => {
  const admin = new AdminData({
    username: req.body.email,
    password: req.body.password,
  });
  admin.save().then(() => {
    res.send("Saved");
  });
});

router.post("/login", (req, res) => {
  loginAdmin = req.body;
  var flag = false;
  AdminData.find().then((admin) => {
    for (let i = 0; i < admin.length; i++) {
      if (
        loginAdmin.username == admin[i].username &&
        loginAdmin.password == admin[i].password
      ) {
        flag = true;
        break;
      } else {
        flag = false;
      }
    }
    if (flag == true) {
      let payload = { subject: loginAdmin.username + loginAdmin.password };
      let token = jwt.sign(payload, "secretKey");
      res.status(200).send({ token, flag });
    } else {
      res.status(200).send({ msg: "Invalid Credentials" });
    }
  });
});

router.get("/getlibrarianscount", verifyToken, (req, res) => {
  LibrarianData.find()
    .countDocuments()
    .then((data) => {
      res.status(200).json(data);
    });
});

router.get("/getlibrarymemberscount", verifyToken, (req, res) => {
  LibraryMemberData.find()
    .countDocuments()
    .then((data) => {
      res.status(200).json(data);
    });
});

router.post("/addLibrarian", verifyToken, async (req, res) => {
  var flag = false;
  const regLibrarian = await LibrarianData.findOne({
    username: req.body.username,
  });
  if (!regLibrarian) {
    flag = true;
    var librarian = {
      librarianId: req.body.librarianId,
      name: req.body.name,
      username: req.body.username,
      password: req.body.password,
    };
    var librarian = new LibrarianData(librarian);
    librarian.save();
    return res.status(200).json({ msg: "Successfully added", flag });
  } else {
    flag = false;
    res.status(200).json({ msg: "This Username already added", flag });
  }
});

router.post("/addLibrarymember", verifyToken, async (req, res) => {
  var flag = false;
  const regLibrarymember = await LibraryMemberData.findOne({
    username: req.body.username,
  });
  if (!regLibrarymember) {
    flag = true;
    var librarymember = {
      librarymemberId: req.body.librarymemberId,
      name: req.body.name,
      username: req.body.username,
      password: req.body.password,
    };
    var librarymember = new LibraryMemberData(librarymember);
    librarymember.save();
    return res.status(200).json({ msg: "Successfully added", flag });
  } else {
    flag = false;
    res.status(200).json({ msg: "This Username already added", flag });
  }
});

router.get("/librarians", verifyToken, (req, res) => {
  LibrarianData.find().then(function (librarians) {
    res.send(librarians);
  });
});

router.get("/librarymembers", verifyToken, (req, res) => {
  LibraryMemberData.find().then(function (libraryMembers) {
    res.send(libraryMembers);
  });
});

router.delete("/removelibrarian/:id", verifyToken, (req, res) => {
  id = req.params.id;
  LibrarianData.findByIdAndDelete({ _id: id }).then(() => {
    res.status(200).json({ msg: "Successfully Deleted" });
  });
});

router.delete("/removelibraryMember/:id", verifyToken, (req, res) => {
  id = req.params.id;
  LibraryMemberData.findByIdAndDelete({ _id: id }).then(() => {
    res.status(200).json({ msg: "Successfully Deleted" });
  });
});

module.exports = router;
