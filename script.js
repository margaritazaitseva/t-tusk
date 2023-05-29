let modal = document.querySelector(".modal");
let btn = document.getElementById("btn");
let span = document.querySelector(".close");

btn.onclick = function() {
  modal.style.display = "flex";
  document.body.style.overflowY = "hidden";
}
span.onclick = function() {
  modal.style.display = "none";
  document.body.style.overflowY = "scroll";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.style.overflowY = "scroll";
  }
}

