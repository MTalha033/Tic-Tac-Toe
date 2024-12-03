let boxes=document.querySelectorAll(".btn");
let reset=document.getElementById("rst");
let playerTurn=document.getElementById("turn");
let winner=document.getElementById("winner");
let wininfo=document.getElementById("wininfo");
let playBtn=document.getElementById("play");
let playagainbtn=document.getElementById("playAgain");


let winpatt=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
// console.log(boxes[winpatt[0][0]]);


let turn;
let toss=()=>{
    let a=Math.random();
    if(a>0.5){
        turn=true;
        playerTurn.innerText="Player X Won The Toss";
        // console.log("Player X Turn");
    }
    else{
       turn=false;
       playerTurn.innerText="Player O Won The Toss";
    //    console.log("Player O Turn");
    }
}

function disableBoxes(){
    for(let i=0;i<9;i++){
        boxes[i].disabled=true;
        boxes[i].style="background-color:white"
    }
}
disableBoxes();
function enableBoxes(){
    for(let i=0;i<9;i++){
        boxes[i].disabled=false;
        boxes[i].style="background-color:#F7ECE1";
    }
}
function playGame(){
    enableBoxes();
    playerTurn.style="display:block";
    toss();
    playBtn.disabled=true;
    playBtn.style="background-color:grey"
}


let count=0;
boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        count++;
    //    console.log("click");
        if(turn){
            box.innerText="X";
            box.style="background-color: #725AC1;color: #F7ECE1;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;";
            turn=false;
            playerTurn.innerText="Player O Turn";
          }
        else{
            box.innerText="O";
            box.style="background-color: #8D86C9;color: #F7ECE1;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;";
            turn=true;
            playerTurn.innerText="Player X Turn";
        }
        box.disabled=true;
        checkWinner();
    })
})
let w=0;
let checkWinner=()=>{
    for(patt of winpatt){
        // console.log(patt[0],patt[1],patt[2]);
        // console.log(boxes[patt[0]].innerText,
        //            boxes[patt[1]].innerText,
        //            boxes[patt[2]].innerText);

        let p1=boxes[patt[0]].innerText;
        let p2=boxes[patt[1]].innerText;
        let p3=boxes[patt[2]].innerText;
        if(p1!="" && p2!="" && p3!=""){
            if(p1===p2 && p2 ===p3){
                w=1;
                winner.innerText=("Congratulations! Player "+p1+" Wins!");
                wininfo.style="display:block";
                // console.log("winner is "+p1);
                reset.disabled=true;
                reset.style="background-color:grey"

               for(let i=0;i<9;i++){
                if(boxes[i].innerText===""){
                    boxes[i].disabled=true;
                    boxes[i].style="background-color: #c9c9c9;";
                }
            }
            break;
            }
           
        }
        
    }
    if(count==9 && w!=1){
        winner.innerText="!!! Game Drawn !!!";
        wininfo.style="display:block";
        reset.disabled=true;
        reset.style="background-color:grey"
    }
}

function  resetGame(){
    for(let i=0;i<9;i++){
        boxes[i].innerText="";
        // boxes[i].disabled=false;
        boxes[i].style=" background-color: #F7ECE1;";
        playerTurn.style="display:none;";
        playBtn.disabled=false;
         playBtn.style="background-color: #413f3f;"
         count=0;
         w=0;
        disableBoxes();

    }
};


function PlayAgain(){
    resetGame();
    reset.disabled=false;
    reset.style="background-color:#413f3f";
    wininfo.style="display:none";

}

