const conversion=require('../public/js/converter')

module.exports.getOutput=(req,res,next)=>{res.redirect('/');}

module.exports.postOutput=(req,res,next)=>{
    if(!req.file){return res.redirect('/');}
    res.render('output',{
        title:'OUTPUT',
        src:req.file.filename
    });
}