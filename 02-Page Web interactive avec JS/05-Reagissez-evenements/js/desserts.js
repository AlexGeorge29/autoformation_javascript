const button = document.querySelector("button");
const listDesserts = document.getElementById("desserts")
console.log(button);

button.addEventListener("click", (event) => {
  const saisieDessert = window.prompt("entrer un desser: ");
const newDessert = document.createElement("li");
newDessert.textContent = saisieDessert;
console.log(newDessert)
  listDesserts.appendChild(newDessert);
});
