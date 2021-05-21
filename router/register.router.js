let express= require("express");
let router= express.Router();

const RegisterC=require("../controllers/registration.controller");






router.get("/",RegisterC.retriveUser);
// router.get("/",RegisterC.postUser);

module.exports =router;