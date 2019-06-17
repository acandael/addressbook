const gallery = document.getElementById('gallery');

gallery.addEventListener('click', function(event) {
  if (event.target.hasAttribute('data-card')) {
    const id = event.target.getAttribute('data-card');
    const contact = contacts[id];

    // Create template literal
    const modal = `
        <div class="modal-container">
          <div class="modal">
            <button type="button" id="modal-close-btn" class="modal-close-btn"><strong data-close="${id}">X</strong></button>
            <div class="modal-info-container">
                <img class="modal-img" src="${
                  contact.image
                }" alt="profile picture">
                <h3 id="name" class="modal-name cap">${contact.name} ${
      contact.surname
    }</h3>
                <hr>
                <p class="modal-text"><a href="tel:${contact.phone}">${
      contact.phone
    }</a></p>
                <p class="modal-text">${contact.address}</p>
            </div>
            <button id="modal-del-btn" class="contactDelete" type="button" data-id="${id}">Delete</button>
          </div>
        </div>
        `;

    // Create Overlay
    createOverlay(modal);
  }

  if (event.target.hasAttribute('data-id')) {
    let remId = event.target.getAttribute('data-id');
    deleteContact(remId);
  }

  if (event.target.hasAttribute('data-close')) {
    event.target.parentNode.style.display = 'none';
    // remove modal
    document.getElementById('gallery').removeChild(overlay);
  }
});
