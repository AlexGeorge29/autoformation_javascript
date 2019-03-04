const texts = document.querySelectorAll("div");

document.addEventListener('keypress', (event) => {
texts.forEach((text) => {
  if (String.fromCharCode(event.charCode) === "r"){
    text.style.color = "red";
  } else if (String.fromCharCode(event.charCode) === "j") {
    text.style.color = "yellow";
  } else if (String.fromCharCode(event.charCode) === "v") {
    text.style.color = "green";
  } else if (String.fromCharCode(event.charCode) === "b") {
    text.style.color = "blue";
  } else {
    text.style.color = "black";
  }
});
});
