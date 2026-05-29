const navbar = document.getElementById('navbar');
const heroImages = document.querySelectorAll('.hero-image img');

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  heroImages.forEach((image) => {
    const rect = image.getBoundingClientRect();
    if (rect.top < 0 && rect.bottom > 0) {
      image.classList.add('past');
    } else {
      image.classList.remove('past');
    }
  });
});