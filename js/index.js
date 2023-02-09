$(document).ready(function () {
  AOS.init();
  $("a").click(function (e) { 
    e.preventDefault();
    
  });

  var swiper = new Swiper(".banner", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: true,
    loop: true
  });
  $(".header .hamburger").click(function (e) { 
    e.preventDefault();
    $(".header .hamburger").toggleClass("on")
  });



  const $sub_menu = $(".header .side-nav .sub-wrap .sub-menu")
  const $sub_ul = $(".header .side-nav .sub-wrap ul")
  $sub_ul.hide()
  $sub_ul.eq(0).show()
  $($sub_menu).click(function(){
    // $(this).next().slideToggle()
    // next : 다음 요소선택(그것의 자식은 안됨)
    $(this).next().slideToggle().siblings("ul").slideUp()
    // siblings - 주변에 해당 요소를 선택
  })


  $(".menu .menu-wrap .menu-category ul li").eq(1).addClass("on")

  var swiper = new Swiper(".menu-swiper", {
    slidesPerView: 6,
    spaceBetween: 10,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });



  
  $(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 350) { //350 넘으면 메뉴이미지 물결
        // $(".top").fadeIn(200)
      } else {
        $(".top").fadeOut(200);
      }
    });
  });




});