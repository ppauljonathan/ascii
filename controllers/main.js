const fs=require('fs');
const path=require('path');

const cachePath=path.join(__dirname,'../','public','cache');

module.exports.getMain=(req,res,next)=>{
    fs.readdir(cachePath,(err,files)=>{
        if(err){return console.log(err);}
        for(const file of files){
            fs.unlink(path.join(cachePath,file),(err)=>{
                if(err){return console.log(err);}
            });
        }
    });
    return res.render('main',{title:'IMAGE TO ASCII'});
}