const User = require('../models/user.model')
const bcrypt = require('bcrypt');
const errorHandler = require('../utils/error')
const signup = async (req, res, next) => {
    console.log(req.body)
    const {username, email, password} = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = new User({username, email, password: hashedPassword});
    try{
        await newUser.save();
        res.status(201).json('User Created successfully!');
    }
    catch(err){
        next(err);
    }
   
}

module.exports = {signup};