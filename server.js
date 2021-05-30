//import the "modules"
//require() function used to import the "modules"
const express = require("express");
const mongodb = require("mongodb");
const cors = require("cors");
const bodyparser = require("body-parser");



//rest object
//express module, used to prepare the rest object
//rest object used to develop the rest services.
//Ex. GET, POST, PUT, DELETE,.........
const app = express();
//where "app" is the rest object



//enable the cors policy
app.use(cors());


//MIME Type   
//JSON as MIME Type
app.use(bodyparser.json());


//read the client data
app.use(bodyparser.urlencoded({extended:false}));



//create the reference variable to connect to "mongodb" database
let ashokIT = mongodb.MongoClient;
//where "ashokIT" is the reference variable
//where "ashokIT" used to connect to mongodb database



//create the GET Request
app.get("/products",(req,res)=>{
    ashokIT.connect("mongodb+srv://admin:admin@cluster0.jgnmk.mongodb.net/ashokit_ws?retryWrites=true&w=majority",(err,connection)=>{
        if(err) throw err;
        else{
            let db = connection.db("ashokit_ws");
            db.collection("products").find().toArray((err,array)=>{
                if(err) throw err;
                else{
                    res.send(array);
                }
            });
        }
    });
});


//define custom port number to node server
let port = process.env.PORT || 8080;
app.listen(port,()=>{
    console.log("server started !!!");
});
