let src;
let pathname

function assign(source){
    src=source.toString();
    console.log(src);
    conversion();
}

function conversion(){
    const img=new Image;
    img.src='cache/'+src;
    img.onload=function(){
        canv=document.createElement("canvas");
        canv.width=img.width;canv.height=img.height;
        document.body.appendChild(canv);
        let c=canv.getContext("2d");
        c.drawImage(img,0,0);
    }
}