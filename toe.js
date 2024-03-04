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

let btncount = 0;

btn.forEach( (button) => {
    button.addEventListener("click", ()=> {
        if(turn1 === true){
            button.innerText = "X" ;
            button.style.color="#ff3333";
            turn1 = false;
        }
        else{
            button.innerText = "O" ;
            turn1 = true;
            button.style.color="#3399ff";
        }
        button.disabled = true; //once player makes a choice he cannot change

        const check = checkWinner();
        
        btncount++;

        if(btncount == 9 && check != 1 )
            alert("Match DRAWN Try Again");
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
                alert(`Congratulations ${ele1} WON`);

                stopGame(); // once we get a winner the game stops
                
                return 1;
            }
            
        }
    }
}

function stopGame(){
    for(let i of btn){
        i.disabled = true;
    }
}
