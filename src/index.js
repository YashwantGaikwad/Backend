// require('dotenv').config({path:'./env'});
import dotenv from "dotenv";
import connectdb from "./db/connect.js";

dotenv.config({
    path:'./env'
})

connectdb();