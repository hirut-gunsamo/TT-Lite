var express = require('express');
var router = express.Router({mergeParams: true});
var location = require('../../models/LOCATION');

var table_name = "location";

router.get('/:id?', function (req, res, next) {
    if (req.params.id) {
        location.getById(req.params.id, table_name, function (err, rows) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    } else {
        location.get(table_name, function (err, rows) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    }
})

router.post('/', function (req, res, next) {
    location.insert(req.body, table_name, function (err, results) {
        if (err) {
            res.json(err);
        }
        else {
            res.json({id: results.insertId, values: req.body});
        }
    });
});

router.delete('/:id', function (req, res, next) {
    location.delete(req.params.id, table_name, function (err, count) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(count);
        }

    });
});

router.put('/:id', function (req, res, next) {
    location.update(req.params.id, table_name, req.body, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
module.exports = router;