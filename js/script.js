const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

// Abrir menu ao clicar no botão
menuBtn.addEventListener("click", () => {
  sidebar.classList.add("active");
  overlay.classList.add("active");
});

// Fechar menu ao clicar fora
overlay.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
});

// Swipe/arrastar para abrir/fechar (mobile)
let startX = 0;
let isDragging = false;

document.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
  isDragging = true;
});

document.addEventListener("touchmove", e => {
  if (!isDragging) return;
  const touchX = e.touches[0].clientX;
  const diff = touchX - startX;

  // Arrastar da esquerda para abrir
  if (diff > 100 && !sidebar.classList.contains("active")) {
    sidebar.classList.add("active");
    overlay.classList.add("active");
    isDragging = false;
  }

  // Arrastar da direita para fechar
  if (diff < -100 && sidebar.classList.contains("active")) {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
    isDragging = false;
  }
});

document.addEventListener("touchend", () => {
  isDragging = false;
});
