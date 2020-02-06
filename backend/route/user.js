//route('/create-user')
const express = require("express");
const router = express.Router();

// use router variable created to registering different routes and handling different requests
//handling get requests for users
router.get("/", (req, res, next) => {
    res.status(200).json({
    message: "handling GET requests for /users"
    
  });
});

//handling post requests for users
router.post("/", (req, res, next) => {
    const user = {
        username: req.body.name,
        password: req.body.password,
        email: req.body.email
    };
  res.status(201).json({
    message: "handling POST requests for /users",
    createdUser: user
  });
});

//handling requests for single user
router.get("/:userId", (req, res, next) => {
  const id = req.params.userId;
  if (id === "user") {
    res.status(200).json({
      message: "you discovered user id"
    });
  } else {
    res.status(200).json({
      message: "you passed an id"
    });
  }
});
//delete request for a single user
router.delete("/:userId", (req, res, next) => {
  res.status(200).json({
    message: "user deleted!",
    userId : req.params.userId
  });
});

module.exports = router;
