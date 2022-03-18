const express = require('express');
const app = express();
const port = 3000;

const cors = require('cors')

app.use(cors())

//parse json
app.use(express.json());

const { people } = require('./data');


app.get('/api/v1/users',(req,res)=>{
    res.status(200).json({success:true,data:people})
})

app.post('/api/v1/users',(req,res)=>{
    console.log(req.body);
    const {name} = req.body;
    if(!name){
        return res.status(400).json({success:false,message:'please provide a name'})
    }
    res.status(201).json({success:true,person:name})
})


app.listen(port, ()=>{
    console.log(`app running on port ${port}`);
})