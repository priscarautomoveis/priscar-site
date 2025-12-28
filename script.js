const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const moreBtn = document.getElementById('moreBtn');

menuBtn.addEventListener('click', () => {
  sidebar.classList.add('active');
  overlay.classList.add('active');
});
overlay.addEventListener('click', () => {
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
});

// MENU LATERAL MAIS (3 PONTOS)
let moreOpen = false;
moreBtn.addEventListener('click', () => {
  moreOpen = !moreOpen;
  overlay.classList.toggle('active', moreOpen);
  sidebar.classList.toggle('active', moreOpen);
  if(moreOpen) {
    moreBtn.innerHTML = '&times;'; // muda para X
  } else {
    moreBtn.innerHTML = '&#8942;'; // volta para 3 pontos
  }
});

// SETAS DAS FOTOS
document.querySelectorAll('.car-card').forEach(card => {
  const left = card.querySelector('.arrow.left');
  const right = card.querySelector('.arrow.right');
  const photo = card.querySelector('.car-photo') || card.querySelector('.photo-placeholder');

  let index = 0;
  const photos = [photo.src]; // substituir pelas fotos reais depois

  const updateArrows = () => {
    if(left) left.classList.toggle('disabled', index===0);
    if(right) right.classList.toggle('disabled', index===photos.length-1);
    if(photo.tagName === 'IMG') photo.src = photos[index];
  };

  if(left) left.addEventListener('click', () => { if(index>0){ index--; updateArrows(); } });
  if(right) right.addEventListener('click', () => { if(index<photos.length-1){ index++; updateArrows(); } });

  updateArrows();
});
