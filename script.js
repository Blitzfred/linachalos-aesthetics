function imageSlides() {
  const slides = document.querySelectorAll('.slide');
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('opacity-100');
      slide.classList.add('opacity-0');
      if (i === index) slide.classList.add('opacity-100');
    });
  }

  setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
  }, 4500); // alle 4 Sekunden wechseln
}

function initNavbar() {

  const navbar = document.getElementById("navbar");
  const mobileMenu = document.getElementById("mobile-menu");

  window.addEventListener("scroll", () => {
    // Browserfenster an y -Achse gescrollt, innerheight: aktuelles Browserfenster höhe, 80% (indiesem fall der aktuellen browser höhe) 
    if (window.scrollY > window.innerHeight * 0.8) {
      navbar.classList.add(
        "bg-amber-950/80"
      );
      mobileMenu.classList.add(
        "bg-amber-950/80"
      );


    } else {
      navbar.classList.remove(
        "bg-amber-950/80"
      );
      mobileMenu.classList.remove(
        "bg-amber-950/80"
      );
    }
  });
}

function showBurgerMenu() {
  /*const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  menuBtn.addEventListener("click", () => {

    mobileMenu.classList.toggle("hidden");
  });
  // Blendet autimatisch untermenüs aus wenn das Bild breiter wird
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) { // md-Breakpoint
      mobileMenu.classList.add("hidden");
    }
  });*/

  const menu = document.querySelector('#mobile-menu');
  const toggleBtn = document.querySelector('#menu-btn');

  // 1. Öffnen/Schließen per Button
  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Verhindert, dass der Klick sofort wieder das "Window-Event" unten auslöst
    menu.classList.toggle('is-open');
  });

  // 2. Schließen beim Klick auf die Seite (außerhalb)
  window.addEventListener('click', (e) => {
    // Wenn das Menü offen ist UND der Klick NICHT im Menü gelandet ist
    if (menu.classList.contains('is-open') && !menu.contains(e.target)) {
      menu.classList.remove('is-open');
    }
  });

  window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    menu.classList.remove('is-open');
  }
});
}