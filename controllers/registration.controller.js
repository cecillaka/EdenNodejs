const RegistrationM =require("../models/registration.model");
const { param } = require("../router/router");
const customer= require("../models/customer.model");
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt");
const JWT_KEY="secret";



exports.retriveUser=(req,res)=>{

customer.findAll({ where:id=1})
    .then( RegisterUser=>{

        if(RegisterUser.length>0){
           
            res.status(200).json({
                message:"Data Successfully Retrived",
                user:RegisterUser,
                errors:''
             })
        }
        else{
            res.status(300).json({
                message:"no user to display",
              
                errors:''
             })
        }
       
        
    })
    .catch(err => {
        res.status(500).json({
            messege:"error",
          errors:err})
    });
    }







  














    




        exports.trypostUser=(req,res)=>{

            let user={
                firstname:req.body.firstname,
                lastname:bcrypt.hashSync(req.body.lastname,10),
                address:req.body.address,
                age:req.body.age
            };
            
              


                customer.findAll({ where:{firstname:user.firstname}})
                .then( RegisterUser=>{
            
                    if(Object.entries(RegisterUser).length>0){
                       
                        res.status(200).json({
                            message:"user already exist",
                            user:RegisterUser,
                            errors:''
                         })
                         console.log(RegisterUser)
                    }
                    else{
                      

                        customer.create(user).then(results=>{
                            res.status(200).json({
                                message:"info successfully stored",
                                userInfo:results,
                                errorr:""
                            })
                        
                            
                            }) .catch(err => {
                                res.status(500).json({
                                    messege:"info failed to be stored",
                                  errors:err})
                            });
                           


                    }
                   
                    
                }).catch(err => {
                    res.status(500).json({
                        messege:"error in operation",
                      errors:err})
                });
               


        }     




















        exports.login=(req,res)=>{

            let user={
                firstname:req.body.firstname,
               
            };
            
              


                customer.findAll({ where:{firstname:user.firstname}})
                .then( RegisterUser=>{
            
                    if(Object.entries(RegisterUser).length>0){
                        bcrypt.compare(req.body.lastname,RegisterUser[0].lastname,(err,result)=>{
                            if(err){
                                return res.status(401).json({
                                    message:"Auth Failed",
                                    list:req.body.firstname,
                                })
                            }

                            if(result){

                                const token=jwt.sign({
                                    firstname:RegisterUser[0].firstname,
                                    id:RegisterUser[0].id
                                },
                                JWT_KEY,
                                {
                                    expiresIn:"1h"
                                }
                                
                                )
                                return res.status(200).json({
                                    message:"Auth Successful",
                                    token:token
                                })
                            }

                        })
                       
                    }
                   
                    
                }).catch(err => {
                    res.status(500).json({
                        messege:"operation failed",
                      errors:err})
                });
               


        }     
    
    
        