// Generate Gallery
const loadGallery = () => {
  let card = '';
  contacts.forEach((contact, index) => {
    card += `
  <div data-card="${index}" class="card">
                <div class="card-img-container">
                    <img class="card-img" src="${
                      contact.image
                    }" alt="profile picture">
                </div>
                <div class="card-info-container">
                    <h3 id="name" class="card-name cap">${contact.name} ${
      contact.surname
    }</h3>
                    <p class="card-text">${contact.phone}</p>
                    <p class="card-text cap">${contact.address}</p>
                </div>
            </div>
  `;
    document.getElementById('gallery').innerHTML = card;
  });
};
window.onload = loadGallery();
