const express=require('express');
const app=express();
const port=8080;

const multer=require('multer');


const fileStorage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./public/cache');
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now().toString()+'-'+file.originalname);
    }
});
const fileFilter=(req,file,cb)=>{
    if(
        file.mimetype==='image/png'||
        file.mimetype==='image/jpg'||
        file.mimetype==='image/jpeg'
    ){cb(null,true);}
    else{cb(null,false);}
};

const routes=require('./routes');

app.set('view engine','ejs');
app.set('views','views');
app.use(multer({storage:fileStorage,fileFilter:fileFilter}).single('input'));
app.use(express.static('public'));

app.use(routes);

app.listen(port,()=>{console.log(`server running on port ${port}`);})