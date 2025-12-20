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
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    

    const size = Math.random() * 4 + 2 + 'px';
    const left = Math.random() * 100 + 'vw';
    const duration = Math.random() * 3 + 2 + 's';
    const opacity = Math.random();

    snowflake.style.width = size;
    snowflake.style.height = size;
    snowflake.style.left = left;
    snowflake.style.opacity = opacity;
    
  
    snowflake.style.animation = `fall ${duration} linear forwards`;
    
    document.body.appendChild(snowflake);


    setTimeout(() => {
        snowflake.remove();
    }, parseFloat(duration) * 1000);
}


setInterval(createSnowflake, 100);