import { saveAll } from "./restore.js";


export const createCommentsForm = () => {
  const commentDiv = document.createElement("div");
  commentDiv.className = "form form-child";

  const labelEl = document.createElement("label");
  labelEl.htmlFor = "comment";
  labelEl.style = "font-weight: bold; font-size: 20px; padding-right: 10px; color: #ff4c68"
  labelEl.innerText = "Commeow:";


  const textArea = document.createElement("input");
  textArea.type = "text";
  textArea.className = "text-area"
  textArea.maxLength = "50"
  textArea.placeholder = "Leave a friendly comment (^.^)~...";

  const submitBtn = document.createElement("input");
  submitBtn.id = "submit"
  submitBtn.type = "submit";
  submitBtn.value = "Post"
  // submitBtn.style = "color: white; background-color: black"

  const commentsList = document.createElement("ul");
  commentsList.id = "comments-list";

  document.querySelector("#comments-form").addEventListener("submit", event => {
    if (textArea.value.length <= 0) alert("no comments ?!");
    else if (textArea.value.length < 30){
      const comment = document.createElement("li");

      comment.innerText = document.querySelector("input[type='text']").value

      commentsList.appendChild(comment);
      saveAll()
      document.querySelector("input[type='text']").value = "";
    }
    event.preventDefault();
  });

  commentDiv.append(labelEl, textArea, submitBtn);
  document.querySelector("#comments-form").append(commentDiv, commentsList)
}
