const saisir = document.querySelector(".prompt-windows")
saisir.addEventListener('click', (event) => {
  var couleurText = prompt("saisir la couleur du text: ");
  var couleurFond = prompt("saisir la couleur du font: ");

const titles = document.querySelectorAll("h1");
const texts = document.querySelectorAll("p");

titles.forEach(title => {
  title.style.color = couleurText;
});

texts.forEach(text => {
  text.style.color = couleurText;
});
});
