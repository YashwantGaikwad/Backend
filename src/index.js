// require('dotenv').config({path:'./env'});
import dotenv from "dotenv";
import connectdb from "./db/connect.js";

dotenv.config({
    path:'./env'
})

connectdb()
.then(() =>{
    app.listen(process.env.PORT || 8000, () =>{
        console.log(`Server is running at port: ${process.env.PORT}`);
    })
})
.catch((err) =>{
    console.log("MONGODB connection failed !!", err);
})