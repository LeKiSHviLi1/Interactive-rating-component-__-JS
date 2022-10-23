var rating = sessionStorage.getItem('rating');

document.getElementById('paragraph').innerHTML =
  'You selected ' + rating + ' out of 5';
