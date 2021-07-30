const express = require('express');
const cors = require('cors');
const jwt= require('jsonwebtoken')
const path = require('path');
const bodyparser =require('body-parser');
const TestimonialData = require('./src/model/Testimonialdata');
const multer = require('multer')


var app = new express();
app.use(cors());
app.use(express.json());
app.use(bodyparser.json());



//insert
app.post('/insert',function(req,res){

  const destn = path.join(__dirname, '../',  'Admin-Dashboard-master', 'src', 'assets', 'images');
  console.log(destn);
  var storage =   multer.diskStorage({
      destination: function (req, file, callback) {
        callback(null, destn);
      },
      filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
    });
  var upload = multer({ storage : storage}).single('file');

  upload(req,res,function(err) {
      if(err) {
          console.log("Error uploading file.");
      }
   
    console.log(req.body);
   
    var testimonial = {       
        
        name : req.body.name,
        position : req.body.position,
        organisation : req.body.organisation,
        testimonial : req.body.testimonial,
        course_title  : req.body.course_title,   
        image : req.body.image,
   }       
   var testimonial = new TestimonialData(testimonial);
   testimonial.save();
});

});

//getting data

app.get('/testimonials',function(req,res){
    
    TestimonialData.find().sort({ index: 1})
                .then(function(testimonials){
                    res.send(testimonials);
                });
});
app.get('/testimonial/:id',  (req, res) => {
  
  const id = req.params.id;
    TestimonialData.findOne({"_id":id})
    .then((testimonial)=>{
        res.send(testimonial);
    });
})



 //deleting data
app.post('/Testimonial/remove',(req,res)=>{  
  console.log(req.body);
  id         = req.body._id
  console.log(` inside remove ${id}`);
  TestimonialData.deleteOne({'_id' : id})
  .then(function(testimonial){
      console.log('success')
      res.send(true);
  });

});

///updating testimonial 
app.post('/testimonial/update',(req,res)=>{

  console.log(` inside update ${req.body.id}`);
        id          = req.body._id,
        name        = req.body.name,
        position    = req.body.position,
        organisation = req.body.organisation,
        testimonial  = req.body.testimonial,
        course_title =req.body.course_title,
        image       = req.body.image
        TestimonialData.findByIdAndUpdate({"_id":id},
                              {$set:{"name":name,
                              "position":position,
                              "organisation":organisation,
                              "testimonial":testimonial,
                              "course_title":course_title,
                              "image":image}})
 .then(function(){
     res.send();
 })

});
//update with image
app.post('/testimonial/updateWithFile',(req,res)=>{

  console.log(` inside updateWithFile ${req.body}`)
  const destn = path.join(__dirname, '../',  'Admin-Dashboard-master', 'src', 'assets', 'images');
  console.log(destn);
  var storage =   multer.diskStorage({
      destination: function (req, file, callback) {
        callback(null, destn);
      },
      filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
    });
  var upload = multer({ storage : storage}).single('file');
  upload(req,res,function(err) {

      if(err) {
          console.log("Error uploading file.");
      }
      console.log("File is uploaded");
      // console.log(`the title is ${req.body.title}`);
  console.log(` inside update with image ${req.body.name}`);
        id  = req.body._id,
        name  = req.body.name,
  position = req.body.position,
  organisation       = req.body.organisation,
  testimonial        =req.body.testimonial,
  course_title       =req.body.course_title,
  image              = req.body.image
  TestimonialData.findByIdAndUpdate({"_id":id},
                              {$set:{"name":name,
                              "position":position,
                              "organisation":organisation,
                              "testimonial":testimonial,
                              "course_title":course_title,
                              "image":image}})
 .then(function(){
     res.send();
 })
});
});

 //udating index
 app.put('/Testimonials/updateIndex',(req,res)=>{
  res.header("Access-Control-Allow-Origin","*")
  res.header('Access-Control-Allow-Methods: GET, POST, PATCH,PUT,DELETE,OPTIONS');     
  
  id         = req.body._id;
  title      = req.body.name;
  index      = req.body.index;
  console.log(`update of ${title} with value ${index}`);
  TestimonialData.findByIdAndUpdate({"_id":id},
                              {$set:{"index":index}})
 .then(function(){
     res.send();
 })

});
 //udating index
 app.put('/Testimonials/updateIndex',(req,res)=>{
  res.header("Access-Control-Allow-Origin","*")
  res.header('Access-Control-Allow-Methods: GET, POST, PATCH,PUT,DELETE,OPTIONS');     
  
  id         = req.body._id;
  title      = req.body.name;
  index      = req.body.index;
  console.log(`update of ${title} with value ${index}`);
  TestimonialData.findByIdAndUpdate({"_id":id},
                              {$set:{"index":index}})
 .then(function(){
     res.send();
 })

});







    app.listen(5000, function(){
        console.log('listening to port 5000');
});