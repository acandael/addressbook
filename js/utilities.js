'use strict';

// Create overlay
const createOverlay = modal => {
  const overlay = document.createElement('div');
  overlay.setAttribute('id', 'overlay');
  overlay.innerHTML = modal;
  document.getElementById('gallery').appendChild(overlay);
};

// Close Modal
const closeModal = () => {
  const closeButton = document.getElementById('modal-close-btn');

  closeButton.addEventListener('click', function(e) {
    this.parentNode.style.display = 'none';
    // remove modal
    document.getElementById('gallery').removeChild(overlay);
  });
};
