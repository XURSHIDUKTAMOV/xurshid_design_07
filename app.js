const haburger_icon = document.querySelector('#nav-bar .nav-bar .nav-list .hamburger')
const nav_list = document.querySelector('#nav-bar .nav-bar .nav-list');

hamburger_icon.addEventlistener('click', () => {
  nav_list.classList.toggle('open');
  hamburger_icon.classList.toggle('active');
});