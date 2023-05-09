var express = require('express');
var app = express();
var path = require('path');
var port = 3000;
var bodyParser = require('body-parser')
app.use( bodyParser.json() );      
app.use(bodyParser.urlencoded({    
  extended: false
})); 

var cookie="";
var f=0;
app.use('/public' , express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

app.get('/contact',(req,res)=>{
    res.render('contact');
});
app.post('/contact',(req,res)=>{
    res.render('contact');
});
app.get('/about', (req,res)=>{
    res.render('home');
});
app.get('/search', (req,res)=>{
    res.render('search');
});
app.get('/mentor', (req,res)=>{
    res.render('mentor');
});
app.get('/register', (req,res)=>{
    res.render('register');
});

app.post('/registered', (req,res)=>{
    cookie="ok";
    res.render('alertRegistered');
    if(f==0){
        f=1;
        cookie="";
    }

});
app.post('/submitSkills', (req,res)=>{
    var allskills=req.body;
    //console.log(allskills);
    
    res.render('expertise',{allskills:allskills});
    

});
app.post('/submitProjects', (req,res)=>{
    var allProjects=req.body;
    console.log(allProjects);
    res.render('expertise',{cookie:""});

});

app.get('/expertise', (req,res)=>{
    res.render('expertise',{allskills:""});
});
app.post('/expertise', (req,res)=>{
    var allskills=req.allskills;
    console.log(allSkills);
    res.render('expertise',{allskills:allskills});
});
app.get('/register', (req,res)=>{
    res.render('mentor');
});
app.post('/search',(req,res)=>{
    var search=req.body;
    console.log(search);
    var mentors={
        "m1" : {
        "name":"Palash",
        "email":"palash9914",
        "skills":["gfg" ,"asd", "asdf", "wrgv", "sdih", "asdgils", "asdgilhsdl", "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii", "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii"],
        "project1" : "projecta",
        "project2" : "projectb",
        "project3" : "projectc",
        },
        "m2" : {
            "name":"Sameer",
            "email":"sam123",
        "skills":["lc", "asd" ,"asdf", "wrgv", "sdih", "asdgils", "asdgilhsdl"],
        "project1" : "projectx",
        "project2" : "projecty",
        "project3" : "projectz", 
            }  
    }
    console.log(mentors);
    console.log("234234324");
    res.render('display',{mentors:mentors});
});
app.get('/dashboard', (req,res)=>{
    var params={
        "name":"Palash",
        "email":"palash9914",
        "skills":["gfg" ,"Data Structure", "Node Js", "Mongo DB", "Express", "Tailwind", "Web Development"],
        "project1" : "projecta",
        "project2" : "projectb",
        "project3" : "projectc",
        }
    res.render('dashboard',{params:params});
});
app.post('/dashboard',(req,res)=>{
    console.log(req.body.project1);
    console.log(req.body.project2);
    console.log(req.body.project3);
    var params={
        "name":"Palash",
        "email":"palash9914",
        "skills":["gfg" ,"Data Structure", "Node Js", "Mongo DB", "Express", "Tailwind", "Web Development"],
        "project1" : "projecta",
        "project2" : "projectb",
        "project3" : "projectc",
        }
    res.render('dashboard',{params:params});
});
app.get('*',(req, res)=>{
    res.render('home');
});
app.listen(port,()=>{
    console.log(`Listening at port ${port}`);
});