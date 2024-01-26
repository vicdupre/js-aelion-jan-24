import axios from "axios";

export const setupArticles = async (element) => {
  const response = await axios.get("https://fakestoreapi.com/products");
  const articles = response.data.map((article) => `<li>${article.title}</li>`);
  element.innerHTML = articles.join("");
};
