import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
const app = express();
dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('connected to DB')
}).catch((err)=>{
    console.error(err);
})
app.listen(3000, ()=>{
    console.log('listening on port 3000')
})