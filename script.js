// Slider de fotos dos carros sem mexer no resto
document.querySelectorAll(".car-card").forEach(card => {
  const slider = card.querySelector(".photo-slider");
  if (!slider) return; // ignora carros sem fotos

  const imgs = slider.querySelectorAll("img");
  const left = card.querySelector(".arrow.left");
  const right = card.querySelector(".arrow.right");
  let index = 0;

  // Inicializa o slider
  const update = () => {
    imgs.forEach((img, i) => {
      img.style.display = i === index ? "block" : "none";
      img.style.borderRadius = "20px"; // cantos arredondados
    });
    left.style.visibility = index === 0 ? "hidden" : "visible";
    right.style.visibility = index === imgs.length - 1 ? "hidden" : "visible";
  }

  update();

  left.addEventListener("click", () => {
    if (index > 0) index--;
    update();
  });

  right.addEventListener("click", () => {
    if (index < imgs.length - 1) index++;
    update();
  });
});
