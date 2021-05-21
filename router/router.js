let express= require("express");
let router= express.Router();
const CustomerC =require("../controllers/controller")
const RegisterC=require("../controllers/registration.controller");
const checkAuth= require("../config/middleware/check.Auth");




// router.get("/customer1",CustomerC.retriveCustomer);
router.get("/user",checkAuth,RegisterC.retriveUser);
router.post("/createuser",RegisterC.trypostUser);
router.post("/login",RegisterC.login,checkAuth);



module.exports =router;