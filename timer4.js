
function start () {
//first argument : function to execute
//second argument : time in mseconds

  let timer = setInterval(changeStyle, 100);
}//end start

function changeStyle() {
  let myH2 = document.getElementById('my_heading2');

  if(myH2.hasAttribute('class')) {
    myH2.removeAttribute('class');
}

else{
  myH2.setAttribute('class', 'changed');
}//end else
}//end changestyle

window.addEventListener('load', start);