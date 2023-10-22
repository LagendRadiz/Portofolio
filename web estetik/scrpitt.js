const icon = document.getElementById('icon');
const sidebar = document.getElementById('slidebar');

icon.addEventListener('click', function () {
  sidebar.classList.toggle('slide');
});



const nav = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    nav.style.backgroundColor = 'white';
    nav.style.color = 'black';
  } else {
    nav.style.backgroundColor = 'transparent';
    nav.style.color = 'white';
  }
});
