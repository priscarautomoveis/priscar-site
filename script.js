document.querySelectorAll(".car-card").forEach(card => {
  const slider = card.querySelector(".photo-slider");
  const imgs = slider.querySelectorAll("img");
  const left = card.querySelector(".arrow.left");
  const right = card.querySelector(".arrow.right");
  let index = 0;

  const update = () => {
    imgs.forEach((img, i) => img.classList.toggle("active", i === index));
    left.classList.toggle("disabled", index === 0);
    right.classList.toggle("disabled", index === imgs.length - 1);
  }

  left.addEventListener("click", () => {
    if (index > 0) index--;
    update();
  });

  right.addEventListener("click", () => {
    if (index < imgs.length - 1) index++;
    update();
  });
});
