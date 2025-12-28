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

// SETAS DAS FOTOS
document.querySelectorAll('.car-card').forEach(card => {
  const left = card.querySelector('.arrow.left');
  const right = card.querySelector('.arrow.right');
  const photo = card.querySelector('.car-photo');

  let index = 0;
  const photos = [photo.src]; // colocar todas fotos reais depois

  const updateArrows = () => {
    left.classList.toggle('disabled', index === 0);
    right.classList.toggle('disabled', index === photos.length - 1);
    photo.src = photos[index];
  };

  left.addEventListener('click', () => {
    if(index>0){ index--; updateArrows(); }
  });
  right.addEventListener('click', () => {
    if(index<photos.length-1){ index++; updateArrows(); }
  });

  updateArrows();
});
