//1) Bouton de couleur aléatoire

const generateRandomColor = () => {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
};

const randomBtn = document.getElementById("random");

randomBtn.addEventListener("click", (event) => {
  const color = generateRandomColor();
  event.target.style.backgroundColor = color;
});

//2) Afficher les éléments d'un tableau

const fruits = ["Pomme 🍎", "Fraise 🍓", "Orange 🍊"];
const list = document.querySelector("#fruits");
fruits.forEach((fruit) => {
  list.innerHTML += `<li>${fruit}</li>`;
});

/* 
  const htmlFruits = fruits.map((fruit) => `<li>${fruit}</li>`);
  list.innerHTML = htmlFruits.join("");
   */
//3) Horloge

const clock = document.querySelector("p#clock");

setInterval(() => {
  console.log("tick");
  clock.innerText = new Date().toLocaleTimeString();
}, 1000);
