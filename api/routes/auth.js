const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async (req, res) => {
  console.log(req.body.pass);
  const encrypted = CryptoJS.TripleDES.encrypt(
    req.body.pass,
    process.env.PASS_SEC
  ).toString();
  console.log(encrypted)
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: encrypted
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN

router.post('/login', async (req, res) => {
    try{
      console.log(req.body.password);
        const user = await User.findOne(
            {
                username: req.body.username
            }
        );
        console.log(user);
        !user && res.status(401).json("Wrong User Name");
        console.log(user.password);
        console.log(process.env.PASS_SEC);
        const hashedPassword = CryptoJS.TripleDES.decrypt(
            user.password,
            process.env.PASS_SEC
        );

        console.log("hashedpass is: "+hashedPassword);

        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
        
        console.log("originalpass is: "+originalPassword);

        const inputPassword = req.body.password;
        
        originalPassword != inputPassword && 
            res.status(401).json("Wrong Password");

        const accessToken = jwt.sign(
        {
            id: user._id,
            isAdmin: user.isAdmin,
        },
        process.env.JWT_SEC,
            {expiresIn:"3d"}
        );
  
        const { password, ...others } = user._doc;  
        res.status(200).json({...others, accessToken});

    }catch(err){
        res.status(500).json(err);
    }

});

module.exports = router;