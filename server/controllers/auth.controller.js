const User = require('../models/user.model')
const bcrypt = require('bcrypt');
const errorHandler = require('../utils/error')
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
dotenv.config();
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

const signin = async (req, res, next) => {
    const {email, password} = req.body;
    try{
        const validUser = await User.findOne({email});
        if(!validUser) {
            return next(errorHandler(404, 'Email not found!'));
        }

        const validPassword = bcrypt.compareSync(password, validUser.password);
        if(!validPassword) {
            return next(errorHandler(401, 'Wrong Credentials!!'))
        }
        const token = jwt.sign({id : validUser._id}, process.env.JWT_SECRET)
        const {password : pass, ...rest} = validUser._doc; 
        res.cookie('access_token', token, {httpOnly : true}).status(200).json(rest);
    }
    catch(err){
        next(err);
    }
}
module.exports = {signup, signin};