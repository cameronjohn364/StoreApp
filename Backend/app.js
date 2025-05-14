const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const UserRegisterAPI = require("./Files/API/UserAPI/UserRegisterAPI")
const UserLoginAPI = require("./Files/API/UserAPI/UserLoginAPI")
const OnStartAPI = require("./Files/API/UserAPI/OnStartAPI")

const connect = async () => {

  try
  {
    await mongoose.connect("mongodb+srv://cameronjohn364:lambogini@cluster0.9o1u6.mongodb.net/StoreApp?retryWrites=true&w=majority")
    
    app.use(cors({
      origin: "http://localhost:5173",
      credentials: true
    }));
    app.use(express.json());
    app.use(cookieParser());
    
    app.use("/api/user/register", UserRegisterAPI);
    app.use("/api/user/login", UserLoginAPI);
    app.use("/api/user/onstart", OnStartAPI);
    
    app.listen(process.env.PORT || 5000);
    console.log("Connected");
  }
  catch(err)
  {
    console.log("Not Connected");
    console.log("myErr connect :=== " + err);
  }

}

connect();


// const BcryptHash = require("./Files/Middlewares/BcryptHash")
// const BcryptCompare = require("./Files/Middlewares/BcryptCompare")

// const test = async () => {

//   console.log("1");

//   const result1 = BcryptHash("hello")
//   console.log(result1);

//   console.log("2");

//   const result2 = await BcryptCompare("", result1)
//   console.log(result2);

//   console.log("3");
// }

// test();