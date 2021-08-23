jQuery(document).ready(function ($) {
  const courses__swiper = new Swiper(".courses__swiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: ".courses__swiper__controls .swiper-button-next",
      prevEl: ".courses__swiper__controls .swiper-button-prev",
    },

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 991px
      991: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  const clients__swiper = new Swiper(".clients__swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: ".clients .swiper-button-next",
      prevEl: ".clients .swiper-button-prev",
    },
    pagination: {
      el: ".clients .clients__pagination",
      clickable: true,
    },

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      // when window width is >= 991px
      991: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
  });

  const news__swiper = new Swiper(".news__swiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: ".news__swiper__wrapper .swiper-button-next",
      prevEl: ".news__swiper__wrapper .swiper-button-prev",
    },

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 991px
      991: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  const testimonials__swiper = new Swiper(".testimonials__swiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    navigation: {
      nextEl: ".testimonials__swiper__controls .swiper-button-next",
      prevEl: ".testimonials__swiper__controls .swiper-button-prev",
    },

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 991px
      991: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });

  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });

  $("#ServiceItem").on("click", function () {
    $("#serviceSubMenu").fadeIn();
  });

  const $menuLink = $('#ServiceItem');
  const $menu = $('#serviceSubMenu');

  // $(document).on('mouseenter', '#serviceSubMenu', '#ServiceItem', (e => {
  //   $("#serviceSubMenu").fadeOut();
    
  // }))

  // active tabs dynamic
  $('.header .utl-tabs li  a').on('mouseover', function() {
    $(this).tab('show');
  });

  // select2
  // $('.multiSelect').select2();
  if ($(".multiSelect").length) {
    $(".multiSelect").select2({
      placeholder: "Select a service",
      search: true,
      height: "50px",
    });
  }

  // count up
  countUp();

  // REMOVE SPINNER
  setTimeout(() => {
    $(".loader").fadeOut("slow");
  }, 1000);

  const topButton = document.getElementById("gotToTopButton");
  const headerNav = document.querySelector(".header__mobile-nav");
  topButton.addEventListener("click", topFunction);

  window.onscroll = function () {
    scrollFunction(topButton, headerNav);
  };

  mobileNavMenuRender();

  // WOW JS
  wow = new WOW({
    boxClass: "wow", // default
    animateClass: "animated", // default
    offset: 0, // default
    mobile: true, // default
    live: true, // default
  });
  wow.init();
});

function changeEventContainerPosition() {
  var element_position = $("#footer").offset() && $("#footer").offset().top;
  var screen_height = $(window).height();
  var activation_offset = 0.5; //determines how far up the the page the element needs to be before triggering the function
  var activation_point = element_position - screen_height * activation_offset;
  var max_scroll_height = $("body").height() - screen_height - 5; //-5 for a little bit of buffer
  var y_scroll_pos = window.pageYOffset;

  var element_in_view = y_scroll_pos > activation_point;
  var has_reached_bottom_of_page =
    max_scroll_height <= y_scroll_pos && !element_in_view;

  if (element_in_view || has_reached_bottom_of_page) {
    //Do something
    $(".event-details__container").css("bottom", "450px");
  }
}

function scrollFunction(topButton, headerNav) {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "flex";
    if (headerNav) {
      headerNav.style.top = "0px";
    }
  } else {
    topButton.style.display = "none";
    // headerNav.style.top = '60px';
  }

  if (
    document.body.scrollTop > 120 ||
    document.documentElement.scrollTop > 120
  ) {
    $(".event-details__container").css("bottom", "50px");
    changeEventContainerPosition();
  } else {
    $(".event-details__container").css("bottom", "-250px");
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function mobileNavMenuRender() {
  const navExpand = [].slice.call(document.querySelectorAll(".nav-expand"));
  const backLink = `<li class="nav-item">
	<a class="nav-link nav-back-link" href="javascript:;">
		Back
	</a>
</li>`;

  navExpand.forEach((item) => {
    item
      .querySelector(".nav-expand-content")
      .insertAdjacentHTML("afterbegin", backLink);
    item
      .querySelector(".nav-link")
      .addEventListener("click", () => item.classList.add("active"));
    item
      .querySelector(".nav-back-link")
      .addEventListener("click", () => item.classList.remove("active"));
  });

  // ---------------------------------------
  // not-so-important stuff starts here

  const openMenuBtn = document.getElementById("openMenu");
  const closeMenuBtn = document.getElementById("closeMenu");

  openMenuBtn.addEventListener("click", function () {
    $(".header__mobile").fadeIn("slow");
  });

  closeMenuBtn.addEventListener("click", function () {
    $(".header__mobile").fadeOut("slow");
  });
}

function countUp() {
  // These are the options that I'm going to be using on each statistic
  var options = {
    useEasing: true,
    useGrouping: true,
    separator: ",",
    decimal: ".",
  };

  // Find all Statistics on page, put them inside a variable
  var statistics = $(".company__statistics__item__count");

  // For each Statistic we find, animate it
  statistics.each(function (index) {
    // Find the value we want to animate (what lives inside the p tags)
    var value = $(statistics[index]).html();
    // Start animating
    var statisticAnimation = new CountUp(
      statistics[index],
      0,
      value,
      0,
      5,
      options
    );
    statisticAnimation.start();
  });
}
