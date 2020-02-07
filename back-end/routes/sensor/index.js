var express = require('express');
const jwt = require('jsonwebtoken');
const secretkey = require('../../config/secret')
var router = express.Router({ mergeParams: true });
var sensor = require('../../models/SENSOR');

var table_name = "sensors"

/***************************************************************/
/*          This page handle request related to sensors        */
/***************************************************************/

//this route accept sensor id and token the respond sensor information if requested without id it respond all sensor information
router.get('/:id?', function (req, res, next) {
    if (req.params.id) {
        sensor.getById(req.params.id, table_name, function (err, rows) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    } else {
        sensor.get(table_name, function (err, rows) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    }
})

// this router accept sensor information and verification token then respond registered sensor

router.post('/', function (req, res, next) {
    sensor.insert(req.body, table_name, function (err, results) {
        if (err) {
            res.json(err);
        }
        else {
            res.json({ id: results.insertId, values: req.body });
        }
    });

});

// delete request with id to delete sensor from database
router.delete('/:id', function (req, res, next) {
    sensor.delete(req.params.id, table_name, function (err, count) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(count);
        }

    });
});

// put request to edit or update sensor on database with id
router.put('/:id', function (req, res, next) {

    sensor.update(req.params.id, table_name, req.body, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});


module.exports = router;
