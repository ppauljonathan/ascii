const express=require('express');
const app=express();
const port=8080;

const routes=require('./routes');

app.use(express.static('views'));
app.use(express.static('public'));

app.use(routes);

app.listen(port,()=>{console.log(`server running on port ${port}`);})