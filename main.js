const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

function down(e) {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
};

function upOut() {
  isDown = false;
  slider.classList.remove('active');
};

function move(e) {
  if(!isDown) return; 
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 6;
  slider.scrollLeft = scrollLeft - walk; 
};

slider.addEventListener('mousedown', down);
slider.addEventListener('mouseleave', upOut);
slider.addEventListener('mouseup', upOut);
slider.addEventListener('mousemove', move);
