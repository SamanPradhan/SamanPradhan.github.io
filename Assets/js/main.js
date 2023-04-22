/* show menu */
let navMenu = document.getElementById("nav-menu");
let navToggle = document.getElementById("nav-toggle");
let navClose = document.getElementById("nav-close");

// menu showing
// validate if the toggle here\
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
    console.log("role");
  });
}

//menu hiding
//validate if the toggle here
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
    console.log("role");
  });
}
/* remove menu mobile */
let navLink = document.querySelectorAll(".nav-link");

let linkhere = () => {
  let navMenu = document.getElementById("nav-menu");
  //when click on nav-link, we remove the show-menu class

  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkhere));

/* add blur to header  */
let blurHeader = () => {
  let header = document.getElementById("header");

  //when scroll is gerater than 50 view port height

  this.scrollY >= 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
};
window.addEventListener("scroll", blurHeader);

/* email js */
let contactForm = document.getElementById("contact-form");
let contactMessage = document.getElementById("contact-message");

let sendEmail = (e) => {
  e.preventDefault();

  //

  emailjs.
};

contactForm.add("submit", sendEmail);
/* show scroll up */

/* scroll sections active link */

/* scroll reveal animation */
