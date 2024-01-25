export class ToDoItem {
  constructor(title, description, urgent = false, id = Date.now()) {
    this.title = title;
    this.description = description;
    this.urgent = urgent;
    this.id = id;
  }

  get element() {
    const li = document.createElement("li");
    const button = document.createElement("button");
    li.id = `item-${this.id}`;
    li.innerText = `${this.title} - ${this.description}`;
    button.value = this.id;
    button.innerText = "Supprimer";
    li.appendChild(button);
    return li;
  }

  get html() {
    return `<li id="item-${this.id}">
      ${this.title} - ${this.description}
       <button value=${this.id}>Supprimer</button>
       </li>`;
  }

  delete(event, callback) {
    document.querySelector(`#item-${event.target.value}`).remove();
    callback(this);
  }

  registerEvents(onDelete = (item) => {}) {
    console.log(onDelete);
    const element = document.querySelector(`#item-${this.id} button`);
    element.addEventListener("click", (e) => this.delete(e, onDelete));
  }
}
