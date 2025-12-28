// Menu toggle
const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  overlay.classList.toggle("active");
  // animação do menu
  menuToggle.classList.toggle("open");
});

overlay.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
  menuToggle.classList.remove("open");
});

// Slider de fotos dos carros
document.querySelectorAll(".car-card").forEach(card => {
  const imgs = card.querySelectorAll(".photo-slider img");
  if (!imgs.length) return;

  let index = 0;
  const left = card.querySelector(".arrow.left");
  const right = card.querySelector(".arrow.right");

  const update = () => {
    imgs.forEach((img,i)=>img.style.display=i===index?"block":"none");
    left.style.visibility=index===0?"hidden":"visible";
    right.style.visibility=index===imgs.length-1?"hidden":"visible";
  };

  update();

  left.addEventListener("click",()=>{
    if(index>0){ index--; update(); }
  });

  right.addEventListener("click",()=>{
    if(index<imgs.length-1){ index++; update(); }
  });
});
