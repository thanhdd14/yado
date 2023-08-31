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


mobiscroll.setOptions({
    locale: mobiscroll.localeEn,
    theme: 'ios',
    themeVariant: 'light'
});

$(function () {
    // Mobiscroll Select initialization
    $('#demo-multiple-select').mobiscroll().select({
        inputElement: document.getElementById('demo-multiple-select-input')
    });
});


$('.js-change-item').on('click', function(){
    // $(".change-item__list.active").removeClass("active");
    $(this).next(".change-item__list").toggleClass("active");
    $(this).toggleClass("active");
});
