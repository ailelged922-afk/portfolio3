// ========================================
// MOBILE MENU
// ========================================

const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");


// فتح وإغلاق المنيو
menuToggle.addEventListener("click", function () {
  menu.classList.toggle("active");
});


// ========================================
// CLOSE MENU WHEN CLICKING A LINK
// ========================================

const menuLinks = menu.querySelectorAll("a");

menuLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    menu.classList.remove("active");
  });
});


// ========================================
// VIEW MY WORK BUTTON
// ========================================

const viewWorkButton = document.querySelector(".btn-primary");

viewWorkButton.addEventListener("click", function () {
  document.getElementById("projects").scrollIntoView({
    behavior: "smooth"
  });
});