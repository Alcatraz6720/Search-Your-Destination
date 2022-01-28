const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const ejs = require("ejs");


const app = express();

app.set('view engine','ejs');
app.use(express.static("public"));  //used to show the style of css and image in window
app.use(bodyParser.urlencoded({extended:true})); //This will help to get the input of name and email from user


mongoose.connect("mongodb://localhost:27017/locationDB", {useNewUrlParser: true,useUnifiedTopology: true});


const locationSchema = new mongoose.Schema({
  name : String,
  state : String,
  max_temp : Number,
  min_temp : Number,
  humidity : Number ,
  bus_stand : String,
  railway_station : String,
  airport_name : String,
  scl_name : String,
  college_name : String,
  crime_rate : Number,
  sexual_harrassment : Number,
  proverty : Number,
  population : Number,
  education_rate : Number
});
const signupSchema =new mongoose.Schema( {
  fname: String,
  lname : String,
  ph_no: Number,
  email : String,
  password: String,

});

const travelSchema = new mongoose.Schema( {
  tname : String,
  tdescription : String
});


const Location = mongoose.model("Location", locationSchema);
const Signup = mongoose.model("Signup", signupSchema);
const Travel = mongoose.model("Travel", travelSchema);



// // const posts = [];
var searches = [];


// // var deleteItems = [];

app.get("/delhi",function(req,res)
{
  res.render("delhi");
});

app.get("/",function(req,res)
{
  res.render("home");
});

app.get("/requirement",function(req,res)
{
  res.render("requirement");
  console.log(searches);
})

app.get("/search",function(req,res)
{
  res.render("search");
  console.log(searches);
})

app.get("/signin",function(req,res)
{
  res.render("signin");
})

app.get("/signup",function(req,res)
{
  res.render("signup");
})

//--------------------------Travel Location-----------------------------------

app.get("/travel",function(req,res)
{
  res.render("travel");
})


app.get("/tresult",function(req,res)
{
  res.render("tresult",{newItems : searches});
});


app.get("/notfound",function(req,res)
{
  res.render("notfound",{newItems : searches});
});


app.post("/travel",function (req,res) {
  var item = req.body.CityName2;
  console.log(item);
  Travel.findOne({tname: item}, function(err, foundArticle){
     if (foundArticle) {
       console.log(foundArticle)
       searches.push(foundArticle);
       res.redirect("/tresult");
     } else {
       res.redirect("/notfound")
      console.log("No articles matching that title was found.");
     }
   });
})


//----------------------- To get (post..see more)-------------------------------


app.get("/posts/:postId", function(req, res){

const requestedPostId = req.params.postId;

  Travel.findOne({_id: requestedPostId}, function(err, post){

    console.log(post);
      res.render("single",{newItems: post});
    });
});





//-------------------------Searching files from database------------------------


app.get("/search",function(req,res)
{
  res.render("search");
})


app.get("/result",function(req,res)
{
  res.render("result",{searchItems : searches});
});



app.get("/notfound",function(req,res)
{
  res.render("notfound",{searchItems : searches});
});


app.post("/search",function (req,res) {
  var item_k = req.body.cityName;
  console.log(item_k);
  Location.findOne({name: item_k}, function(err, foundArticle){
     if (foundArticle) {
       console.log(foundArticle)
       searches.push(foundArticle);
       res.redirect("/result");
     } else {
       res.redirect("/notfound")
      console.log("No articles matching that title was found.");
     }
   });

 })



 app.post("/requirement",function (req,res) {
   var item = req.body.cityName;
   var item_1 = req.body.st;
   var item_2 = req.body.mt;
   var item_3 = req.body.mint;
   var item_4 = req.body.hum;
   var item_5 = req.body.bus;
   var item_6 = req.body.rail
   var item_7 = req.body.air;
   var item_8 = req.body.scl;
   var item_9 = req.body.clg;
   var item_10 = req.body.crime;
   var item_11 = req.body.sh;
   var item_12 = req.body.pv;
   var item_13 = req.body.pr;
   var item_14 = req.body.er;



   Location.findOne({name : item}, function(err, foundArticle){
      if (foundArticle) {
        console.log(foundArticle)
        searches.push(foundArticle);
        res.redirect("/result");
      } else {

             Location.findOne({max_temp : item_2}, function(err, foundArticle){
                if (foundArticle) {
                  console.log(foundArticle)
                  searches.push(foundArticle);
                  res.redirect("/result");
                } else {
                  Location.findOne({min_temp : item_3}, function(err, foundArticle){
                     if (foundArticle) {
                       console.log(foundArticle)
                       searches.push(foundArticle);
                       res.redirect("/result");

                     } else {
                       Location.findOne({humidity : item_4}, function(err, foundArticle){
                          if (foundArticle) {
                            console.log(foundArticle)
                            searches.push(foundArticle);
                            res.redirect("/result");
                          } else {
                            Location.findOne({bus_stand : item_5}, function(err, foundArticle){
                               if (foundArticle) {
                                 console.log(foundArticle)
                                 searches.push(foundArticle);
                                 res.redirect("/result");
                               } else {
                                 Location.findOne({railway_station : item_6}, function(err, foundArticle){
                                    if (foundArticle) {
                                      console.log(foundArticle)
                                      searches.push(foundArticle);
                                      res.redirect("/result");
                                    } else {
                                      Location.findOne({airport_name : item_7}, function(err, foundArticle){
                                         if (foundArticle) {
                                           console.log(foundArticle)
                                           searches.push(foundArticle);
                                           res.redirect("/result");
                                         } else {
                                           Location.findOne({scl_name : item_8}, function(err, foundArticle){
                                              if (foundArticle) {
                                                console.log(foundArticle)
                                                searches.push(foundArticle);
                                                res.redirect("/result");
                                              } else {
                                                Location.findOne({college_name : item_9}, function(err, foundArticle){
                                                   if (foundArticle) {
                                                     console.log(foundArticle)
                                                     searches.push(foundArticle);
                                                     res.redirect("/result");
                                                   } else {
                                                     Location.findOne({crime_rate : item_10}, function(err, foundArticle){
                                                        if (foundArticle) {
                                                          console.log(foundArticle)
                                                          searches.push(foundArticle);
                                                          res.redirect("/result");
                                                        } else {
                                                          Location.findOne({sexual_harrassment : item_11}, function(err, foundArticle){
                                                             if (foundArticle) {
                                                               console.log(foundArticle)
                                                               searches.push(foundArticle);
                                                               res.redirect("/result");
                                                             } else {
                                                               Location.findOne({proverty : item_12}, function(err, foundArticle){
                                                                  if (foundArticle) {
                                                                    console.log(foundArticle)
                                                                    searches.push(foundArticle);
                                                                    res.redirect("/result");
                                                                  } else {
                                                                    Location.findOne({population : item_13}, function(err, foundArticle){
                                                                       if (foundArticle) {
                                                                         console.log(foundArticle)
                                                                         searches.push(foundArticle);
                                                                         res.redirect("/result");
                                                                       } else {
                                                                         Location.findOne({education_rate : item_14}, function(err, foundArticle){
                                                                            if (foundArticle) {
                                                                              console.log(foundArticle)
                                                                              searches.push(foundArticle);
                                                                              res.redirect("/result");
                                                                            } else {
                                                                              Location.findOne({ state : item_1}, function(err, foundArticle){
                                                                                 if (foundArticle) {
                                                                                   console.log(foundArticle)
                                                                                   searches.push(foundArticle);
                                                                                   res.redirect("/result");
                                                                                 } else {
                                                                              res.redirect("/notfound")
                                                                             console.log("No articles matching that title was found.");
                                                                            }
                                                                          });
                                                                       }
                                                                     });
                                                                  }
                                                                });
                                                             }
                                                           });
                                                        }
                                                      });
                                                   }
                                                 });
                                              }
                                            });
                                         }
                                       });
                                    }
                                  });
                               }
                             });
                          }
                        });
                     }
                   });
                }
              });
           }
         });
      }
    });
  });




// -----------------------------------Sign Up Page-------------------------------


app.get("/signup",function(req,res)
{
  res.render("signup");
})



app.get("/uperror",function(req,res)
{
  res.render("uperror");
})

app.get("/forgetPassword",function(req,res)
{
  res.render("forgetPassword");
})


app.post("/signup",function(req, res){

  const signup = new Signup({
    fname: req.body.fnam,
    lname :req.body.lnam,
    ph_no: req.body.phone,
    address : req.body.add,
    email : req.body.em,
    password: req.body.pass,
});

  Signup.findOne({ email: req.body.em}, function(err, foundArticle){
    if (foundArticle) {
      console.log("Use another uid");
      res.redirect("/uperror");
    } else {
      signup.save(function(err){
      if (!err){
        res.redirect("/search");
      } else {
      console.log(err);
      }
    });
      console.log("Signup successful!.");
    }
   });
})



//---------------------------------------- Forget Password -------------------



app.post("/forgetPassword",function(req,res)
{
  var e_1 = req.body.memail;
  var p_1 = req.body.mpass;

  console.log(e_1);
  Signup.findOneAndUpdate({email:e_1},{password : p_1},function(err)
  {
    if(!err)
    {
res.redirect("/signin");    }
    else {
      {
        console.log(err);
      }
    }
  })

});

//----------------------------------------Log in page--------------------------


app.get("/signin",function(req,res)
{
  res.render("signin");
})

app.get("/error",function(req,res)
{
  res.render("error");
})



app.post("/signin",function (req,res) {
var a = req.body.inuid;
var b= req.body.inpassword;
  Signup.findOne({email  : a , password: b}, function(err, foundArticle){
     if (foundArticle) {
       res.redirect("/search");
     } else {
      res.redirect("/forgetPassword");
     }
   });
})



app.listen(3000,function()   //process.env.port is a dynamic port and will help heroku to choose port according to them as port no 3000 may not available to them

{
  console.log("Server is running on port 3000");
});
