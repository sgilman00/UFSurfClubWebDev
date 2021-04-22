const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const multer = require('multer');
const mongooseClient = require('mongoose')
const nodemailer = require("nodemailer");
const app = express();

const realmongoAtlasUri = 'mongodb+srv://UFSurfClub:sUrFsUF@surf.czfm4.mongodb.net/login?retryWrites=true&w=majority'

DIR = "./images"

app.use(express.static('images'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});
app.use(express.json());
app.use(express.static('build'));
app.get( '/', ( req, res ) => {
  res.sendFile( path.resolve('build/index.html' ) );
} );

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null,fileName)
    }
});

var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});

const contactEmail = nodemailer.createTransport({
    service: 'gmail.com',
    auth: {
      user: 'uflsurfclub@gmail.com',
      pass: 'UFSurfClub'
    },
  });
  
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });

const {Schema} = mongooseClient;

const LoginScheme = new Schema({
    user : String,
    pwrd : String,
})

const DescScheme = new Schema({
    role : String,
    name : String,
    desc : String
})

const LoginModel = mongooseClient.model('loginmodel',LoginScheme,'Collection0');

const DescModel = mongooseClient.model('descmodel', DescScheme,'Desc');

app.use(bodyParser.json());

mongooseClient.connect(realmongoAtlasUri,{useNewUrlParser: true, useUnifiedTopology: true});

const db = mongooseClient.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
    app.listen(8080, () => {
        console.log(`Example app listening at http://localhost:${8080}`)
      })
    
      app.post('/login',(req,res) =>{
        const querey = LoginModel.findOne({'user': req.body.uname})
        querey.exec(function(err,loginCred) {
            if(loginCred == null) {
                console.log('We had an oopsie');
                res.redirect('/');
                res.end();
            }
            else {
            if(loginCred.pwrd === req.body.pwrd)
                return res.send(true);
            else
                return res.send(false);
            }
        })
    })
        
    app.post('/loginChange', (req,res) => {
        const querey = LoginModel.updateOne({'user' : req.body.pUname}, {'user' : req.body.uname, 'pwrd' : req.body.pwrd})
        querey.exec((err,wOP) =>{
            if(wOP.nModified === 0 && wOP.n === 0)
              return res.send(false);
            else
              return res.send(true);
         })
    })

    app.post('/i', upload.single('profileImg'), (req,res) => {
        return res.send(true);
    })

    app.post('/o', (req, res) => {
        const querey = DescModel.updateOne({'role' : req.body.officer}, {'name' : req.body.name, 'desc' : req.body.desc})
        querey.setOptions({upsert : true});
        querey.exec((err,wOP) => {
            if(wOP.nModified == 0 && wOP.n == 0)
                return res.send(false);
            else
                return res.send(true);
        })
    })
    
    app.post("/calendar", (req, res) => {
        const name = req.body.name;
        const email = req.body.email;
        const eventname = req.body.eventname; 
        const location = req.body.location;
        const stardate = req.body.stardate;
        const edate = req.body.enddate;
        const start = req.body.start;
        const end = req.body.end;
        const info = req.body.info;
    
        const mail = {
          from: name,
          to: 'uflsurfclub@gmail.com',
          subject: "Calendar Form Submission",
          html: `<p>Name: ${name}</p>
                 <p>Email: ${email}</p>
                 <p>Name of Event: ${eventname}</p>
                 <p>Location: ${location}</p>
                 <p>Start Date: ${stardate}</p>
                 <p>End Date: ${stardate}</p>
                 <p>Start Time: ${start}</p>
                 <p>End Time: ${end}</p>
                 <p>Information: ${info}</p>`,
    
        };
        contactEmail.sendMail(mail, (error) => {
          if (error) {
            res.json({ status: "ERROR" });
          } else {
            res.json({ status: "Message Sent" });
          }
        });
      });
    
  const app2 = express();
  app2.use(express.json());
  app2.listen(3001, () => console.log("Contact Server Running"));

      app.post("/contact", (req, res) => {
        const name = req.body.name;
        const email = req.body.email;
        const subject = req.body.subject; 
        const message = req.body.message;
    
    
        const mail = {
          from: name,
          to: 'uflsurfclub@gmail.com',
          subject: "Contact Form Submission",
          html: `<p>Name: ${name}</p>
                 <p>Email: ${email}</p>
                 <p>Subject: ${subject}</p>
                 <p>Message: ${message}</p>`
    
        };
        contactEmail.sendMail(mail, (error) => {
          if (error) {
            res.json({ status: "ERROR" });
          } else {
            res.json({ status: "Message Sent" });
          }
        });

        
    });

    app.get('/oinfo', (req,res) =>{
        var data = {
            presName : '',
            presDesc: '',
            vpName : '',
            vpDesc : '',
            tName : '',
            tDesc : '',
            sName : '',
            sDesc : '',
            tcName : '',
            tcDesc : '',
            sm1Name : '',
            sm2Name : '',
            sm3Name : '',
            sm1Desc : '',
            sm2Desc : '', 
            sm3Desc : '',
        }
        var querey = DescModel.find().where('role').exists();
        querey.exec((err,Info) =>{
            res.send(Info);
        })
        
    })
})


  
