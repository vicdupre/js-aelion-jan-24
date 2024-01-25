import { ToDoItem } from "./modules/ToDoItem.js";

const form = document.querySelector("form");
const list = document.querySelector("#list");

const saveItems = () => {
  //Stockage des données
  const jsonItems = JSON.stringify(items);
  console.log(jsonItems);
  localStorage.setItem("items", jsonItems);
};

const getItems = () => {
  //Récupération des données
  const jsonItems = localStorage.getItem("items");
  const items = jsonItems ? JSON.parse(jsonItems) : [];
  return items.map(
    (item) => new ToDoItem(item.title, item.description, item.urgent, item.id)
  );
};
const handleDelete = (item) => {
  const index = items.findIndex((el) => el.id == item.id);
  //On retire 1 élément du tableau à paertir de l'index
  items.splice(index, 1);
  // items = items.filter((el) => el.id != item.id);
  saveItems();
};

let items = getItems();
items.forEach((item) => {
  list.insertAdjacentHTML(item.urgent ? "afterbegin" : "beforeend", item.html);
  item.registerEvents(handleDelete);
});

const handleSubmit = (event) => {
  //On bloque le comportement par défaut de l'évènement
  event.preventDefault();
  //On récupère la donnée du formulaire
  const formData = new FormData(form);
  //On transforme notre objet FormData en objet "classique", plus simple à manipuler
  const data = Object.fromEntries(formData);
  console.log(data);
  //Vérification de la donnée avec un guard, attention, ne remplace pas une vérification côté serveur
  if (!data.title) {
    alert("Un titre est requis !");
    return;
  }
  //On crée une instance de la classe ToDoItem, qui nous permettra de réutiliser le code de génération du HTML
  const item = new ToDoItem(data.title, data.desc, data.urgent);
  list.insertAdjacentHTML(item.urgent ? "afterbegin" : "beforeend", item.html);
  /* 
    OU AVEC UN ELEMENT
    list.insertAdjacentElement(
    item.urgent ? "afterbegin" : "beforeend",
    item.element
  ); */
  items.push(item);
  console.log(items);
  item.registerEvents(handleDelete);
  saveItems();
  form.reset();
};

form.addEventListener("submit", handleSubmit);
