// Show Modal
const cards = document.getElementsByClassName('card');

const createModal = index => {
  cards[index].addEventListener('click', function(e) {
    let modal = '';
    const contact = contacts[index];
    console.log(contact);
    // Create template literal
    modal = `
        <div class="modal-container">
          <div class="modal">
            <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
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
            <button id="modal-del-btn" class="contactDelete" type="button" data-id="${index}">Delete</button>
          </div>
        </div>
        `;

    // Create Overlay
    createOverlay(modal);

    // Close Modal
    closeModal();

    // Delete Contact
    const deleteButton = document.getElementById('modal-del-btn');

    deleteButton.addEventListener('click', function(e) {
      let remId = e.target.getAttribute('data-id');
      contacts.splice(index, 1);
      document.getElementById('gallery').removeChild(overlay);
      loadGallery();
    });
  });
};
