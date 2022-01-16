const closeBtn = document.querySelectorAll(".close");
const addBtn = document.querySelector("#buton1");
const liste = document.querySelector("#list");
const taskInput = document.querySelector("#input");

//close button function
liste.addEventListener("click", (e) => {
  if (e.target.classList.contains("close")) {
    e.target.parentElement.style.display = "none";
  }
});

function addFunc() {
  const newLi = document.createElement("li");
  newLi.innerHTML = `<li id="itemLi">${taskInput.value}<span class="close"></span></li>`;
  liste.appendChild(newLi);
}

function liToggle(e) {
  e.target.classList.toggle("checked");
}

liste.addEventListener("click", liToggle);
addBtn.addEventListener("click", addFunc);
