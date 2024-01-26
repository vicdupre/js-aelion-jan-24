import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";
import axios from "axios";
import { isPortrait, isSmallScreen } from "./utils.js";

let cart = [];
let articles = [];
document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Votre panier contient <span id="cartCount">${cart.length}</span> objets</h1>
    <h2>Valeur totale: <span id="cartTotal">0</span>€</h2>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <ul id="articles"></ul>
    <div id="btn"></div>
    <p class="read-the-docs">
      Le HMR fonctionne
    </p>
  </div>
`;

const handleClick = (event) => {
  const { value } = event.target;
  //const index = cart.indexOf(value);
  //console.log(index);
  const index = cart.findIndex((item) => item.id == value);
  if (index < 0) {
    const item = articles.find((el) => el.id == value);
    cart.push(item);
    //cart.push(value)
    event.target.innerText = "Retirer du panier";
    event.target.style.backgroundColor = "tomato";
  } else {
    cart.splice(index, 1);
    event.target.innerText = "Ajouter au panier";
    event.target.style.backgroundColor = null;
  }

  const total = cart.reduce((prev, current) => prev + current.price, 0);

  document.querySelector("#cartTotal").innerText = total.toFixed(2);
  document.querySelector("#cartCount").innerText = cart.length;
};

const setupArticles = async () => {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  articles = data;
  const elements = data.map((article) => {
    let el = document.createElement("li");
    el.innerText = `${article.title} - ${article.price.toFixed(2)}€ `;
    let btn = document.createElement("button");
    btn.innerText = "Ajouter au panier";
    btn.value = article.id;
    btn.addEventListener("click", handleClick);
    el.appendChild(btn);
    return el;
  });

  // elements.forEach((el) => document.querySelector("#articles").append(el));
  document.querySelector("#articles").append(...elements);
  /*  elements = [...elements, "<li></li>"]
  elements.push("<li></li>") */
};
setupArticles();
setupCounter(document.querySelector("#counter"));

const handleSmallScreen = (matchMediaQuery) => {
  console.log(matchMediaQuery);
  if (matchMediaQuery.matches) {
    document.querySelector(".read-the-docs").innerText =
      "Vous êtes sur un petit écran";
  } else {
    document.querySelector(".read-the-docs").innerText =
      "Vous êtes sur un grand écran";
  }
};
const handleOrientationChange = (matchMediaQuery) => {
  if (matchMediaQuery.matches) {
    document.querySelector("body").style.backgroundColor = "tomato";
  } else {
    document.querySelector("body").style.backgroundColor = "gray";
  }
};

isSmallScreen.addEventListener("change", handleSmallScreen);
isPortrait.addEventListener("change", handleOrientationChange);

console.log(navigator.userAgent);

if (window.fetch) {
  //Appel fetch
} else {
  //XMLHttpRequest
}
console.log(window.screen.width);
