class Game{
    constructor(){
        this.bg=" ";
        this.letters=[];
        this.sm=3;
        this.fen=0;
        this.smbox="";
        this.fenbox="";
        this.flag=true;
        this.point="";
    }

    //创建字母
    createletter(){
        let div=document.createElement("div");
        let asc,letter;
        do{
             asc= Math.floor(Math.random()*26+65);
             letter=String.fromCharCode(asc);
        }while(letterrepeat(letter,this.letters));

        div.style.backgroundImage=`url(img/A_Z/${letter}.png)`;
        let left;
        do{
            left=Math.random()*4.7+1;
        }while(leftrepeat(left,this.letters));
        let top=Math.random();
        div.style.left=left+"rem";
        div.style.top=top+"rem";
        this.bg.appendChild(div);
        let obj={};
        let speed=Math.random()*0.05+0.05;
        obj['left']=left;
        obj['top']=top;
        obj['node']=div;
        obj['name']=letter;
        obj['speed']=speed;
        this.letters.push(obj);
    }

    //下落
    run(){
        this.t=setInterval(()=>{
            for(let item of this.letters){
                item['top']+=item['speed'];
                if(item['top']>=7){
                    this.remove(item['name'],0);
                    continue;
                }
                item['node'].style.top=item['top']+"rem";
            }
        },100)
    }
    //消失
    remove(letter,type){
        for(item of this.letters){
            if(item['name']==letter){
                let index=this.letters.indexOf(item);
                this.bg.removeChild(item['node']);
                this.letters.splice(index,1);
                this.createletter();
                if(type==0){
                    this.sm--;
                }else if(type==1){
                    this.fen++;
                }
                this.smbox.innerText=this.sm;
                this.fenbox.innerText=this.fen;
                this.point.innerText=this.fen;
                if(this.sm<=0){
                    this.flag=false;
                }
            }
        }
    }
    pause(){
        clearInterval(this.t);
    }
}




//去重
function leftrepeat(left,letters) {
    for(item of letters){
        if(Math.abs(item.left-left)<0.53){
            return true;
        }
    }
    return false;
}
//字母去重
function letterrepeat(letter,letters) {
    for(item of letters){
        if(item['name']==letter){
            return true;
        }
    }
    return false;
}
