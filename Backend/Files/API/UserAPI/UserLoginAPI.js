const express = require("express");
const VerifyToken = require("../../Middlewares/VerifyToken");
const FindOne = require("../../Functions/FindOne");
const Users = require("../../Collections/UsersCollection");
const BcryptCompare = require("../../Middlewares/BcryptCompare");
const router = express.Router();


router.post("/", async (req, res) => {

  console.log("===== login API Started =====");

  try
  {
    const {formData} = req.body;

    const filter = {email: formData.email}
    const userObj = await FindOne(Users, filter)
    if(!userObj)
    {
      return res.json({code: 1, message: "couldn't find a account with this email. register first"})
    }

    const result = await BcryptCompare(formData.password, userObj.password)
    if(result==true)
    {
      return res.json({code: 2, message: "password matched, user can login"})
    }
    else
    {
      return res.json({code: 3, message: "password incorrect"})
    }

  }
  catch(err)
  {
    console.log("myErr login API :=== " + err);
    return res.json({code: 4, message: "unexpected error"})
  }
  finally
  {
    console.log("===== login API Ended =====");
  }

})


module.exports = router;