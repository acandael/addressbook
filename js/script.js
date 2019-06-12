// Generate Gallery
const loadGallery = () => {
  let card = '';
  contacts.forEach(contact => {
    card += `
  <div class="card">
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

// Show Modal
const cards = document.getElementsByClassName('card');

// Listen for click event on each card
for (let i = 0; i < cards.length; i += 1) {
  cards[i].addEventListener('click', function(e) {
    let modal = '';
    const contact = contacts[i];

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

    closeButton.addEventListener('click', function(e) {
      this.parentNode.style.display = 'none';
      // remove modal
      document.getElementById('gallery').removeChild(overlay);
    });
  });
}

// Add Contact
const addButton = document.getElementById('add-contact-btn');
addButton.addEventListener('click', function(e) {
  let modal = '';
  modal = `
      <div class="modal-container">
        <div class="modal">
        <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
          <div class="modal-info-container">
              <form action="#" class="modal-form" enctype="multipart/form-data" method="post">
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
  const overlay = document.createElement('div');
  overlay.setAttribute('id', 'overlay');
  overlay.innerHTML = modal;
  document.getElementById('gallery').appendChild(overlay);

  // Close Modal
  const closeButton = document.getElementById('modal-close-btn');
  closeButton.addEventListener('click', function(e) {
    this.parentNode.style.display = 'none';
    // remove modal
    document.getElementById('gallery').removeChild(overlay);
  });

  // Submit Form
  btnSubmit = document.getElementById('add-contact');
  btnSubmit.addEventListener('click', function(e) {
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
    this.parentNode.style.display = 'none';
    document.getElementById('gallery').removeChild(overlay);

    // Load Gallery
    loadGallery();
  });
});

var options = {
  shouldSort: false,
  threshold: 0.6,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: ['name', 'surname']
};
var fuse = new Fuse(contacts, options);

const searchSubmit = document.getElementById('search-submit');
const searchInput = document.getElementById('search-input');
let input = '';

searchInput.addEventListener('keypress', function(e) {
  input = document.getElementById('search-input').value;
  contacts = fuse.search(input);
  loadGallery();
});

searchSubmit.addEventListener('click', function(e) {
  input = document.getElementById('search-input').value;
  contacts = fuse.search(input);
  loadGallery();
});
