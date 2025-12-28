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

/* ===== CARROSSEL DE FOTOS ===== */

document.querySelectorAll(".photo-area").forEach(area => {
  let index = 0;
  const total = parseInt(area.dataset.total);
  const img = area.querySelector(".car-photo");
  const left = area.querySelector(".arrow.left");
  const right = area.querySelector(".arrow.right");

  function update() {
    img.src = `img/citroen-c3/citroen-c3 ${index + 1}.jpg`;

    left.classList.toggle("disabled", index === 0);
    right.classList.toggle("disabled", index === total - 1);
  }

  left.addEventListener("click", () => {
    if (index > 0) {
      index--;
      update();
    }
  });

  right.addEventListener("click", () => {
    if (index < total - 1) {
      index++;
      update();
    }
  });

  update();
});
