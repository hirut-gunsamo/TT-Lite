// should access the Location table in the mysql.
const express = require("express");
const router = express.Router();

// use router variable to registering different routes and handling different requests

//handling get requests for locations
router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "handling GET requests for /location"
  });
});

//handling post requests for users
router.post("/", (req, res, next) => {
  res.status(201).json({
    message: "handling POST requests for /location"
  });
});



module.exports = router;


