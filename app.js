let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","purple","green"];
let started=false;
let level=0;
let h2=document.querySelector('h2');


function btnFlash(btn){
  btn.classList.add("flash"); 
  setTimeout(function(){
    btn.classList.remove("flash");
  },250); 
}
function levelUp(){
    level++;
    h2.innerText=`Level ${level}`;
    let rand=btns[Math.floor(Math.random()*4)];
    gameSeq.push(rand);
    let btn=document.querySelector(`.${rand}`);
    btnFlash(btn);
}
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("New Game Started");
        started=true;
        levelUp();
    }
});
let i=0;
let cnt=0;
function btnPress(){
  cnt++;
  let btn=this;
  btnFlash(btn);
  userSeq.push(this.classList[1]);
  if(userSeq[i]!=gameSeq[i]){
        h2.innerHTML=`Game Over!<br>Your score is ${cnt}! `;
        setTimeout(function(){
            h2.innerText="Press any key to start the game!";
        },2000);
        gameSeq=[];
        userSeq=[];
        level=0;
        started=false;
        document.addEventListener("keypress",function(){
            if(started==false){
                console.log("New Game Started");
                started=true;
                levelUp();
            }
        });
        i=0;
        cnt=0;
    }
 
  else if(i==gameSeq.length-1){
     levelUp();
     i=0;
     userSeq=[];
  }
  else{
    i++;
 }
  
}

let allBtns=document.querySelectorAll(".btn");
for(bt of allBtns){
    bt.addEventListener("click",btnPress);
}

