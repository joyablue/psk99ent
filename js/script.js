// 리소스 로딩 후 진행
window.onload = function () {

  AOS.init({
  duration: 1200,
});

  // header scroll
  $(window).scroll(function(){
    var top = $(window).scrollTop();
    if (top > 0) {
        $(".top_btn").addClass('on');
    } else {
        $(".top_btn").removeClass('on');
    }
});

var topPos = document.documentElement.scrollTop;
if (topPos > 0) {
    $(".top_btn").addClass('on');
}

$(".top_btn").click(function() {
    $('html, body').animate({ scrollTop: 0 }, 500);
});


  $('.slide').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots : false, 
    nextArrow:$('.next'),
    prevArrow:$('.prev'),
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  
};