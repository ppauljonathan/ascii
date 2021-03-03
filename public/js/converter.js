let src;
let pathname;

function assign(source){
    src=source.toString();
    console.log(src);
    conversion();
}

function conversion(){
    const p=document.querySelector("output");
    const img=new Image;
    img.src='cache/'+src;
    img.onload=function(){
        canv=document.createElement("canvas");
        canv.width=img.width;canv.height=img.height;
        document.body.appendChild(canv);
        c=canv.getContext("2d");
        c.drawImage(img,0,0);
    }
    d=c.getImageData(0,0,canv.width,canv.height);

    for(i=0;i<d.data.length;i++)
        {
            if(i%4==0)
            {
                grey=(d.data[i]*0.3+d.data[i+1]*0.59+d.data[i+2]*0.11);
                grey=256/t*Math.floor(grey/(256/t));
                d.data[i]=grey;
                if(grey==0){str+='...';}
                else if(grey==64){str+=';;;';}
                else if(grey==128){str+='###';}
                else{str+='&&&'}
            }
            if((i/4)%canv.width==canv.width-1){str+='\n';}
        }
        c.clearRect(0,0,canv.width,canv.height);
        change=1;
        // c.putImageData(d,0,0);
        p.innerText=str;
}