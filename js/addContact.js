// Add Contact
const addButton = document.getElementById('add-contact-btn');
addButton.addEventListener('click', function (e) {
  let modal = '';
  modal = `
      <div class="modal-container">
        <div class="modal">
        <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
          <div class="modal-info-container">
              <form action="#" class="modal-form" enctype="multipart/form-data" method="POST">
              <div>
              <label class="modal-name cap" for="firstname">Name:</label>
              <input class="modal-text" type="text" id="firstname" name="firstname">
              </div>
              <div>
              <label for="surname">Surname:</label>
              <input type="text" id="surname" name="surname">
              </div>
              <div>
              <label for="phone">Phone:</label>
              <input type="text" id="phone" name="phone" placeholder="(108)-805-9730">
              </div>
              <div>
              <label for="address">Address:</label>
              <input type="text" id="address" name="address">
              </div>
              <div>
              <label for="fileToUpload">Image:</label>
              <input type="file" name="fileToUpload" id="fileToUpload">
              </div>
              <div>
              <button class="btn" id="add-contact" type="submit">Add Contact</button>
              </div>
              </form>
          </div>
        </div>
      </div>
      `;

  // Create overlay
  createOverlay(modal);

  // Close Modal
  closeModal();

  // Submit Form
  btnSubmit = document.getElementById('add-contact');
  btnSubmit.addEventListener('click', function (e) {
    e.preventDefault();
    const filePath = document.getElementById('fileToUpload').value;
    const filename = filePath.substring(filePath.lastIndexOf('\\') + 1);
    const newContact = {
      name: document.getElementById('firstname').value,
      surname: document.getElementById('surname').value,
      phone: document.getElementById('phone').value,
      address: document.getElementById('address').value,
      image: '../images/' + filename
    };

    contacts.push(newContact);

    // Close Modal after submit
    closeModal();

    // Load Gallery
    loadGallery();
  });
});