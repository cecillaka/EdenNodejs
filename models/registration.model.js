const Sequelize=require("sequelize");
const db=require("../config/db.config");

const Registration= db.define('registration',{

    email:{
        type:Sequelize.STRING
    },
    password:{
        type:Sequelize.STRING
    },
firstname:{
    type:Sequelize.STRING
},
lastname:{
    type:Sequelize.STRING
},
address:{
    type:Sequelize.STRING
},
cellno:{
    type:Sequelize.STRING
},

profilePicture:{
    type:Sequelize.STRING
},
createdAt:{
    type:Sequelize.DATE
},
updatedAt:{
    type:Sequelize.DATE
},



})

module.exports= Registration;
