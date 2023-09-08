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


setTimeout(function () {
    var option = $(".js-option--right").html();
    $(".js-option--left").html(option);
    $(".js-option--left li").append("<span class='close-option c-fc--blue'>削除<span>")
    $('.js-option--right li').on('click', function(){
        var num = $(".js-option--right li").index(this);
        $(".js-option--left li").eq(num).addClass('active');
        $(this).addClass('hidden');
    });
    $('.close-option').on('click', function(){
        var num = $(".js-option--left li .close-option").index(this);
        $(".js-option--right li").eq(num).removeClass('hidden');
        $(this).parent().removeClass('active');
    });
},1000);


$('.js-option--right li').on('click', function(){
    
    // $(this).addClass("hidden");
    // $(".js-option--left").append(this);
    // $('.js-option--left li').on('click', function(){
    //     $(".js-option--right").append(this);
    // });
});


$('.js-plan--01 li').on('click', function(){
    $(".js-plan--01 li").removeClass("active");
    $(this).addClass("active");
});
$('.js-plan--02 li').on('click', function(){
    $(".js-plan--02 li").removeClass("active");
    $(this).addClass("active");
});
$('.js-plan--03 li').on('click', function(){
    $(".js-plan--03 li").removeClass("active");
    $(this).addClass("active");
});


$('.radiocopy').on('click', function(){
    $(".js-date-coppy").addClass("hidden");
});
$('.radiocopy-off').on('click', function(){
    $(".js-date-coppy").removeClass("hidden");
});

$('.radiocopy2').on('click', function(){
    $(".js-date-coppy2").addClass("hidden");
});
$('.radiocopy-off2').on('click', function(){
    $(".js-date-coppy2").removeClass("hidden");
});

$('.radioright--off').on('click', function(){
    $(".radioright-show").addClass("hidden");
});
$('.radioright--on').on('click', function(){
    $(".radioright-show").removeClass("hidden");
});

$('.radioright--off02').on('click', function(){
    $(".radioright-show02").addClass("hidden");
});
$('.radioright--on02').on('click', function(){
    $(".radioright-show02").removeClass("hidden");
});

$('.radioright--off03').on('click', function(){
    $(".radioright-show03").addClass("hidden");
});
$('.radioright--on03').on('click', function(){
    $(".radioright-show03").removeClass("hidden");
});



$('.js-block-border').on('click', function(){
    $(".block-border").toggleClass("hidden");
});

