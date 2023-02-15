var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")
const cors = require('cors');

// https://github.com/Vasanth-Korada/SignUpForm-HTML_NodeJS_MongoDB/blob/main/index.js
const app = express()
app.use(cors());
app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb+srv://rishabh:tiwari@cluster0.t2qow.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
























var db = mongoose.connection;

db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',()=>console.log("Connected to Database"))
// weldone
app.get("/table",(req,res)=>{
    db.collection('details').find({}).toArray((err,result)=>{
        if(err)throw err 
        results=result
        console.log(results)
        res.send(results[1].name)
    })
})


// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
app.get("/r",(req,res)=>{
  var query = { name: "rishabh" };
  var badlo={$set:{course:"python"}}
  db.collection("textarea").updateOne(query,badlo,function(err, result) {
    if (err) throw err;
    console.log(result);;
    db.close();
  });
})





app.post("/update", async (req, res) => {
    // console.log(req.body.name)
    // console.log(req.body.age)
    // var myobj = { name:req.body.name , address: req.body.newAge };
    var query = { studentCode:req.body.studentCode };
  var badlo={$set:{ name: req.body.name,age: req.body.age,email: req.body.email,mobile: req.body.mobile}}
  db.collection("textarea").updateMany(query,badlo,function(err, result) {
    if (err) throw err;
    console.log(result);;
    // db.close();
  });
   
})


app.post("/post", async (req, res) => {
    // console.log(req.body.name)
    // console.log(req.body.age)
    var myobj = { name:req.body.name ,age: req.body.age,email: req.body.email,mobile: req.body.mobile,studentCode:req.body.studentCode,  createdAt: new Date(),
        updatedAt: new Date()  };
    db.collection("textarea").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted hah");
   
})})

app.get("/getAll", async (req, res) => {
    // console.log(req)
    db.collection('details').find({}).toArray((err,result)=>{
        if(err)throw err 
        results=result
        console.log(results)
        res.send(results)
    })
})


// app.post("/delete", async (req, res) => {
//     var q=req.body;
//     // db.collection('details').deleteMany(q,(err,result)=>{
//     //     if(err)throw err 
//     //     results=result
//     //     console.log(results)
//     //     res.send(results)
//     // })
// })
app.post("/sign_up",(req,res)=>{

    var name = req.body.name;
    var email = req.body.email;
    var phno = req.body.phno;
    var ta = req.body.ta;
    var password = req.body.password;

    var data = {
        "name": name,
        "email" : email,
        "phone": phno,
        "ta":ta,
        "password" : password
    }

    db.collection('details').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
    });

    return res.redirect('signup_success.html')

})


app.get("/d",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('index.html');
})




// app.post("/register", function (req, res) {
//     var name = req.body.name
//     var password = req.body.password
    
//     db.collection('details').findOne({email:email});
//     if(u.password===password){
//         res.redirect('signup_success.html');
//     }
// });



console.log("Listening on PORT 3000");