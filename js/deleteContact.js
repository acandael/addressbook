// Delete Contact
const deleteContact = remId => {
  contacts.splice(remId, 1);
  document.getElementById('gallery').removeChild(overlay);
  loadGallery();
};
