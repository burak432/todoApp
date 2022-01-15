const closeBtn = document.querySelectorAll(".close");
const addBtn = document.querySelector("#buton1");
const liste = document.querySelector("#list");

//close button function
liste.addEventListener("click", (e) => {
  if (e.target.classList.contains("close")) {
    e.target.parentElement.style.display = "none";
  }
});
