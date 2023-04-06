
export const restoreData = () => {
  const img = localStorage.getItem("currImg");
  const votes = localStorage.getItem("votes");
  const storedComments = JSON.parse(localStorage.getItem('items'));

  document.querySelector('img').src = img;
  document.getElementById('total-votes').innerText = votes;
  storedComments.forEach((comment) => {
    const liElement = document.createElement("li");
    liElement.innerText = `${comment}`;
    document.getElementById('comments-list').appendChild(liElement);
  })
}

export function saveAll() {
  if (localStorage.getItem("currImg")) localStorage.clear();
  localStorage.setItem("currImg", document.querySelector('img').src);
  localStorage.setItem("votes", document.getElementById('total-votes').innerText);
  //Create an array to store the li values
  var toStorage = [];

  document.querySelectorAll('li').forEach(item => {
    toStorage.push(item.innerText);
  })

  localStorage.setItem('items', JSON.stringify(toStorage));
  console.log(localStorage);
}
