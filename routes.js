const express=require('express');

const {getIndex}=require('./controllers/index');
const {postOutput}=require('./controllers/output');

const router=express.Router();

router.get('/',getIndex);

router.post('/output',postOutput)

router.use((req,res,next)=>{res.send("PAGE NOT FOUND");})


module.exports=router;