const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const Data = require('./data');

const port = 3001;
const app = express();

const router = express.Router();

const url = "mongodb://localhost:27017/events";

mongoose.connect(url,{useNewUrlParser:true});

let db = mongoose.connection;

db.once("open", () => console.log("Connnected successfully"));

db.on("error", () => console.error.bind(console,"Connection Failed"));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

router.get('/' ,(req,res)=>{
    res.send("The server is working");
})

// Create
router.post('/addEvent' ,(req,res)=>{
    
    let data = new Data();
    const { _id, desc, date, time, followers } = req.body;

    data._id = _id;
    data.desc = desc;
    data.date = date;
    data.time = time;
    data.followers = followers;

    let event = { id : _id, desc : desc, date : date, time : time, followers : followers };
    data.save(err =>{
        if(err) return res.json({success : false , error : err});
        return res.json( { success : true, event : event } )
    });
});

// Read
router.get("/getEvents", (req,res)=>{
    Data.find((err,events)=>{
        let eventData ={}
        let eventList = []
        events.forEach(elem=>{
            let temp = {}
            temp.id = elem._id;
            temp.desc = elem.desc;
            temp.date = elem.date;
            temp.time = elem.time;
            temp.followers = elem.followers;
            temp.editing = false;
            eventList.push(temp);
        });
        eventData.events = eventList;
        if(err) return res.json({ success:false, error:err });
        return res.json({ success : true, events : eventData });
    });
});

// Update
router.post("/editEvent", (req,res)=>{
    //console.log(req.body);
    const { id, desc, date, time, followers } = req.body;
    match = { _id : id };
    console.log(desc);
    console.log(date);
    console.log(time);
    console.log(followers);
    update = { desc : desc , date : date , time : time, followers : followers};
    Data.updateOne(match,update ,err=>{
        if(err) return res.json({success:false,error :err});
        return res.json({success:true});
    });
});

// Delete 
router.delete("/deleteEvent" ,(req,res)=>{
    const { id } = req.body;
    match = { _id : id }
    //console.log(match);
    Data.deleteOne(match, err =>{
        if(err) return res.json({success:false,error:err});
        return res.json({ success : true , id : id });
    });
});

app.use('/api',router);
app.listen(port , ()=> console.log(`Listening on port ${port}`) );