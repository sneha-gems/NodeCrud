const express = require("express");
const Mongoose = require("mongoose");
const User = require("../models/user-schema");

const router = express.Router();

router.post("/register", (req, res) => {
  const newuser = new User(req.body);
  newuser.save((err, doc) => {
    if (err) {
      return res.status(400).json({ succes: false });
    }
    res.status(200).json({
      sucess: true,
      user: doc,
    });
  });
});

router.delete("/user/:id", (req, res) => {
  var myId = new Mongoose.Types.ObjectId(req.params.id);
  User.deleteOne({ _id: myId }, (err, data) => {
    if (!err) {
      console.log("Member delete successfully");
      console.log("data", data);
      if (data.deletedCount !== 0) {
        res.send("done");
      } else {
        res.send("Data is already deleted");
      }

      //   delete data;
    } else {
      console.log("error", err);
      res.send(err);
      res.status(400);
    }
  });
});

router.put("/user/:id", async (req, res) => {
  console.log(req.params);
  const data = await User.updateOne(req.params, { $set: req.body });
  res.send(data);
});

module.exports = router;
