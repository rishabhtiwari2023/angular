var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")
const cors = require('cors');

const download = require('download');
const app = express()
app.use(cors());
app.use(bodyParser.json())
const path = require("path")
const multer = require("multer")
app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs")

// https://github.com/Vasanth-Korada/SignUpForm-HTML_NodeJS_MongoDB/blob/main/index.js

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




// https://ashwanibakshii.blogspot.com/2019/11/upload-and-download-file-in-node_2.html?zx=8f63dd4a5eba17a9
var storage = multer.diskStorage({
    destination:function(req,file,cb){
         cb(null,'./public/uploads')
    },
    filename(req,file,cb){
        cb(null,file.originalname)
    }
})

var upload = multer({storage:storage});

//  mongoose.connect('mongodb://localhost:27017/pics',{useNewUrlParser:false})
//  .then(()=>console.log('connect')).catch(err=>console.log(err))

// making the collection(table) schema
// it contain picspath file for saving the file path
var picSchema = new mongoose.Schema({
    picspath:String
})

//collection schema will be save in db by name picsdemo 
// picModel contain the instance of picdemo by which it can manipulate data in it.
 var picModel = mongoose.model('picsdemo',picSchema)


app.set('view engine','ejs');

app.set("views",path.resolve(__dirname,'views'));

var picPath = path.resolve(__dirname,'public');

app.use(express.static(picPath));

app.use(bodyParser.urlencoded({extended:false}))

app.get('/',(req,res)=>{
    picModel.find((err,data)=>{
             if(err){
                 console.log(err)
             }
            if(data){
                console.log(data)
                res.render('home',{data:data})
            } 
           else{
               res.render('home',{data:{}})
           } 
    })
    
})

app.post('/',upload.single('pic'),(req,res)=>{
    var x= 'uploads/'+req.file.originalname;
    var picss = new picModel({
        picspath:x
    })
    picss.save((err,data)=>{
         if(err){
             console.log(err)
         }
         else{
             console.log('data',data)
            res.redirect('/')
         }
    })
})

app.get('/download/:id',(req,res)=>{
     picModel.find({_id:req.params.id},(err,data)=>{
         if(err){
             console.log(err)
         } 
         else{
            var path= __dirname+'/public/'+data[0].picspath;
            res.download(path);
         }
     })
})

module.exports = app;





















app.get("/table",(req,res)=>{
    db.collection('details').find({}).toArray((err,result)=>{
        if(err)throw err 
        results=result
        console.log(results)
        res.send(results[1].name)
    })
})

app.get("/getAll", async (req, res) => {
    console.log(req)
    db.collection('details').find({}).toArray((err,result)=>{
        if(err)throw err 
        results=result
        console.log(results)
        res.send(results)
        // app.render('email', { name: 'Tobi' })
        res.redirect('signup_success.html',{name:'ff'})
    })
})


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

    db.collection('datas').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
    });

    return res.redirect('signup_success.html')

})


app.get("/g",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('index.html');
}).listen(3000);




// app.post("/register", function (req, res) {
//     var name = req.body.name
//     var password = req.body.password
    
//     db.collection('details').findOne({email:email});
//     if(u.password===password){
//         res.redirect('signup_success.html');
//     }
// });



console.log("Listening on PORT 3000");