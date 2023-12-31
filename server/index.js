const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const userRouter = require('./routes/user.route.js')
const authRouter = require('./routes/auth.route.js')
dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('connected to DB')
}).catch((err)=>{
    console.error(err);
})
const app = express();
app.use(express.json());
app.use(cors());
app.listen(3000, ()=>{
    console.log('listening on port 3000')
})


app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

app.use((err, req, res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    })
})
