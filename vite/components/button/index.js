export const createButton = (element, title = "", onClick = () => {}) => {
  const btn = document.createElement("button");
  btn.innerText = title;
  btn.addEventListener("click", onClick);
  element.appendChild(btn);
};
