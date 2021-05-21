const Sequelize=require("sequelize");
const db=require("../config/db.config");

const Customer= db.define('customer',{
firstname:{
    type:Sequelize.STRING
},
lastname:{
    type:Sequelize.STRING
},
address:{
    type:Sequelize.STRING
},
age:{
    type:Sequelize.INTEGER
},



})

module.exports= Customer;
