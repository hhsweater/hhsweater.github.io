
function start () {
//first argument : function to execute
//second argument : time in mseconds

  let timer = setInterval(changeStyle, 100);
}//end start

function changeStyle() {
  let myH3 = document.getElementById('my_heading3');

  if(myH3.hasAttribute('class')) {
    myH3.removeAttribute('class');
}

else{
  myH3.setAttribute('class', 'changed');
}//end else
}//end changestyle

window.addEventListener('load', start);