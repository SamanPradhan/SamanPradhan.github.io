/* show menu */
let navMenu = document.getElementById("nav-menu");
let navToggle = document.getElementById("nav-toggle");
let navClose = document.getElementById("nav-close");
console.log(navMenu);
console.log(navToggle);
console.log(navClose);
// menu showing
// validate if the toggle here

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
    // let c = document.querySelector(".show-menu");
    // c.style.right = "-100%";
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

  emailjs
    .sendForm(
      "service_dnlxkel",
      "template_eegglwc",
      "#contact-form",
      "s3Vn3KSzGFdnKgH7G"
    )
    .then(
      () => {
        //show sent msg
        contactMessage.textContent = "Message sent successfully ✅";

        //remove msg after few time
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 6000);

        //remove the input text

        contactForm.reset();
      },
      () => {
        //show error msg
        contactMessage.textContent = "Message not sent(service error)❌";
        //remove msg after few time
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 6000);
      }
    );
};

contactForm.addEventListener("submit", sendEmail);

/* show scroll up */

const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/* scroll sections active link */

// const sections = document.querySelectorAll("section[id]");

// const scrollActive = () => {
//   const scrollY = window.pageYOffset;

//   sections.forEach((current) => {
//     const sectionHeight = current.offsetHeight,
//       sectionTop = current.offsetTop - 58,
//       sectionId = current.getAttribute("id"),
//       sectionsClass = document.querySelector(
//         ".nav__menu a[href*=" + sectionId + "]"
//       );

//     if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//       sectionsClass.classList.add("active-link");
//     } else {
//       sectionsClass.classList.remove("active-link");
//     }
//   });
// };
// window.addEventListener("scroll", scrollActive);

/* scroll reveal animation */
