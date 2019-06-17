const options = {
  shouldSort: false,
  threshold: 0.2,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 2,
  keys: ['name', 'surname']
};

const fuse = new Fuse(contacts, options);
const searchSubmit = document.getElementById('search-submit');
const searchInput = document.getElementById('search-input');

const search = () => {
  const input = document.getElementById('search-input').value;
  contacts = fuse.search(input);
};

searchInput.addEventListener('keypress', function(e) {
  search();
  loadGallery();
});

searchSubmit.addEventListener('click', function(e) {
  search();
  loadGallery();
});
