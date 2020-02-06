var express = require('express');
const jwt = require('jsonwebtoken');
const secretkey = require('../../config/secret')
var router = express.Router({ mergeParams: true });
var sensor = require('../../models/SENSOR');

var table_name = "sensors"

//get request for sensor with id or without

router.get('/:id?', verifyToken, function (req, res, next) {
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

// post request to insert sensor on to table

router.post('/', verifyToken, function (req, res, next) {
    jwt.verify(req.token, secretkey, (err, authData) => {
        if (err) {
            // respond Unauthorized request
            console.log("not allowed")
            res.sendStatus(403);
        } else {
            sensor.insert(req.body, table_name, function (err, results) {
                if (err) {
                    res.json(err);
                }
                else {
                    res.json({ id: results.insertId, values: req.body });
                }
            });
        }
    });
});

// delete request with id to delete sensor from database
router.delete('/:id', verifyToken, function (req, res, next) {
    jwt.verify(req.token, secretkey, (err, authData) => {
        if (err) {
            // respond Unauthorized request
            res.sendStatus(403);
        } else {
            sensor.delete(req.params.id, table_name, function (err, count) {
                if (err) {
                    res.json(err);
                }
                else {
                    res.json(count);
                }

            });
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

function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];

    if (typeof bearerHeader !== "undefined") {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        // res.sendStatus(403);
        res.writeHead(403);
    }
}
module.exports = router;
