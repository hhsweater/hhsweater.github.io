window.addEventListener('load', start);
function start () {
//first argument : function to execute
//second argument : time in mseconds

  let timer = setInterval(changeStyle, 100);
}//end start

function changeStyle() {
  let myH1 = document.getElementById('my_heading');
  let myH2 = document.getElementById('my_heading2');
  let myH3 = document.getElementById('my_heading3');

  if(myH1.hasAttribute('class')) {
    myH1.removeAttribute('class');
}
else{
  myH1.setAttribute('class', 'changed');
}
  if(myH2.hasAttribute('class')) {
    myH2.removeAttribute('class');
  }
    
else{
  myH2.setAttribute('class', 'changed');}
      
  if(myH3.hasAttribute('class')) {
     myH3.removeAttribute('class');
  }
else{
  myH3.setAttribute('class', 'changed');
    }}
      

//end else
//end changestyle



