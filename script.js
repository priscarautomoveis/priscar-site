document.addEventListener("DOMContentLoaded", () => {

  /* ================= MENU / SIDEBAR ================= */
  const menuBtn = document.getElementById("menuBtn");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  if (menuBtn && sidebar && overlay) {
    menuBtn.addEventListener("click", () => {
      sidebar.classList.toggle("active");
      overlay.classList.toggle("active");
    });

    overlay.addEventListener("click", () => {
      sidebar.classList.remove("active");
      overlay.classList.remove("active");
    });
  }

  /* ================= CARROSSEL DE FOTOS ================= */
  const carCards = document.querySelectorAll(".car-card");

  carCards.forEach((card) => {
    const photoArea = card.querySelector(".photo-area");
    if (!photoArea) return;

    const photo = photoArea.querySelector(".car-photo");
    const leftBtn = photoArea.querySelector(".arrow.left");
    const rightBtn = photoArea.querySelector(".arrow.right");

    let index = 0;
    const total = parseInt(photoArea.dataset.total, 10);

    // Detecta automaticamente a pasta do carro
    const srcParts = photo.src.split("/");
    const folder = srcParts[srcParts.length - 2];

    const updatePhoto = () => {
      photo.src = `img/${folder}/${folder} ${index + 1}.jpg`;

      if (leftBtn) leftBtn.classList.toggle("disabled", index === 0);
      if (rightBtn) rightBtn.classList.toggle("disabled", index === total - 1);
    };

    if (leftBtn) {
      leftBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (index > 0) {
          index--;
          updatePhoto();
        }
      });
    }

    if (rightBtn) {
      rightBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (index < total - 1) {
          index++;
          updatePhoto();
        }
      });
    }

    updatePhoto();
  });

  /* ================= LIGHTBOX ================= */
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  if (lightbox && lightboxImg) {

    document.querySelectorAll(".car-photo").forEach((img) => {
      img.addEventListener("click", (e) => {
        e.stopPropagation();
        lightboxImg.src = img.src;
        lightbox.style.display = "flex";
        document.body.style.overflow = "hidden";
      });
    });

    // Fecha ao clicar fora da imagem
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox || e.target === lightboxImg) {
        closeLightbox();
      }
    });

    // Fecha com ESC
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeLightbox();
      }
    });

    function closeLightbox() {
      lightbox.style.display = "none";
      lightboxImg.src = "";
      document.body.style.overflow = "";
    }
  }

  /* ================= MELHORIAS DE PERFORMANCE ================= */
  // Evita cliques rápidos quebrarem animações
  let isAnimating = false;

  document.querySelectorAll(".arrow").forEach(btn => {
    btn.addEventListener("click", () => {
      if (isAnimating) return;
      isAnimating = true;
      setTimeout(() => isAnimating = false, 250);
    });
  });

});
