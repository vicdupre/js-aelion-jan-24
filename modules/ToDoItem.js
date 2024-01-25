export class ToDoItem {
  constructor(title, description, urgent = false) {
    this.title = title;
    this.description = description;
    this.urgent = urgent;
    this.id = Date.now();
  }

  get html() {
    return `<li id="item-${this.id}">
      ${this.title} - ${this.description}
       <button value=${this.id}>Supprimer</button>
       </li>`;
  }

  registerEvents() {
    document
      .querySelector(`#item-${this.id} button`)
      .addEventListener("click", (event) => {
        document.querySelector(`#item-${event.target.value}`).remove();
      });
  }
}
