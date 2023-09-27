var swiper = new Swiper(".bannerSwiper", {
  // effect: "flip",
  // grabCursor: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper1 = new Swiper(".festival-swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  //   freeMode: true,
  loop: true,
  speed: 15500,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    880: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    // 1024: {
    //   slidesPerView: 3,
    //   spaceBetween: 20,
    // },
    1300: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

$(document).ready(function () {
  $("#menu-modal-btn").click(function () {
    $("#menu-modal-sec").addClass("show-menu");
    $(".modal-content").animate({ right: "0px", opacity: "1" }, 300);
  });
  $("#menu-modal-close-btn").click(function () {
    $("#menu-modal-sec").removeClass("show-menu");
    $(".modal-content").animate({ right: "-300px", opacity: "0" }, 500);
  });

  $("#menu-modal-sec").click(function () {
    $("#menu-modal-sec").removeClass("show-menu");
  });
  // Hide all sub-menus initially
  $(".modal-menu .menu-main-menu-container .sub-menu").hide();

  // Add click event handler to navbar-nav items
  $("li").click(function () {
    // Toggle the visibility of the corresponding sub-menu
    $(this).find(".sub-menu").toggle();
  });

  // var modalBody = document.querySelector(".modal-body");

  // // Add a click event listener to the modal body
  // modalBody.addEventListener("click", function (event) {
  //   // Stop event propagation to prevent it from reaching the modal content
  //   event.stopPropagation();
  // });
});

$(".festival-sec .festival-slider .festival-box").click(function () {
  $(" .festival-click-card:not(:first-of-type)").css("display", "none");
});

$(" .seva-sec").simpleLoadMore({
  item: ".seva-box",
  count: 4,
});

var swiper1 = new Swiper(".videoSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  //   freeMode: true,
  loop: true,
  speed: 30500,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    880: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    // 1024: {
    //   slidesPerView: 3,
    //   spaceBetween: 20,
    // },
    1300: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

var swiperabout = new Swiper(".aboutslider", {
  effect: "cube",
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
});
