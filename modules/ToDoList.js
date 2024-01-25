import { ToDoItem } from "./ToDoItem.js";

export class ToDoList {
  constructor(key) {
    this.key = key;
    this.items = [];
    this.init(key);
  }
  init(key) {
    this.key = key;
    const items = localStorage.getItem(key);
    if (items) {
      this.items = JSON.parse(items).map(
        (item) =>
          new ToDoItem(item.title, item.description, item.urgent, item.id)
      );
    }
  }
  store() {
    if (!this.key) {
      throw new Error("key not set");
    }
    localStorage.setItem(this.key, JSON.stringify(this.items));
  }
  addItem(item) {
    this.items.push(item);
    this.store();
  }
  removeItem(item) {
    this.items = this.items.filter((i) => i.id !== item.id);
    this.store();
  }
}
