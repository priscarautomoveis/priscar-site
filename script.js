document.addEventListener("DOMContentLoaded", () => {
  /* ================= MENU SIDEBAR ================= */
  const menuBtn = document.getElementById("menuBtn");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
  });

  overlay.addEventListener("click", () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
  });

  /* ================= CARROSSEL DE FOTOS ================= */
  const carCards = document.querySelectorAll(".car-card");

  carCards.forEach((card) => {
    const photoArea = card.querySelector(".photo-area");
    const photo = photoArea.querySelector(".car-photo");
    const leftBtn = photoArea.querySelector(".arrow.left");
    const rightBtn = photoArea.querySelector(".arrow.right");
    const total = parseInt(photoArea.dataset.total, 10);
    let index = 0;

    const folder = photo.src.includes("citroen-c3") ? "citroen-c3" : "mini-s";

    const updatePhoto = () => {
      photo.src = `img/${folder}/${folder} ${index + 1}.jpg`;
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

  /* ================= LIGHTBOX ================= */
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  const carPhotos = document.querySelectorAll(".car-photo");

  carPhotos.forEach((img) => {
    img.addEventListener("click", (e) => {
      lightbox.style.display = "flex";
      lightboxImg.src = e.target.src;
    });
  });

  // Fecha lightbox ao clicar fora da imagem
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox || e.target === lightboxImg) {
      lightbox.style.display = "none";
    }
  });

  /* ================= RODAPÉ DINÂMICO ================= */
  const yearSpan = document.querySelectorAll(".current-year");
  const currentYear = new Date().getFullYear();
  yearSpan.forEach((span) => (span.textContent = currentYear));

  /* ================= SCROLL SUAVE ================= */
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  /* ================= ANIMAÇÕES EXTRA ================= */
  const cards = document.querySelectorAll(".car-card");
  cards.forEach((card, i) => {
    card.style.animationDelay = `${i * 0.1}s`;
    card.classList.add("animated");
  });
});
