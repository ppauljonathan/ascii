const express=require('express');

const {getMain}=require('./controllers/main');
const output=require('./controllers/output');

const router=express.Router();

router.get('/output',output.getOutput);
router.post('/output',output.postOutput)    

router.get('/',getMain);



router.use((req,res,next)=>{res.send("PAGE NOT FOUND");})


module.exports=router;