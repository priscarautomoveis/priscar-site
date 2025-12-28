document.querySelectorAll(".car-card").forEach(card => {
  const imgs = card.querySelectorAll(".photo-placeholder img");
  if (!imgs.length) return;

  let index = 0;

  const left = card.querySelector(".arrow.left");
  const right = card.querySelector(".arrow.right");

  const update = () => {
    imgs.forEach((img, i) => {
      img.style.display = i === index ? "block" : "none";
      img.style.width = "100%";
      img.style.height = "250px"; // ajusta ao card
      img.style.objectFit = "cover";
      img.style.borderRadius = "20px";
      img.style.transition = "all 0.5s ease";
    });

    left.style.visibility = index === 0 ? "hidden" : "visible";
    right.style.visibility = index === imgs.length - 1 ? "hidden" : "visible";
  };

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
