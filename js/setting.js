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
    var num = $(".js-plan--02 li").index(this);
    $(".tab-content").removeClass('active');
    $(".tab-content").eq(num).addClass('active');
    $(".js-plan--02 li").removeClass("active");
    $(this).addClass("active");
});
$('.move-tab').on('click', function(){
    $(".sub-tab").removeClass("active");
    $(this).addClass("active");
    $(".tab-content").addClass('hidden');
});
$('.sub-tab').on('click', function(){
    $(".move-tab").removeClass("active");
    $(this).addClass("active");
    $(".tab-content").removeClass('hidden');
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

$('.radioright--off04').on('click', function(){
    $(".radioright-show04").addClass("hidden");
});
$('.radioright--on04').on('click', function(){
    $(".radioright-show04").removeClass("hidden");
});

$('.radioright--off05').on('click', function(){
    $(".radioright-show05").addClass("hidden");
});
$('.radioright--on05').on('click', function(){
    $(".radioright-show05").removeClass("hidden");
});
$('.radioright--off06').on('click', function(){
    $(".radioright-show06").addClass("disabled");
});
$('.radioright--on06').on('click', function(){
    $(".radioright-show06").removeClass("disabled");
});

$('.radioright--off07').on('click', function(){
    $(".radioright-show07").addClass("disabled");
});
$('.radioright--on07').on('click', function(){
    $(".radioright-show07").removeClass("disabled");
});

$('.radioright--off08').on('click', function(){
    $(".radioright-show08").addClass("disabled");
});
$('.radioright--on08').on('click', function(){
    $(".radioright-show08").removeClass("disabled");
});

$('.radioright--off09').on('click', function(){
    $(".radioright-show09").addClass("disabled");
});
$('.radioright--on09').on('click', function(){
    $(".radioright-show09").removeClass("disabled");
});

$('.radioright--off10').on('click', function(){
    $(".radioright-show10").addClass("disabled");
});
$('.radioright--on10').on('click', function(){
    $(".radioright-show10").removeClass("disabled");
});

$('.radioright--off11').on('click', function(){
    $(".radioright-show11").addClass("hidden");
});
$('.radioright--on11').on('click', function(){
    $(".radioright-show11").removeClass("hidden");
});


$('.radioright--off12').on('click', function(){
    $(".radioright-show12").addClass("hidden");
});
$('.radioright--on12').on('click', function(){
    $(".radioright-show12").removeClass("hidden");
});

$('.radioright--off13').on('click', function(){
    $(".radioright-show13").addClass("hidden");
});
$('.radioright--on13').on('click', function(){
    $(".radioright-show13").removeClass("hidden");
});

$('.radioright--off14').on('click', function(){
    $(".radioright-show14").addClass("hidden");
});
$('.radioright--on14').on('click', function(){
    $(".radioright-show14").removeClass("hidden");
});


$('.radioright--off15').on('click', function(){
    $(".radioright-show15").addClass("hidden");
});
$('.radioright--on15').on('click', function(){
    $(".radioright-show15").removeClass("hidden");
});

// $('.radioright--off16').on('click', function(){
//     $(".radioright-show16").addClass("hidden");
// });
// $('.radioright--on16').on('click', function(){
//     $(".radioright-show16").removeClass("hidden");
// });

// $('.radioright--off17').on('click', function(){
//     $(".radioright-show17").addClass("hidden");
// });
// $('.radioright--on17').on('click', function(){
//     $(".radioright-show17").removeClass("hidden");
// });


// $('.radioright--off18').on('click', function(){
//     $(".radioright-show18").addClass("hidden");
// });
// $('.radioright--on18').on('click', function(){
//     $(".radioright-show18").removeClass("hidden");
// });

// $('.radioright--off19').on('click', function(){
//     $(".radioright-show19").addClass("hidden");
// });
// $('.radioright--on19').on('click', function(){
//     $(".radioright-show19").removeClass("hidden");
// });

// $('.radioright--off20').on('click', function(){
//     $(".radioright-show20").addClass("hidden");
// });
// $('.radioright--on20').on('click', function(){
//     $(".radioright-show20").removeClass("hidden");
// });

$('.radioright--off21').on('click', function(){
    $(".radioright-show21").addClass("hidden");
});
$('.radioright--on21').on('click', function(){
    $(".radioright-show21").removeClass("hidden");
});

$('.radioright--off22').on('click', function(){
    $(".radioright-show22").addClass("hidden");
});
$('.radioright--on22').on('click', function(){
    $(".radioright-show22").removeClass("hidden");
});

$('.js-block-border').on('click', function(){
    $(".block-border").toggleClass("hidden");
});

