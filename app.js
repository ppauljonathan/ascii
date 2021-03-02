const express=require('express');
const app=express();
const port=8080;

app.use(express.static('views'));
app.use(express.static('public'));

app.get('/',(req,res,next)=>{
    res.send('index.html');
    next();
});

app.post('/output',(req,res,next)=>{console.log("works");})

app.use((req,res,next)=>{res.send("PAGE NOT FOUND");})

app.listen(port,()=>{console.log(`server running on port ${port}`);})