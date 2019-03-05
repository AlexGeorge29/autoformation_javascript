// Utiliser window.onload(move)
const delayInMilliseconds = 100000;

function move() {
  var elem = document.getElementById("myBar");
  var width = 1;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
      setTimeout(document.getElementById("myProgress").classList.add("hidden"), delayInMilliseconds);
    } else {
      width++;
      elem.style.width = width + '%';
    }
  }
}

window.addEventListener('load', move())


// setTimeout(function() {
//   //your code to be executed after 1 second
// }, delayInMilliseconds);
