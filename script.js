let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let newGameBtn = document.querySelector(".new-game");
let msgContainer = document.querySelector(".win-msg");
let msg = document.querySelector("#msg")

let turnO = true;
const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const resetGame = () =>{
    turnO = true;
    for(let box of boxes){
        box.innerText="";
        box.disabled=false;
    }
    msgContainer.classList.add("hide");
    box.disabled=false;
}

resetBtn.addEventListener("click",resetGame);

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO === true) {
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    })
});

const checkWinner = () => {
    for (let pattern of winPattern) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val !="" && pos1Val !="" && pos1Val !=""){
            if(pos1Val === pos2Val && pos1Val === pos3Val){
                console.log("winner " ,pos1Val );
                showWinner(pos1Val);
            }
        }
    }

};

const showWinner =(winner) =>{
    msgContainer.classList.remove("hide");
    msg.innerText =`Congratualtions Winner Is ${winner}`;
    for(let box of boxes){
        box.disabled=true;
    }
}

newGameBtn.addEventListener("click",resetGame);