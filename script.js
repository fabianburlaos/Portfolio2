function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener('DOMContentLoaded', function() {
  var options = {
      strings: ["Industrial Engineer", "Designer", "Developer"],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 2000,
      loop: true
  };

  var typed = new Typed("#dynamic-text", options);
});


