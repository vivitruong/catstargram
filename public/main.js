import { saveAll } from "./restore.js";

export const createMainContent = () => {
  // Create h1
  const h1 = document.createElement("h1");
//   h1.innerText = "Catsagram";

  // Create img
  const img = document.createElement("img");
  img.id = "kitten-image";

  const container = document.querySelector(".container");
  const imageBox = document.querySelector(".image-box")
  container.prepend(h1);
  imageBox.appendChild(img);

  if (!localStorage.getItem("currImg")) fetchImage();
};

let score = 0;

export const fetchNew = () => {
  // Add a button that requests and displays a new cat image, replacing the original image
  const replaceBtn = document.createElement("button");
  replaceBtn.id = "replace-btn";
  replaceBtn.innerText = "New Image";

  replaceBtn.addEventListener("click", () => {
    fetchImage();
    document.querySelector("#total-votes").innerText = 0;
    document.querySelector("input[type='text']").value = "";
    const list = document.querySelector("ul");
    while (list.firstChild) {
      list.firstChild.remove();
    }
  });

  document.querySelector("#user-options").append(replaceBtn);

}

export const createVoteElements = () => {
    const voteword = document.createElement("h6");
    voteword.innerText = "Click to vote"
  const voteOptions = document.createElement("article");
  voteOptions.id = "user-options";
  document.querySelector(".image-box").append(voteOptions)

  const upVote = document.createElement("div");
  upVote.id = "upvote";
  upVote.className = "votes up-arrow";

  const downVote = document.createElement("div");
  downVote.id = "downvote";
  downVote.className = "votes down-arrow"

  const votesDiv = document.createElement("div");
  votesDiv.id = "total-votes";
  votesDiv.className = "votes votes-total";
  votesDiv.innerText = score;

  upVote.addEventListener("click", () => {
    votesDiv.innerText = Number(votesDiv.innerText) + 1;
    saveAll()
  });
  downVote.addEventListener("click", () => {
    votesDiv.innerText = Number(votesDiv.innerText) - 1;
    saveAll()
  })



  voteOptions.append(voteword, upVote, votesDiv, downVote);

}

const fetchImage = async () => {
  // Fetch image from API and set img url
  try {
    const kittenResponse = await fetch("https://api.thecatapi.com/v1/images/search?size=small");
    // Converts to JSON
    const kittenData = await kittenResponse.json();
    // console.log(kittenData);
    const kittenImg = document.querySelector("img");
    kittenImg.src = kittenData[0].url;
    saveAll()
  } catch (e) {
    console.log("Failed to fetch image", e);
  }

};
