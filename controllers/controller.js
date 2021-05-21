
// const db =require('../config/db.config');
 const CustomerM =require("../models/customer.model");


exports.retriveCustomer=(req,res)=>{

CustomerM.findAll()
.then( customer=>{
    res.status(200).json({
       message:"Data Successfully Retrived",
       customers:customer,
       errors:''
    })
    
})
.catch(err => {
    res.status(500).json({
        messege:"error",
      errors:err})
});
}