$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $(".navbar").toggleClass("nav-toggle");
  });

  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $(".navbar").removeClass("nav-toggle");

    if (window.scrollY > 60) {
      document.querySelector("#scroll-top").classList.add("active");
    } else {
      document.querySelector("#scroll-top").classList.remove("active");
    }

    // scroll spy
    $("section").each(function () {
      let height = $(this).height();
      let offset = $(this).offset().top - 200;
      let top = $(window).scrollTop();
      let id = $(this).attr("id");

      if (top > offset && top < offset + height) {
        $(".navbar ul li a").removeClass("active");
        $(".navbar").find(`[href="#${id}"]`).addClass("active");
      }
    });
  });

  // smooth scrolling
  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      500,
      "linear"
    );
  });

  // <!-- emailjs to mail contact form data -->
  // $("#contact-form").submit(function (event) {
  //     emailjs.init("user_TTDmetQLYgWCLzHTDgqxm");

  //     emailjs.sendForm('contact_service', 'template_contact', '#contact-form')
  //         .then(function (response) {
  //             console.log('SUCCESS!', response.status, response.text);
  //             document.getElementById("contact-form").reset();
  //             alert("Form Submitted Successfully");
  //         }, function (error) {
  //             console.log('FAILED...', error);
  //             alert("Form Submission Failed! Try Again");
  //         });
  //     event.preventDefault();
  // });
  // <!-- emailjs to mail contact form data -->
});
