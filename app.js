const menuBtn = document.querySelector('.nav-toggle');

function toggle() {
  menuBtn.classList.toggle('open');
}

// main toggle button
menuBtn.addEventListener('click', () => {
  toggle();
});
