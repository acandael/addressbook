var options = {
  shouldSort: false,
  threshold: 0.2,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 2,
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
