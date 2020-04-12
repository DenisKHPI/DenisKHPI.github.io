"use strict";

$(document).ready(function () {
  $('.acordeon  .spoiler__btn').click(function () {
    if ($(this).hasClass('active')) {
      $(this).find('.spoiler_text').slideUp();
      $(this).removeClass('active');
    } else {
      $('.spoiler__btn').find('.spoiler_text').slideUp();
      $('.spoiler__btn').removeClass('active');
      $(this).find('.spoiler_text').slideDown();
      $(this).addClass('active');
    }

    ;
  });
});
var swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});
$(document).ready(function () {
  $("#menu").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });
});
$(document).ready(function () {
  $('.questions__ul .questions__li').click(function () {
    if ($(this).hasClass('active1')) {
      $(this).find('.questions__text').slideUp();
      $(this).removeClass('active1');
    } else {
      $('.questions__li').find(' .questions__text').slideUp();
      $('.questions__li').removeClass('active1');
      $(this).find(' .questions__text').slideDown();
      $(this).addClass('active1');
    }

    ;
  });
});
var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination'
  }
});
jQuery(function () {
  var slideNow = 1;
  var slideCount = $('#slidewrapper').children().length;
  var slideInterval = 3000;
  var navBtnId = 0;
  var translateWidth = 0;
  $(document).ready(function () {
    var switchInterval = setInterval(nextSlide, slideInterval);
    $('#viewport').hover(function () {
      clearInterval(switchInterval);
    }, function () {
      switchInterval = setInterval(nextSlide, slideInterval);
    });
    $('.slide-nav-btn').click(function () {
      navBtnId = $(this).index();

      if (navBtnId + 1 != slideNow) {
        translateWidth = -$('#viewport').width() * navBtnId;
        $('#slidewrapper').css({
          'transform': 'translate(' + translateWidth + 'px, 0)',
          '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
          '-ms-transform': 'translate(' + translateWidth + 'px, 0)'
        });
        slideNow = navBtnId + 1;
      }
    });
  });

  function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
      $('#slidewrapper').css('transform', 'translate(0, 0)');
      slideNow = 1;
    } else {
      translateWidth = -$('#viewport').width() * slideNow;
      $('#slidewrapper').css({
        'transform': 'translate(' + translateWidth + 'px, 0)',
        '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
        '-ms-transform': 'translate(' + translateWidth + 'px, 0)'
      });
      slideNow++;
    }
  }

  function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
      translateWidth = -$('#viewport').width() * (slideCount - 1);
      $('#slidewrapper').css({
        'transform': 'translate(' + translateWidth + 'px, 0)',
        '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
        '-ms-transform': 'translate(' + translateWidth + 'px, 0)'
      });
      slideNow = slideCount;
    } else {
      translateWidth = -$('#viewport').width() * (slideNow - 2);
      $('#slidewrapper').css({
        'transform': 'translate(' + translateWidth + 'px, 0)',
        '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
        '-ms-transform': 'translate(' + translateWidth + 'px, 0)'
      });
      slideNow--;
    }
  }

  $(document).ready(function () {
    AOS.init({
      // Global settings:
      disable: false,
      // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded',
      // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init',
      // class applied after initialization
      animatedClassName: 'aos-animate',
      // class applied on animation
      useClassNames: false,
      // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false,
      // disables automatic mutations' detections (advanced)
      debounceDelay: 50,
      // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99,
      // the delay on throttle used while scrolling the page (advanced)
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120,
      // offset (in px) from the original trigger point
      delay: 0,
      // values from 0 to 3000, with step 50ms
      duration: 1100,
      // values from 0 to 3000, with step 50ms
      easing: 'ease',
      // default easing for AOS animations
      once: false,
      // whether animation should happen only once - while scrolling down
      mirror: false,
      // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom' // defines which position of the element regarding to window should trigger the animation

    });
  });
});