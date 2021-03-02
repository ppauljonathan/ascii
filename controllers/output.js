const fs=require('fs');
const path=require('path');

module.exports.postOutput=(req,res,next)=>{
    console.log(req.file);
    fs.unlink(path.join(__dirname,'../','cache',req.file.filename),()=>{res.redirect('/');})
}