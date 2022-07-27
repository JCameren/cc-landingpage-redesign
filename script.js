//Getting Elements from DOM
const menuIcon = document.querySelector(".nav_hamburger_menu");
const sideMenu = document.querySelector(".nav_sidemenu");
const sideMenuIcon = document.querySelector(".nav_sidemenu_hamburger");
const sideMenuLinks = document.querySelectorAll(".nav_sidemenu_links ");

//Adding clicks events to main hamburger icon and responsive menu icon
menuIcon.addEventListener("click", () => {
  sideMenu.classList.add("active");
});

sideMenuIcon.addEventListener("click", () => {
  sideMenu.classList.remove("active");
});

//Looping thru all anchor tags in responsive menu and then giving them a click event
sideMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    sideMenu.classList.remove("active");
  });
});
