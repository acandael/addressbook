// Generate Gallery
let card = '';
contacts.forEach(contact => {
  card += `
  <div class="card">
                <div class="card-img-container">
                    <img class="card-img" src="${contact.image}" alt="profile picture">
                </div>
                <div class="card-info-container">
                    <h3 id="name" class="card-name cap">${
    contact.name
    } ${contact.surname}</h3>
                    <p class="card-text">${contact.phone}</p>
                    <p class="card-text cap">${contact.address}</p>
                </div>
            </div>
  `;
  document.getElementById('gallery').innerHTML = card;
});

// Show Modal
const cards = document.getElementsByClassName('card');

// Listen for click event on each card
for (let i = 0; i < cards.length; i += 1) {
  cards[i].addEventListener('click', function (e) {
    let modal = '';
    const contact = contacts[i];

    // Create template literal
    modal = `
      <div class="modal-container">
        <div class="modal">
          <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
          <div class="modal-info-container">
              <img class="modal-img" src="${contact.image}" alt="profile picture">
              <h3 id="name" class="modal-name cap">${contact.name} ${contact.surname}</h3>
              <hr>
              <p class="modal-text"><a href="tel:${contact.phone}">${contact.phone}</a></p>
              <p class="modal-text">${contact.address}</p>
          </div>
        </div>
      </div>
      `;

    // Create overlay
    const overlay = document.createElement('div');
    overlay.setAttribute('id', 'overlay');
    overlay.innerHTML = modal;
    document.getElementById('gallery').appendChild(overlay);

    // Close Modal
    const closeButton = document.getElementById('modal-close-btn');

    closeButton.addEventListener('click', function (e) {
      this.parentNode.style.display = 'none';
      // remove modal
      document.getElementById('gallery').removeChild(overlay);
    })
  })
}
