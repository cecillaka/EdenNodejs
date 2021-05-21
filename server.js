const express=require("express");
const bodyParse=require("body-parser");
const app= express();
// database
const db =require("./config/db.config");
const bodyParser = require("body-parser");
let router=require("./router/router");


const Port= process.env.Port || 3000;



// test connection
db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
  app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use((req ,res,next)=>{
  res.header("Access-control-Allow-Origin");
  res.header("Access-Control-Headers",
  "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  if(req.method==="OPTIONS"){
    res.header("Access-Control-Allow-Methods","PUT,POST,PATCH,DELETE,GET");
    return res.status(200).json({});
  }
  next();
})



app.get('/',(req,res)=>res.send('index')) 
// app.use('/customer',require('./router/router'))
// app.use('/user',require('./router/register.router'))
app.use('/',router);


app.listen(Port,console.log(`server running on port :${Port}`));



