import { ToDoItem } from "./modules/ToDoItem.js";

const form = document.querySelector("form");
const list = document.querySelector("#list");
const submitBtn = document.querySelector("form button[type='submit']");
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
  //On retire 1 élément du tableau à partir de l'index
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
  submitBtn.innerText = "Envoi...";
  submitBtn.disabled = true;
  fetch("https://crudcrud.com/api/9dbb7c1461d3456b835eb0848e8d2c76/todos", {
    method: "POST",
    body: JSON.stringify({
      title: data.title,
      description: data.desc,
      urgent: !!data.urgent,
    }),
    headers: new Headers({
      "Content-Type": "application/json",
      accept: "application/json",
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const item = new ToDoItem(
        data.title,
        data.description,
        data.urgent,
        data._id
      );
      list.insertAdjacentHTML(
        item.urgent ? "afterbegin" : "beforeend",
        item.html
      );
      items.push(item);
      item.registerEvents(handleDelete);
      form.reset();
      submitBtn.innerText = "Valider";
      submitBtn.disabled = false;
    })
    .catch((error) => {
      submitBtn.innerText = "Valider";
      submitBtn.disabled = false;
      alert("Une erreur s'est produite");
      console.log(error);
    });
};

/* const promise = fetch("https://fakestoreapi.com/products", {
  method: "GET",
  headers: new Headers(),
  mode: "cors",
});
console.log(promise);
promise
  .then((response) => {
    console.log(response);
    const json = response.json();
    console.log(json);
    return json;
  })
  .then((json) => {
    console.log(json);
  })
  .catch((error) => {
    console.log(error);
  });
 */
form.addEventListener("submit", handleSubmit);
