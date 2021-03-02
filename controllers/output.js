module.exports.postOutput=(req,res,next)=>{
    console.log(req.file);
    res.redirect('/');
}