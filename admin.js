const addCarBtn = document.getElementById('addCarBtn');
const previewCars = document.getElementById('previewCars');

addCarBtn.addEventListener('click', () => {
  const name = document.getElementById('carName').value;
  const year = document.getElementById('carYear').value;
  const fuel = document.getElementById('carFuel').value;
  const km = document.getElementById('carKm').value;
  const price = document.getElementById('carPrice').value;
  const imageInput = document.getElementById('carImage');

  if (!name || !year || !fuel || !km || !price || !imageInput.files[0]) {
    alert('Preenche todos os campos e escolhe uma foto!');
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    const imgSrc = e.target.result;

    const carHTML = `
      <section class="car-card">
        <div class="photo-area">
          <img src="${imgSrc}" alt="${name}" style="border-radius:15px;">
        </div>
        <div class="car-info">
          <h3>${name}</h3>
          <p>Ano: ${year}</p>
          <p>Combustível: ${fuel}</p>
          <p>Quilómetros: ${km}</p>
          <p class="price">${price} €</p>
        </div>
        <div class="actions">
          <a class="btn whatsapp" href="https://wa.me/351936707997" target="_blank">WhatsApp</a>
          <a class="btn call" href="tel:+351936707997">Ligar</a>
        </div>
      </section>
    `;

    previewCars.innerHTML += carHTML;
  }

  reader.readAsDataURL(imageInput.files[0]);
});
