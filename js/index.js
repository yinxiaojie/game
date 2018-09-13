window.onload=function () {
    let game=new Game();
    game.bg=document.querySelector(".bg");
    game.smbox=document.querySelector(".live");
    game.fenbox=document.querySelector(".mark");
    game.point=document.querySelector(".point");
    console.log(game.fenbox);
    let num= 5;
    for(let i=1;i<=5;i++){
        game.createletter();
    }
    let keybox=document.querySelector(".keybox");
    let keyboard=document.querySelector(".keybox .keyboard");
    let state1=true;
    keyboard.onclick=function (event){
        if(!state1){
            if(event.target.className!=keyboard){
                let text=event.target.innerText;
                game.remove(text,1);
            }
        }

    };

    //暂停与开始
    let flag=document.querySelector("#flag");
    let state=true;
    flag.onclick=function () {
        if(state){
            this.className="pause1";
            state=false;
            state1=false;
            game.run();
        }else{
            this.className="play1";
            state=true;
            state1=true;
            game.pause();
        }
    };

    //游戏结束、开始
    let alertbox=document.querySelector(".alertbox");
    let btn=document.querySelector(".btn");
    setInterval(fn,100);
    function fn() {
        if(game.flag==false){
            alertbox.style.display="block";
            game.pause();
        }
    }

    btn.onclick=function () {
        game.fen=0;
        game.sm=3;
        game.smbox.innerText=game.sm;
        game.fenbox.innerText=game.fen;
        game.flag=true;
        alertbox.style.display="none";
        for(let item of game.letters){
            game.bg.removeChild(item['node']);
        }
        game.letters=[];
        let num=5;
        for(let i=0;i<5;i++){
            game.createletter()
        }
        game.run();
    }

};