'use strict';

const bcrypt = require('bcrypt');
const User = require('../model/userModel');
exports.registerUser = (req, res) => {
    //encrypting the Password
    let pimpedBody = Object.assign({}, req.body, { password: bcrypt.hashSync(req.body.password, 10) });
    let newUser = new User(pimpedBody);
    newUser.save((err, user) => {
        err ? res.send(err) : res.json(user);
    })
}