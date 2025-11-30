const button = document.querySelector("button")
button.addEventListener("click", () => {
    alert("Good boy");
});
const elems = document.querySelectorAll('.fade');

function checkElements() {
  elems.forEach(function (el) {
    const rect = el.getBoundingClientRect();

   
    if (rect.top < window.innerHeight - 50) {
      el.classList.add('show');
    }
  });
}


checkElements();


window.addEventListener('scroll', checkElements);