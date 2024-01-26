import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";
import axios from "axios";

let cart = [];

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Votre panier contient <span id="cartCount">${cart.length}</span> objets</h1>
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

const handleClick = (event) => {};

const setupArticles = async () => {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  const elements = data.map((article) => {
    let el = document.createElement("li");
    el.innerText = article.title;
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
