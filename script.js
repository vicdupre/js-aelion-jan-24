import { ToDoItem } from "./modules/ToDoItem.js";

const form = document.querySelector("form");
const list = document.querySelector("#list");
const submitBtn = document.querySelector("form button[type='submit']");
let items = [];

const init = () => {
  list.innerText = "Chargement...";
  //Requête GET sur l'url
  fetch("https://crudcrud.com/api/280c1dc0cd514a6e9382b5732d6b287b/todos")
    .then((response) => response.json())
    .then((data) => {
      list.innerText = "";
      //Ajout des éléments à l'interface et dans items avec un map
      items = data.map((item) => {
        const todo = new ToDoItem(
          item.title,
          item.description,
          item.urgent,
          item._id
        );
        list.insertAdjacentHTML(
          todo.urgent ? "afterbegin" : "beforeend",
          todo.html
        );
        todo.registerEvents(handleDelete);
        return todo;
      });
    });
};
init();
/**
 * Supprimer un élément de la liste et de la base de données
 *
 * Forme async/await, retourne une promesse automatiquement.
 *
 * On pourrait donc faire handleDelete().then(() => {}).catch(() => {})
 * ou l'utiliser avec await dans une autre fonction async
 * @param {ToDoItem} item
 *
 */
const handleDelete = async (item) => {
  const index = items.findIndex((el) => el.id == item.id);
  //On retire 1 élément du tableau à partir de l'index
  items.splice(index, 1);
  // items = items.filter((el) => el.id != item.id);
  try {
    const response = await fetch(
      "https://crudcrud.com/api/280c1dc0cd514a6e9382b5732d6b287b/todos/" +
        item.id,
      {
        method: "DELETE",
      }
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    }
  } catch (error) {
    console.log(error);
  }
};

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
  //Modification de l'UI et blocage du form
  submitBtn.innerText = "Envoi...";
  submitBtn.disabled = true;
  //Appel POST vers l'API, avec la donnée à enregister au format JSON dans le body
  fetch("https://crudcrud.com/api/280c1dc0cd514a6e9382b5732d6b287b/todos", {
    method: "POST",
    body: JSON.stringify({
      title: data.title,
      description: data.desc,
      urgent: !!data.urgent, //cast en booléen, pour éviter "undefined"
    }),
    headers: new Headers({
      //Contexte de la requête
      "Content-Type": "application/json", //Type de contenu envoyé dans le body
      accept: "application/json", //Type de contenu attendu dans la réponse
    }),
  })
    .then((response) => response.json()) //On récupère la réponse JSON du serveur
    .then((data) => {
      console.log(data);
      //Et on ajoute l'item à la liste et à l'UI
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
      //En cas d'erreur dans un des blocs précédents
      submitBtn.innerText = "Valider";
      submitBtn.disabled = false;
      alert("Une erreur s'est produite");
      console.log(error);
    });
};

form.addEventListener("submit", handleSubmit);
