document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  // Toggle sidebar
  menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
  overlay.addEventListener("click", () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
  });

  // Carrossel de fotos dos carros
  const carCards = document.querySelectorAll(".car-card");

  carCards.forEach((card) => {
    const photoArea = card.querySelector(".photo-area");
    const photo = photoArea.querySelector(".car-photo");
    const leftBtn = photoArea.querySelector(".arrow.left");
    const rightBtn = photoArea.querySelector(".arrow.right");
    const total = parseInt(photoArea.dataset.total, 10);
    let index = 0;

    const updatePhoto = () => {
      // Atualiza o src da imagem
      const folder = photo.src.includes("citroen-c3") ? "citroen-c3" : "mini-s";
      photo.src = `img/${folder}/${folder} ${index + 1}.jpg`;

      // Atualiza botões
      leftBtn.classList.toggle("disabled", index === 0);
      rightBtn.classList.toggle("disabled", index === total - 1);
    };

    leftBtn.addEventListener("click", () => {
      if (index > 0) index--;
      updatePhoto();
    });

    rightBtn.addEventListener("click", () => {
      if (index < total - 1) index++;
      updatePhoto();
    });
  });
});
