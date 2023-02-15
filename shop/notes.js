

// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
  
//         // Uploads is the Upload_folder_name
//         cb(null, "uploads")
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.originalname + "hh-" + Date.now()+".pdf")
//     }
//   })
//   const maxSize = 1 * 1000 * 1000;
    
// var upload = multer({ 
//     storage: storage,
//     limits: { fileSize: maxSize },
//     fileFilter: function (req, file, cb){
    
//         // Set the filetypes, it is optional
//         var filetypes = /jpeg|jpg|png|pdf/;
//         console.log(file)
//         var mimetype = filetypes.test(file.mimetype);
  
//         var extname = filetypes.test(path.extname(
//                     file.originalname).toLowerCase());
        
//         if (mimetype && extname) {
//             return cb(null, true);
//         }
      
//         cb("Error: File upload only supports the "
//                 + "following filetypes - " + filetypes);
//       } 
// }).single("mypic");
// app.get("/upload",function(req,res){
//     res.render("upload");
// })
// app.post("/uploadProfilePicture",function (req, res, next) {
//     upload(req,res,function(err) { if(err) {
//             res.send(err)
//         }
//         else {res.send("Success, Image uploaded!")
//         }
//     })
// })



// app.get('/download', function(req, res){
//     const file = `${__dirname}/public/index.html`;
//     res.download(file); // Set disposition and send it.
//   });s