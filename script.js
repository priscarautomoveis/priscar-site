const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

// Abrir menu ao clicar
menuBtn.addEventListener("click", () => {
  sidebar.classList.add("active");
  overlay.classList.add("active");
});

// Fechar menu ao clicar fora
overlay.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
});

// Swipe mobile
let startX = 0, isDragging = false;
document.addEventListener("touchstart", e => { startX = e.touches[0].clientX; isDragging = true; });
document.addEventListener("touchmove", e => {
  if(!isDragging) return;
  let diff = e.touches[0].clientX - startX;
  if(diff>100 && !sidebar.classList.contains("active")) { sidebar.classList.add("active"); overlay.classList.add("active"); isDragging=false; }
  if(diff<-100 && sidebar.classList.contains("active")) { sidebar.classList.remove("active"); overlay.classList.remove("active"); isDragging=false; }
});
document.addEventListener("touchend", () => { isDragging=false; });
