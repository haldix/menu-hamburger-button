const menuBtn = document.querySelector('.nav-toggle');

function toggle() {
  menuBtn.classList.toggle('open');
  // more code to show/hide menu
}

// main toggle button
menuBtn.addEventListener('click', () => {
  toggle();
});
