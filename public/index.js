import { createMainContent, fetchNew, createVoteElements} from './main.js';
import { createCommentsForm } from "./comment.js"
import { saveAll, restoreData } from "./restore.js"

const initializePage = () => {
  // Create container
  const container = document.createElement("main");
  container.className = "container";
  container.style.display = "flex";
  container.style.flexDirection = "column";
  container.style.alignItems = "center";
  container.style.marginTop = "10px";

  const imageBox = document.createElement("section");
  imageBox.className = "image-box";

  const formElement = document.createElement("form");
  formElement.id = "comments-form";
  formElement.className = "form";
  formElement.method = "post";

  const footer = document.createElement("footer");
  footer.className = "footer";
  footer.innerText = "© Copyright 2023 Catstagram";
  footer.style = "padding-bottom: 50px;"

  container.append(imageBox, formElement, footer);
  document.body.append(container);


};

window.onload = () => {
  initializePage();
  createMainContent();
  createVoteElements();
  createCommentsForm();
  fetchNew();
  if (localStorage.getItem("currImg"))restoreData();
  saveAll();
  toggleDarkLight();
};
