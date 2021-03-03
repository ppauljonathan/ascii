const fs=require('fs');
const path=require('path');
const conversion=require('../public/js/converter')

module.exports.getOutput=(req,res,next)=>{res.redirect('/');}

module.exports.postOutput=(req,res,next)=>{
    if(!req.file){return res.redirect('/');}
    const pathName=path.join(__dirname,'../','cache',req.file.filename);
    res.render('output',{
        title:'OUTPUT',
        src:req.file.filename
    });
    fs.unlink(pathName,()=>{console.log("converted");})
}