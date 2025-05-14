const express = require("express");
const router = express.Router();

const VerifyToken = require("../../Middlewares/VerifyToken");




router.get("/", VerifyToken, async (req, res) => {

  console.log("===== onStart API Started =====");
  
  try
  {
    return res.json({code: 3, message: "at least one token is valid, user can Loggin"})
  }
  catch(err)
  {
    console.log("myErr onStart :=== " + err);
    return res.json({code: 4, message: "Unexpected error"})
  }
  finally
  {
    console.log("===== onStart API Ended =====");
  }

})


router.get("/get-user-data", async (req, res) => {

  console.log("========== get-user-data Started ==========");

  try
  {
  }
  catch(err)
  {
    console.log("myErr get-user-data :=== " + err);
  }
  finally
  {
    console.log("========== get-user-data Ended ==========");
  }

})




module.exports = router;