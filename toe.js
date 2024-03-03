let btn = document.querySelectorAll(".cell");

let turn1 = true; //player1=X,player2=O;

const WinPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

btn.forEach( (button) => {
    button.addEventListener("click", ()=> {
        if(turn1 === true){
            button.innerText = "X" ;
            turn1 = false;
        }
        else{
            button.innerText = "O" ;
            turn1 = true;
        }
        button.disabled = true; //once player makes a choice he cannot change

        checkWinner();
    })
})

function checkWinner(){
    for(let Pattern of WinPattern){
        // console.log(btn[Pattern[0]])
        let ele1 = btn[Pattern[0]].innerText;

        let ele2 = btn[Pattern[1]].innerText;

        let ele3 = btn[Pattern[2]].innerText;

        if(ele1 != "" && ele2 != "" && ele3 != ""){
            
            if(ele1 === ele2 && ele2 === ele3){
                console.log("Winner");

                stopGame(); // once we get a winner the game stops
            }
            
        }
    }
}

function stopGame(){
    for(let i of btn){
        i.disabled = true;
    }
}