const btn = document.querySelector(".btn")
btn.addEventListener("click", () => {
    alert("Good ");
});

const elems = document.querySelectorAll('.fade');

function checkElements() {
  elems.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.classList.add('show');
    }
  });
}

checkElements(); 
window.addEventListener('scroll', checkElements);



checkElements();
window.addEventListener('scroll', checkElements);

const botn = document.querySelector(".botn")
botn.addEventListener("click", () => {
    alert("Ну вот молодца");
});

const modal = document.getElementById("modal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");

openBtn.addEventListener("click", () => {
    modal.classList.add("show");
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
});
