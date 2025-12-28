// MENU LATERAL
const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

menuBtn.addEventListener('click', () => {
  sidebar.classList.add('active');
  overlay.classList.add('active');
});

overlay.addEventListener('click', () => {
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
});

// SETAS DAS FOTOS (Placeholder)
// Futuro código para trocar imagens
const arrows = document.querySelectorAll('.arrow');
arrows.forEach(arrow => {
  arrow.addEventListener('click', () => {
    alert('Aqui vai trocar a foto do carro (placeholder)');
  });
});
