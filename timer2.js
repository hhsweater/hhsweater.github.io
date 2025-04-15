
function start () {
//first argument : function to execute
//second argument : time in mseconds

  let timer = setInterval(changeStyle, 100);
}//end start

function changeStyle() {
  let myH1 = document.getElementById('my_heading');

  if(myH1.hasAttribute('class')) {
    myH1.removeAttribute('class');
}

else{
  myH1.setAttribute('class', 'changed');
}//end else
}//end changestyle

window.addEventListener('load', start);