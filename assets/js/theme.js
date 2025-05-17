(function ($) {
  "use strict";

  //Header Search
  if ($(".search-box-outer").length) {
    $(".search-box-outer").on("click", function () {
      $("body").addClass("search-active");
    });
    $(".close-search").on("click", function () {
      $("body").removeClass("search-active");
    });
  }

  // Mobile Menu
  $(".mobile-menu nav").meanmenu({
    meanScreenWidth: "991",
    meanMenuContainer: ".mobile-menu",
    meanMenuOpen: "<span></span> <span></span> <span></span>",
    onePage: false,
  });

  // sticky
  var wind = $(window);
  var sticky = $("#sticky-header");
  wind.on("scroll", function () {
    var scroll = wind.scrollTop();
    if (scroll < 100) {
      sticky.removeClass("sticky");
    } else {
      sticky.addClass("sticky");
    }
  });

  // Loder  //
  $(function () {
    $("body").addClass("loaded");
  });

  // Sidebar

  ("use strict");
  jQuery(document).ready(function (o) {
    0 < o(".offset-side-bar").length &&
      o(".offset-side-bar").on("click", function (e) {
        e.preventDefault(),
          e.stopPropagation(),
          o(".cart-group").addClass("isActive");
      }),
      0 < o(".close-side-widget").length &&
        o(".close-side-widget").on("click", function (e) {
          e.preventDefault(), o(".cart-group").removeClass("isActive");
        }),
      0 < o(".navSidebar-button").length &&
        o(".navSidebar-button").on("click", function (e) {
          e.preventDefault(),
            e.stopPropagation(),
            o(".info-group").addClass("isActive");
        }),
      0 < o(".close-side-widget").length &&
        o(".close-side-widget").on("click", function (e) {
          e.preventDefault(), o(".info-group").removeClass("isActive");
        }),
      o("body").on("click", function (e) {
        o(".info-group").removeClass("isActive"),
          o(".cart-group").removeClass("isActive");
      }),
      o(".xs-sidebar-widget").on("click", function (e) {
        e.stopPropagation();
      }),
      0 < o(".xs-modal-popup").length &&
        o(".xs-modal-popup").magnificPopup({
          type: "inline",
          fixedContentPos: !2,
          fixedBgPos: !0,
          overflowY: "auto",
          closeBtnInside: !2,
          callbacks: {
            beforeOpen: function () {
              this.st.mainClass = "my-mfp-slide-bottom xs-promo-popup";
            },
          },
        });
  });

  ///////////////////////////////
  $(document).ready(function () {
    $(".odometer-wrapper").appear(function () {
      let count = $(this).attr("data-count");
      let odometer = $(this).closest(".odometer-wrapper").find(".odometer");

      setTimeout(function () {
        odometer.html(count);
      }, 500);
    });
  });

  // //Curser Pointer

  // var curser = document.querySelector(".curser");
  // var curser2 = document.querySelector(".curser2");

  // document.addEventListener("mousemove", function (e) {
  //   curser.style.cssText = curser2.style.cssText =
  //     "left: " + e.clientX + "px; top: " + e.clientY + "px;";
  // });

  // Swiper Active
  var swiper = new Swiper(".banner_slider", {
    // effect: "cards",
    grabCursor: true,
    autoplay: {
      speed: 2000,
      delay: 3000,
      pauseOnMouseEnter: true,
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    pagination: {
      el: ".slider-dots",
      clickable: true,
    },
  });

  // Service List

  var swiper = new Swiper(".service_list", {
    slidesPerView: 4,
    centeredSlides: false,
    slidesPerGroupSkip: 4,
    grabCursor: true,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      speed: 2500,
      delay: 3000,
    },
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 1,
      },
      600: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 4,
      },

      1920: {
        slidesPerView: 4,
      },
    },
    navigation: {
      nextEl: ".swiper-btn-next",
      prevEl: ".swiper-btn-prev",
    },
  });

  // Testimonial
  var swiper = new Swiper(".testi_list", {
    slidesPerView: 3,
    centeredSlides: false,
    slidesPerGroupSkip: 3,
    grabCursor: true,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      speed: 2500,
      delay: 3000,
    },
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 1,
      },
      600: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3,
      },

      1920: {
        slidesPerView: 3,
      },
    },
    navigation: {
      nextEl: ".swiper-btn-next",
      prevEl: ".swiper-btn-prev",
    },
  });

  // Team
  var swiper = new Swiper(".team", {
    loop: true,
    effect: "coverflow",
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    speed: 1500,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 1,
      },
      600: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3,
      },

      1920: {
        slidesPerView: 3,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    coverflowEffect: {
      slideShadows: false,
    },
  });

  // Brand
  var swiper = new Swiper(".brand", {
    slidesPerView: 5,
    slidesPerGroupSkip: 5,
    grabCursor: true,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      speed: 2500,
      delay: 3000,
    },
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 2,
      },
      600: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
      1400: {
        slidesPerView: 5,
      },
      1920: {
        slidesPerView: 5,
      },
    },
  });

  // Testimonial
  var swiper = new Swiper(".mySwiper6", {
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    loop: true,
  });

  $(".venobox").venobox({
    numeratio: true,

    infinigall: true,
  });

  jQuery(document).ready(function ($) {
    "use strict";

    // service Active
    $(".project-list").owlCarousel({
      loop: true,
      autoplay: false,
      autoplayTimeout: 3500,
      smartSpeed: 2000,
      margin: 30,
      dots: true,
      center: true,
      nav: true,
      navText: [
        "<i class='fa-solid fa-chevron-left''></i>",
        "<i class='fa-solid fa-chevron-right''></i>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        992: {
          items: 3,
        },
        1270: {
          items: 3,
        },
        1920: {
          items: 3,
        },
      },
    });

    // =======< accordion js >========
    // =======< accordion js >========
    jQuery(document).ready(function ($) {
      "use strict";

      $(".accordion > li:eq(0) a").addClass("active").next().slideDown();
      $(".accordion a").on("click", function (j) {
        let dropDown = $(this).closest("li").find("p");

        $(this).closest(".accordion").find("p").not(dropDown).slideUp();

        if ($(this).hasClass("active")) {
          $(this).removeClass("active");
        } else {
          $(this).closest(".accordion").find("a.active").removeClass("active");
          $(this).addClass("active");
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
      });
    });

    jQuery(document).ready(function ($) {
      "use strict";

      $(".accordion2 > li:eq(0) a").addClass("active").next().slideDown();
      $(".accordion2 a").on("click", function (j) {
        let dropDown = $(this).closest("li").find("p");

        $(this).closest(".accordion2").find("p").not(dropDown).slideUp();

        if ($(this).hasClass("active")) {
          $(this).removeClass("active");
        } else {
          $(this).closest(".accordion2").find("a.active").removeClass("active");
          $(this).addClass("active");
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
      });
    });

    //=====< barfiller script >====
    $("#bar1").barfiller({
      duration: 7000,
    });
    $("#bar2").barfiller({
      duration: 7000,
    });
    $("#bar3").barfiller({
      duration: 7000,
    });
    $("#bar4").barfiller({
      duration: 7000,
    });
    $("#bar5").barfiller({
      duration: 7000,
    });

    //======< Custom Tab >======
    $(".tab ul.tabs").addClass("active").find("> li:eq(0)").addClass("current");

    $(".tab ul.tabs li a").on("click", function (g) {
      var tab = $(this).closest(".tab"),
        index = $(this).closest("li").index();

      tab.find("ul.tabs > li").removeClass("current");
      $(this).closest("li").addClass("current");

      tab
        .find(".tab_content")
        .find("div.tabs_item")
        .not("div.tabs_item:eq(" + index + ")")
        .slideUp();
      tab
        .find(".tab_content")
        .find("div.tabs_item:eq(" + index + ")")
        .slideDown();

      g.preventDefault();
    });
  });
})(jQuery);
