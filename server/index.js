require('dotenv').config()
const cors=require('cors')
const express=require('express');
const mongoose=require('mongoose');
const app=express();

app.use(cors());
app.use(express.json());


const MONGO_URL=process.env.MONGO_URL;
const PORT=process.env.PORT || 5000;
mongoose.connect(MONGO_URL)
    .then(()=>{
        console.log("-----CONNECTED TO DB-----")
        app.listen(PORT,()=>{
            console.log(`-----SERVER RUNNING AT PORT ${PORT}-----`)
        })
    })
    .catch(()=>{
        console.log("--ERROR CONNECTING TO DB--")
    })
