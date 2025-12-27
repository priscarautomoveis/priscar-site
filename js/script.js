// MENU
const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

menuBtn.onclick = () => {
  sidebar.classList.add("active");
  overlay.classList.add("active");
};

overlay.onclick = () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
};

// SLIDER DE FOTOS
document.querySelectorAll(".car-card").forEach(card => {
  let photos = card.querySelectorAll(".car-photo");
  let index = 0;

  const left = card.querySelector(".arrow.left");
  const right = card.querySelector(".arrow.right");

  function update() {
    photos.forEach(p => p.classList.remove("active"));
    photos[index].classList.add("active");

    if (left) left.style.display = index === 0 ? "none" : "flex";
    if (right) right.style.display = index === photos.length - 1 ? "none" : "flex";
  }

  if (left) left.onclick = () => { index--; update(); };
  if (right) right.onclick = () => { index++; update(); };

  update();
});
