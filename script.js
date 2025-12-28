document.querySelectorAll(".car-card").forEach(card => {
  const slider = card.querySelector(".photo-slider");
  if (!slider) return; // ignora cards sem fotos

  const imgs = slider.querySelectorAll("img");
  const left = card.querySelector(".arrow.left");
  const right = card.querySelector(".arrow.right");
  let index = 0;

  // Configura inicial
  const update = () => {
    imgs.forEach((img, i) => {
      img.style.display = i === index ? "block" : "none";
      img.style.objectFit = "cover";   // ajusta imagem dentro do card
      img.style.width = "100%";
      img.style.height = "300px";       // altura fixa profissional
      img.style.borderRadius = "20px";  // cantos arredondados
      img.style.transition = "all 0.5s ease"; // animação suave
    });

    left.style.visibility = index === 0 ? "hidden" : "visible";
    right.style.visibility = index === imgs.length - 1 ? "hidden" : "visible";
  };

  update();

  left.addEventListener("click", () => {
    if (index > 0) {
      index--;
      update();
    }
  });

  right.addEventListener("click", () => {
    if (index < imgs.length - 1) {
      index++;
      update();
    }
  });
});
