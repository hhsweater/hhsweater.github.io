function start () {
var value = 0;
}
//init vars
var turn = 0;
var addTurn = 1;
var gameOver = 0;
var compBoard = [click1,click2,click3,click4,click5,click6,click7,click8,click9];//init computer board
var lastClicked = 0;

const board = [[0,0,0],[0,0,0],[0,0,0]];
const rows = 3;
const cols = 3;

function startGame(){//regular 1 player start
  turn = 1;
  infoChange();
  startTimer();
  changeStyle2();
}

function vsComp(){//vs bot
    startTimer();
    turn = Math.floor(Math.random() * 2)+ 1;
    compPlay();
    infoChange();
    changeStyle2();//unhides reset
    changeStyle3();//unhides computer next turn
    console.log("turn is" + turn)
}

function compTurn(){//button for bot turn
  compPlay();
}

function vsHuman(){//vs friend, randomly selects X or O to start
    startTimer();
    turn = Math.floor(Math.random() * 2)+ 1;
    console.log("turn is" + turn)
    infoChange();//prints who starts first
    changeStyle2();//unhides reset
}

function compPlay(){//Computer player code

var randClick = compBoard[Math.floor(Math.random() * compBoard.length)];//randomly select a click event
  if (turn % 2 == 0) { //even turn
  compBoard[randClick()];
  var value = randClick;
  compBoard = compBoard.filter(function(item) {
    return item !== value
  })
  randClick = 0;
  value = 0;
  console.log("comp turn")
  //console.log(randClick)
  //console.log(compBoard)
}
}

function turnInc(){//increments turn variable


  y = 1;
  turn = turn + y;
  console.log("turnInc has been called")


  return turn;
}

function resetGame(){//reset button control
  window.location.reload();
}

function chkWin(){

  for (var i = 0; i < 3; i++) {
       if (board[i][0] == 1 && board[i][1] == 1 && board[i][2] == 1) { //any col X
       infoChangeXwin();
       console.log("Player 1 Wins 67")

     } else if (board[i][0] == 2 && board[i][1] == 2 && board[i][2] == 2) { //any col O
       infoChangeOwin();
       console.log("Player 2 Wins 71")

     } else if (board[0][i] == 1 && board[1][i] == 1 && board[2][i] == 1) { //any row X
       infoChangeXwin();
       console.log("Player 1 Wins 75")

       } else if (board[0][i] == 2 && board[1][i] == 2 && board[2][i] == 2) { //any row O
       infoChangeOwin();
       console.log("Player 2 Wins 79")
     }
   }
   if (board[0][0] == 1 && board[1][1] == 1 && board[2][2] == 1) { //first diag X
       infoChangeXwin();
       console.log("Player 1 Wins 83")

   } else if (board[0][2] == 1 && board[1][1] == 1 && board[2][0] == 1) { //other diag X
       infoChangeXwin();
       console.log("Player 1 Wins 87")

   } else if (board[0][0] == 2 && board[1][1] == 2 && board[2][2] == 2) { //first diag O
       infoChangeOwin();
       console.log("Player 2 Wins 91")

   } else if (board[0][2] == 2 && board[1][1] == 2 && board[2][0] == 2) { //other diag O
       infoChangeOwin();
       console.log("Player 2 Wins 95")

   }
   else if (turn == 10) {
         infoChangeTie();
     }
 console.log("chkWin called")
 return;
}

//these functions change the values in the array that calculates win state

function changeArray1(){
  if ((turn == 1 )||(turn == 3)||(turn == 5)||(turn == 7)||(turn == 9)){//odd turn
    board[0][0]= "1"
  }
  if ((turn == 2)||(turn == 4)||(turn == 6)||(turn == 8)||(turn == 10)) {//even turn
    board[0][0]= "2"
  }
  console.log(board)

}

function changeArray2(){
  if ((turn == 1 )||(turn == 3)||(turn == 5)||(turn == 7)||(turn == 9)){//odd turn
    board[0][1]= "1"
  }
  if ((turn == 2)||(turn == 4)||(turn == 6)||(turn == 8)||(turn == 10)) {//even turn
    board[0][1]= "2"
  }
  console.log(board)
}

function changeArray3(){
  if ((turn == 1 )||(turn == 3)||(turn == 5)||(turn == 7)||(turn == 9)){//odd turn
    board[0][2]= "1"
  }
  if ((turn == 2)||(turn == 4)||(turn == 6)||(turn == 8)||(turn == 10)) {//even turn
    board[0][2]= "2"
  }
  console.log(board)
}

function changeArray4(){
  if ((turn == 1 )||(turn == 3)||(turn == 5)||(turn == 7)||(turn == 9)){//odd turn
    board[1][0]= "1"
  }
  if ((turn == 2)||(turn == 4)||(turn == 6)||(turn == 8)||(turn == 10)) {//even turn
    board[1][0]= "2"
  }
  console.log(board)
}

function changeArray5(){
  if ((turn == 1 )||(turn == 3)||(turn == 5)||(turn == 7)||(turn == 9)){//odd turn
    board[1][1]= "1"
  }
  if ((turn == 2)||(turn == 4)||(turn == 6)||(turn == 8)||(turn == 10)) {//even turn
    board[1][1]= "2"
  }
  console.log(board)
}

function changeArray6(){
  if ((turn == 1 )||(turn == 3)||(turn == 5)||(turn == 7)||(turn == 9)){//odd turn
    board[1][2]= "1"
  }
  if ((turn == 2)||(turn == 4)||(turn == 6)||(turn == 8)||(turn == 10)) {//even turn
    board[1][2]= "2"
  }
  console.log(board)
}

function changeArray7(){
  if ((turn == 1 )||(turn == 3)||(turn == 5)||(turn == 7)||(turn == 9)){//odd turn
    board[2][0]= "1"
  }
  if ((turn == 2)||(turn == 4)||(turn == 6)||(turn == 8)||(turn == 10)) {//even turn
    board[2][0]= "2"
  }
  console.log(board)
}

function changeArray8(){
  if ((turn == 1 )||(turn == 3)||(turn == 5)||(turn == 7)||(turn == 9)){//odd turn
    board[2][1]= "1"
  }
  if ((turn == 2)||(turn == 4)||(turn == 6)||(turn == 8)||(turn == 10)) {//even turn
    board[2][1]= "2"
  }
  console.log(board)
}

function changeArray9(){
  if ((turn == 1 )||(turn == 3)||(turn == 5)||(turn == 7)||(turn == 9)){//odd turn
    board[2][2]= "1"
  }
  if ((turn == 2)||(turn == 4)||(turn == 6)||(turn == 8)||(turn == 10)) {//even turn
    board[2][2]= "2"
  }
  console.log(board)
}

//these functions swap the images from blank to x's or o's

function imgSwap() {
    if ((turn == 1 )||(turn == 3)||(turn == 5)||(turn == 7)||(turn == 9))
    {
      document.getElementById("swap").src = "images/x.png";
      //document.getElementById("swap").src = "images/x.png";
    }
    if ((turn == 2)||(turn == 4)||(turn == 6)||(turn == 8)||(turn == 10))
    {
      document.getElementById("swap").src = "images/o.png";
    }

}
function imgSwap2() {
    if ((turn == 1 )||(turn == 3)||(turn == 5)||(turn == 7)||(turn == 9))
    {
      document.getElementById("swap2").src = "images/x.png";
    }
    if ((turn == 2)||(turn == 4)||(turn == 6)||(turn == 8)||(turn == 10))
    {
      document.getElementById("swap2").src = "images/o.png";
    }

}
function imgSwap3() {
    if ((turn == 1 )||(turn == 3)||(turn == 5)||(turn == 7)||(turn == 9))
    {
      document.getElementById("swap3").src = "images/x.png";
    }
    if ((turn == 2)||(turn == 4)||(turn == 6)||(turn == 8)||(turn == 10))
    {
      document.getElementById("swap3").src = "images/o.png";
    }

}
function imgSwap4() {
    if ((turn == 1 )||(turn == 3)||(turn == 5)||(turn == 7)||(turn == 9))
    {
      document.getElementById("swap4").src = "images/x.png";
    }
    if ((turn == 2)||(turn == 4)||(turn == 6)||(turn == 8)||(turn == 10))
    {
      document.getElementById("swap4").src = "images/o.png";
    }

}
function imgSwap5() {
    if ((turn == 1 )||(turn == 3)||(turn == 5)||(turn == 7)||(turn == 9))
    {
      document.getElementById("swap5").src = "images/x.png";
    }
    if ((turn == 2)||(turn == 4)||(turn == 6)||(turn == 8)||(turn == 10))
    {
      document.getElementById("swap5").src = "images/o.png";
    }

}
function imgSwap6() {
    if ((turn == 1 )||(turn == 3)||(turn == 5)||(turn == 7)||(turn == 9))
    {
      document.getElementById("swap6").src = "images/x.png";
    }
    if ((turn == 2)||(turn == 4)||(turn == 6)||(turn == 8)||(turn == 10))
    {
      document.getElementById("swap6").src = "images/o.png";
    }

}
function imgSwap7() {
    if ((turn == 1 )||(turn == 3)||(turn == 5)||(turn == 7)||(turn == 9))
    {
      document.getElementById("swap7").src = "images/x.png";
    }
    if ((turn == 2)||(turn == 4)||(turn == 6)||(turn == 8)||(turn == 10))
    {
      document.getElementById("swap7").src = "images/o.png";
    }

}
function imgSwap8() {
    if ((turn == 1 )||(turn == 3)||(turn == 5)||(turn == 7)||(turn == 9))
    {
      document.getElementById("swap8").src = "images/x.png";
    }
    if ((turn == 2)||(turn == 4)||(turn == 6)||(turn == 8)||(turn == 10))
    {
      document.getElementById("swap8").src = "images/o.png";
    }

}
function imgSwap9() {
    if ((turn == 1 )||(turn == 3)||(turn == 5)||(turn == 7)||(turn == 9))
    {
      document.getElementById("swap9").src = "images/x.png";
    }
    if ((turn == 2)||(turn == 4)||(turn == 6)||(turn == 8)||(turn == 10))
    {
      document.getElementById("swap9").src = "images/o.png";
    }

}

//these functions handle the click events for each image
//(used to be for buttons but i got rid of those early on)

function click1(){
  changeArray1();
  imgSwap();
  turnInc();
  infoChange();
  chkWin();

  //removes last click event from compBoard
  const index = compBoard.indexOf(click1);
  if (index > -1) { // only splice array when item is found
  compBoard.splice(index, 1); // 2nd parameter means remove one item only
}
  console.log(compBoard)
beenClicked = 0;
}
function click2(){
  changeArray2();
  imgSwap2();
  turnInc();
  infoChange();
  chkWin();

  //removes last click event from compBoard
  const index = compBoard.indexOf(click2);
  if (index > -1) { // only splice array when item is found
  compBoard.splice(index, 1); // 2nd parameter means remove one item only
}
  console.log(compBoard)
  beenClicked = 0;
}
function click3(){
  changeArray3();
  imgSwap3();
  turnInc();
  infoChange();
  chkWin();

  //removes last click event from compBoard
  const index = compBoard.indexOf(click3);
  if (index > -1) { // only splice array when item is found
  compBoard.splice(index, 1); // 2nd parameter means remove one item only
}
  console.log(compBoard)
  beenClicked = 0;
}
function click4(){
  changeArray4();
  imgSwap4();
  turnInc();
  infoChange();
  chkWin();

  //removes last click event from compBoard
  const index = compBoard.indexOf(click4);
  if (index > -1) { // only splice array when item is found
  compBoard.splice(index, 1); // 2nd parameter means remove one item only
}
  console.log(compBoard)
  beenClicked = 0;
}
function click5(){
  changeArray5();
  imgSwap5();
  turnInc();
  infoChange();
  chkWin();

  //removes last click event from compBoard
  const index = compBoard.indexOf(click5);
  if (index > -1) { // only splice array when item is found
  compBoard.splice(index, 1); // 2nd parameter means remove one item only
}
  console.log(compBoard)
  beenClicked = 0;
}
function click6(){
  changeArray6();
  imgSwap6();
  turnInc();
  infoChange();
  chkWin();

  //removes last click event from compBoard
  const index = compBoard.indexOf(click6);
  if (index > -1) { // only splice array when item is found
  compBoard.splice(index, 1); // 2nd parameter means remove one item only
}
  console.log(compBoard)
  beenClicked = 0;
}
function click7(){
  changeArray7();
  imgSwap7();
  turnInc();
  infoChange();
  chkWin();

  //removes last click event from compBoard
  const index = compBoard.indexOf(click7);
  if (index > -1) { // only splice array when item is found
  compBoard.splice(index, 1); // 2nd parameter means remove one item only
}
  console.log(compBoard)
  beenClicked = 0;
}
function click8(){
  changeArray8();
  imgSwap8();
  turnInc();
  infoChange();
  chkWin();

  //removes last click event from compBoard
  const index = compBoard.indexOf(click8);
  if (index > -1) { // only splice array when item is found
  compBoard.splice(index, 1); // 2nd parameter means remove one item only
}
  console.log(compBoard)
  beenClicked = 0;
}
function click9(){
  changeArray9();
  imgSwap9();
  turnInc();
  infoChange();
  chkWin();

  //removes last click event from compBoard
  const index = compBoard.indexOf(click9);
  if (index > -1) { // only splice array when item is found
  compBoard.splice(index, 1); // 2nd parameter means remove one item only
}

  console.log(compBoard)
  beenClicked = 0;
}




//function for changing info displayed in the info output
function infoChange(){
  if ((turn == 1 )||(turn == 3)||(turn == 5)||(turn == 7)||(turn == 9)){
  document.getElementById("info").innerHTML = "Next turn is X's";
  }
  if ((turn == 2)||(turn == 4)||(turn == 6)||(turn == 8)) {//even turn
  document.getElementById("info").innerHTML = "Next turn is O's";
  console.log("infoChange has been called");
  }
}

function infoChangeXwin(){
  changeStyle();
  changeStyleTimer();
  changeStyleTimer2();
  document.getElementById("info").innerHTML = "Player 1 Wins";

}

function infoChangeOwin(){
  changeStyle();
  changeStyleTimer();
  changeStyleTimer2();
  document.getElementById("info").innerHTML = "Player 2 Wins";

}

function infoChangeTie(){
  changeStyle();
  changeStyleTimer();
  changeStyleTimer2();
  document.getElementById("info").innerHTML = "Cat's Game";

}

function changeStyle() {
  let myButt = document.getElementById('myButt');

  if(myButt.hasAttribute('class')) {
    myButt.removeAttribute('class');
}

else{
  myButt.setAttribute('class', 'changed');
}//end else
}//end changestyle

function changeStyle2() {
  let myButt = document.getElementById('myButt2');

  if(myButt.hasAttribute('class')) {
    myButt.removeAttribute('class');
}

else{
  myButt.setAttribute('class', 'changed');
}//end else
}//end changestyle

function changeStyle3() {
  let myButt = document.getElementById('myButt3');

  if(myButt.hasAttribute('class')) {
    myButt.removeAttribute('class');
}

else{
  myButt.setAttribute('class', 'changed');
}//end else
}//end changestyle


//timer
function changeStyleTimer() {
  let myTim = document.getElementById('minutes');

  if(myTim.hasAttribute('id')) {
    myTim.removeAttribute('id');
}

else{
  myButt.setAttribute('class', 'void');
}//end else
}//end changestyle

function changeStyleTimer2() {
  let myTim = document.getElementById('seconds');

  if(myTim.hasAttribute('id')) {
    myTim.removeAttribute('id');
}

else{
  myButt.setAttribute('class', 'void');
}//end else
}//end changestyle


var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
function startTimer(){

setInterval(setTime, 1000);
}


function setTime() {
  ++totalSeconds;
  document.getElementById("seconds").innerHTML = pad(totalSeconds % 60);
  document.getElementById("minutes").innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}





window.addEventListener('load', start);
