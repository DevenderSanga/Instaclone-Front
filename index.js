const express = require("express");
// require ('./src/db/connection')
require("dotenv").config();
const mongoose = require("mongoose")
const router = require('./src/router/instaclone')
let BASE_URL= process.env.BASE_URL;
let DB= process.env.DB;
const PORT = process.env.PORT
const app = express();
const cors = require("cors")

app.use(cors());

app.use(express.json());
app.use(router)
mongoose.connect(BASE_URL+DB)
.then(res=>console.log("connection is successfull"))
.catch(err=>console.log("connection not sucess",err))


app.listen(PORT,()=>{
    console.log(`listening the port ${PORT}`)
})