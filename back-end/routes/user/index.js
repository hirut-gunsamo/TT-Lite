var express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt-nodejs');
const secret = require('../../config/secret');
var router = express.Router({mergeParams: true});
var user = require('../../models/USER');
var table_name = "users"

router.post('/login', function (req, res, next) {
    if (req.body.email && req.body.password) {
        user.getByEmail(req.body.email, table_name, function (err, rows) {
            if (err) {

                res.json(err);
            }
            else {
                const user = rows[0];
                if(!user){
                    res.json("Email incorrect please try agin.")
                }else{
                    // console.log("input: ",req.body.password);
                    // console.log("row.pass :",user.password);
                    bcrypt.compare(req.body.password ,user.password, (error, result)=>{
                        console.log("result: ", result);
                        if(result && !error){
                            //sucessfully logged in
                            const dataUser = {
                                id: user.id,
                                email: user.email,
                              };
                      
                              const token = jwt.sign({
                                user: dataUser,
                              }, secret, {
                                expiresIn: '125h',
                              });

                              return res.json({
                                success: true,
                                access_token: token,
                                user: {
                                  _id: user.id,
                                  First_name: user.First_name,
                                  Last_name: user.Last_name,
                                  email: user.email,
                                },
                              });

                        }else{
                            return res.json({
                                success: false,
                                message:"your password is incorrect please try again."
                            })
                        }
                    });
                }
            }
        });
    }
})
router.post('/signup', function (req, res, next) {

    const passwordHash = bcrypt.hashSync(req.body.password);
    var user_info = {
            First_name: req.body.First_name,
            Last_name: req.body.Last_name,
            email: req.body.email,
            password: passwordHash 
    }
    user.register(user_info,table_name, function (err, results) {
        if (err) {
            res.json(err);
        }
        else {
            res.status(201).json({message:"Succesfully Registered", success:true});
        }
    });
});

module.exports = router;