
const express = require("express");
const router = express.Router();

// use router variable  to registering different routes and handling different requests
//handling get requests for users
router.get("/", (req, res, next) => {
    
  res.status(200).json({
    message: "handling GET requests for /sensors"
 
  });
});

//handling post requests for sensors
router.post("/", (req, res, next) => {
    const sensor = {
        sensorType:req.body.sensorType,
        status: req.body.status,
        date: req.body.date,
        triggered: req.body.triggered,
        time: req.body.time
    };
  res.status(201).json({
    message: "handling POST requests for /sensors",
    createdSensor: sensor
  });
});

//handling requests for single user
router.get("/:sensorId", (req, res, next) => {
  const id = req.params.sensorId;
  if (id === "sensor") {
    res.status(200).json({
      message: "you discovered sensor id"
    });
  } else {
    res.status(200).json({
      message: "you passed an id"
    });
  }
});
//delete request for a single user
router.delete("/:sensorId", (req, res, next) => {
  res.status(200).json({
    message: "sensor deleted!",
    sensorId : req.params.sensorId
  });
});
  //patch request for a single user
router.patch("/:sensorID", (req, res, next) => {
    res.status(200).json({
      message: "sensor updated!",
      sensorId : req.params.sensorId
    });
});


module.exports = router;


