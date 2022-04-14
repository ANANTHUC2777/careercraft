/*!
 * CAREERCRAFT CUSTOM SCRIPT
 * 
 *   WRITTEN ON:9 APRIL 2022
 *   VERSION : 1.0

*/
$(function () {
  // Scroll to Top
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 50) {
      $("#return-to-top").fadeIn(200);
    } else {
      $("#return-to-top").fadeOut(200);
    }
  });
  $("#return-to-top").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      100
    );
  });
  //Click event handler for nav-items
  $(".nav-item").on("click", function () {
    $(".nav-item").removeClass("active--state");
    $(this).addClass("active--state");
  });
  //smooth scroll
  $('.nav-item a[href^="#"]').on("click", function (e) {
    e.preventDefault();
    var target = this.hash;
    var $target = $(target);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top - 50,
        },
        100,
        "swing",
        function () {}
      );
  });
});

//Hamburger click
function myFunction(x) {
  x.classList.toggle("change");
}

//Wow js
new WOW().init();

//Icon box read more

const wrap = document.querySelectorAll(".iconBox");
wrap.forEach(function (currentEl) {
  const btns = currentEl.querySelector(".iconBox-txts__readMore");
  btns.addEventListener("click", function () {
    wrap.forEach(function (item) {
      if (item !== currentEl) {
        item.classList.remove("height--232");
        item.lastElementChild.querySelector("p").classList.remove("whitespace--normal");
        item.lastElementChild.querySelector(".iconBox-txts__readMore").classList.remove("d-none");
        item.lastElementChild.querySelector(".iconBox-txts__readless").classList.add("d-none");
      }
    });

    currentEl.classList.toggle("height--232");
    currentEl.lastElementChild.querySelector("p").classList.toggle("whitespace--normal");
    btns.classList.add("d-none");
    currentEl.lastElementChild.querySelector(".iconBox-txts__readless").classList.remove("d-none");
  });
});

//Icon box read less
const readless__btns = document.querySelectorAll(".iconBox-txts__readless");
readless__btns.forEach((currBtn) => {
  currBtn.addEventListener("click", () => {
    var currEl__parent = currBtn.parentElement;
    currEl__parent.firstElementChild.classList.remove("whitespace--normal");
    currEl__parent.parentElement.classList.remove("height--232");
    currBtn.classList.add("d-none");
    currBtn.parentElement.querySelector(".iconBox-txts__readMore").classList.remove("d-none");
  });
});
