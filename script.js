import { ToDoItem } from "./modules/ToDoItem.js";
import { ToDoList } from "./modules/ToDoList.js";

const form = document.querySelector("form");
const list = document.querySelector("#list");
const toDoList = new ToDoList("todos");
toDoList.items.forEach((item) => {
  list.insertAdjacentHTML(item.urgent ? "afterbegin" : "beforeend", item.html);
  item.registerEvents(toDoList.removeItem.bind(toDoList));
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
  toDoList.addItem(item);
  list.insertAdjacentHTML(item.urgent ? "afterbegin" : "beforeend", item.html);
  /* 
    OU AVEC UN ELEMENT
    list.insertAdjacentElement(
    item.urgent ? "afterbegin" : "beforeend",
    item.element
  ); */
  item.registerEvents(toDoList.removeItem.bind(toDoList));
  //saveItems();
  form.reset();
};

form.addEventListener("submit", handleSubmit);
