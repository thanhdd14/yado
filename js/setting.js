//menu header
$('.header-nav__sub').on('click', function(){
    $(this).toggleClass("active");
    $(this).next(".header-nav__menu").slideToggle().toggleClass("active");;
});

$("#upload-file").change(function() {
    filename = this.files[0].name;
   $(".show-upload__fill").text(filename);
    $(".show-upload__note").addClass("active");
});

var item = $(".js-item-fill");
var itemFill = item.html();
$('.add-view__sub').on('click', function(){
    $(".js-item-fill").append(itemFill);
    $('.js-odd__remove').on('click', function(){
        $(this).parent().remove()
    });
});

$('.js-item-fill').repeater({
    show: function () {
        $(this).slideDown();
    }
});


// $(document).on("click", function(){
// 	$("aa").hide();
// });

// $(window).scroll(function () {
//     if ($(this).scrollTop() > 10) {
//         $("#header").addClass("js-fixed");
//     }
//     else {
//         $("#header").removeClass("js-fixed");
//     }
// });

//resize slider load page
// var window_type;
// var $window = $(window);
// if ($window.width() <= 1024) {
//     window_type = 'sp';
// } else {
//     window_type = 'pc';
// }
// $(window).resize(function() {
//     if($window.width() <= 1024){
//         if( (window_type != 'sp') ){
//             location.reload();
//         }
//     }else{
//         if(window_type != 'pc'){
//             location.reload();
//         }
//     }
// });




// $(window).on("load resize",function () {
//     $("main").css("padding-top",$("#header").outerHeight());
// });



//siider-home
// $('.js-mv-slider').slick({
//     dots: false,
//     focusOnSelect: true,
//     pauseOnHover:false,
//     infinite: true,
//     speed: 500,
//     fade: true,
//     autoplay: false,
//     cssEase: 'linear'
// });

// $(".js-product").slick({
// 	slidesToShow: 3,
// 	slidesToScroll: 1,
// 	autoplay: true,
// 	autoplaySpeed: 2000,
	// prevArrow:"<button type='button' class='slick-prev pull-left'></button>",
	// nextArrow:"<button type='button' class='slick-next pull-right'></button>"
// });


// $(".js-product").slick({
//   slidesToShow: item,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 2000,
// });


// $(function () {
//     objectFitImages('img');
// });


//matchHeight
// jQuery(function ($) {
//     $('.news .item').matchHeight();
// });



//fade
// $(window).on('scroll load assessFeatureHeaders', function(){
//     var scrollTop = $(window).scrollTop();
//     var appearenceBuffer = 60;
//     var windowBottom = scrollTop + $(window).height() - appearenceBuffer;
//     $('body').toggleClass('scrolled-down', scrollTop > 0);
//     $('.js-scrollin:not(.active)').filter(function(){
//         var offset = $(this).offset().top;
//         var height = $(this).outerHeight();
//         return offset + height >= scrollTop && offset <= windowBottom;
//     }).addClass('active');
// });


//backtop
// jQuery(document).ready(function ($) {
//     $(".js-backtop").hide();
//     $(window).on("scroll", function () {
//         if($(window).scrollTop()> $("#footer").offset().top - $(window).outerHeight()){
//             $(".js-backtop").addClass("active");
//         }
//         else {
//             $(".js-backtop").removeClass("active");
//         }
//         if ($(this).scrollTop() > 100) {
//             $(".js-backtop").fadeIn("fast");
//         } else {
//             $(".js-backtop").fadeOut("fast");
//         }
//     });
//     $('.js-backtop').click(function () {
//         $('body,html').animate({
//             scrollTop: 0
//         }, 500);
//         return false;
//     });
// });