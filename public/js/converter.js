let src;
let pathname;
function assign(source){
    src=source.toString();
    console.log(src);
    conversion();
}

function conversion(){
    const p=document.querySelector(".output");
    let canv,c;
    let grey,str='';
    const t=8;
    const img=new Image;
    img.src='cache/'+src;
    img.onload=function(){
        canv=document.createElement("canvas");
        canv.width=img.width;canv.height=img.height;
        document.body.appendChild(canv);
        c=canv.getContext("2d");
        c.drawImage(img,0,0);
        const d=c.getImageData(0,0,canv.width,canv.height);
        console.log(d);
        for(i=0;i<d.data.length;i++)
        {
            if(i%4==0)
            {
                grey=(d.data[i]*0.3+d.data[i+1]*0.59+d.data[i+2]*0.11);
                grey=256/t*Math.floor(grey/(256/t));
                // d.data[i]=grey;
                // d.data[i+1]=grey;
                // d.data[i+2]=grey;
                if(grey==0){str+='...';}
                else if(grey==32){str+=',,,';}
                else if(grey==64){str+=':::';}
                else if(grey==96){str+=';;;'}
                else if(grey==128){str+='iii';}
                else if(grey==160){str+='lll'}
                else if(grey=="192"){str+='www'}
                else if(grey=="224"){str+="WWW";}
            }
            if((i/4)%canv.width==canv.width-1){str+='\n';}
        }
        // c.putImageData(d,0,0);
        p.style.fontSize=`${750/canv.width}px`;
        c.clearRect(0,0,canv.width,canv.height);
        p.innerHTML=str;
    }
}