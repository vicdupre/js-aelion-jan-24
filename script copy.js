import { ToDoItem } from "./modules/ToDoItem.js";

const form = document.querySelector("form");
const list = document.querySelector("#list");

const handleSubmit = (event) => {
  //On bloque le comportement par défaut de l'évènement
  event.preventDefault();
  //On récupère la donnée du formulaire
  const formData = new FormData(form);
  // console.log(formData);
  const data = Object.fromEntries(formData);
  console.log(data);
  if (!data.title) {
    alert("Un titre est requis !");
    return;
  }
  const item = new ToDoItem(data.title, data.desc, data.urgent);
  list.insertAdjacentHTML(
    item.urgent ? "afterbegin" : "beforebegin",
    item.html
  );

  item.registerEvents();
  form.reset();
};

form.addEventListener("submit", handleSubmit);
