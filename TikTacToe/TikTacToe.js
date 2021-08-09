let cellPlayedPlayerCapture = ["","","","","","","","",""];//To capture X or O n click;
let currentPlayer = "X";
let winningCombinations =[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let lastPlayer = ""; //To capture the last player before it is changed.
let allowToProceed = true; //Once some one wins, we shall set this to false
//At first we shall draw the borders using JavaScript
const myCells = document.getElementsByClassName("Cell");
for(let i=0; i<myCells.length;i++){
    let cellStyle = "";
    if(i%3===2){
        cellStyle +="border-left:3px solid #132be8; ";
    }
    if(i%3===0){
        cellStyle +="border-right:3px solid #132be8;";
    }
    if(i>5){
        cellStyle +="border-top:3px solid #132be8;";
    }
    if(i<3){
        cellStyle +="border-bottom:3px solid #132be8;";
    }
    myCells[i].style = cellStyle;
}
//Now fetch the index attribute of the cell clicked
let myElements = document.querySelectorAll(".Cell");//Class of our elements is Cell
for(let element of myElements){
  element.addEventListener('click', function(e){
      const eleClicked = e.target;
      const eleIndex = parseInt(eleClicked.getAttribute("data-cell-index"));
      if(cellPlayedPlayerCapture[eleIndex] ==="" && allowToProceed){
          eleClicked.innerText = currentPlayer;
          lastPlayer = currentPlayer;
          if(currentPlayer==="X"){//To change the color of X to Red
            eleClicked.classList.add("RedCross");
          }else{
            eleClicked.classList.remove("RedCross"); 
          }
          cellPlayedPlayerCapture[eleIndex] = currentPlayer;
          //Changing the sign for the next player.
          alterUser();  
      } 
      //On each click check if any one has reached the winning combination.
      let combCheck = 0;
      for(let j=0;j<winningCombinations.length;j++){
          combCheck++;
          let winningCombination = winningCombinations[j];
          let cellOneVal = cellPlayedPlayerCapture[winningCombination[0]];
          let cellTwoVal = cellPlayedPlayerCapture[winningCombination[1]];
          let cellThreeVal = cellPlayedPlayerCapture[winningCombination[2]];
          if(cellOneVal.length>0 && cellTwoVal.length>0 && cellThreeVal.length>0){
            if(cellOneVal===cellTwoVal && cellTwoVal === cellThreeVal){
                let messageElement = document.querySelector(".gameStatus");
                messageElement.innerText = "Player "+lastPlayer+" has won";
                allowToProceed = false;
                break;
            }else{//Check condition for a draw
               if(combCheck === winningCombinations.length){
                checkForDraw();
               }
            }
          }
      }
      //
  })    
}
function alterUser(){
  if(currentPlayer ==='X'){
      currentPlayer = 'O';
    }else{
      currentPlayer = 'X';
    }  
}
//Following is the code for re-setting
let btnReset = document.querySelector(".restart");
btnReset.addEventListener("click", gameReset);

function gameReset(){
  if(isArrayEmpty()>0){
    let confirmReset = confirm("Are you sure you want to reset.");
    if(confirmReset){
      for(let i=0; i<cellPlayedPlayerCapture.length;i++){
        cellPlayedPlayerCapture[i] = "";            
      }
          let messageElement2 = document.querySelector(".gameStatus");
          messageElement2.innerText = "";
     for(let element of myElements){
            element.innerText = "";
     }
     currentPlayer = "X";
     allowToProceed = true;
    }
  }
}

function isArrayEmpty(){
  let eleCount = 0;
  for(let i of cellPlayedPlayerCapture){
    if(i.length>0){
      eleCount++;
    };
  }
  return eleCount;
}

function checkForDraw(){
  let cellCount = 0;
    for(let k=0; k<cellPlayedPlayerCapture.length; k++){
      if(cellPlayedPlayerCapture[k]!=""){
        cellCount++;
    }
  }
    if(cellCount===9){
     let messageElement = document.querySelector(".gameStatus");
     messageElement.innerText = "Game is a draw!!";
     allowToProceed = false;
  }
}

