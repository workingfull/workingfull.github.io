$(document).ready(function () {
    $('.times-circle').click(function () {
        $('.slide__discount').slideUp({
            duration: 200,
            easing: "linear"
        });
    });
});

$(document).ready(function () {
    $('.advantagesOneSlider').bxSlider({
    auto: true,
    slideWidth: 200,
    minSlides: 1,
    maxSlides: 1,
    controls: true,
    nextSelector: '#advOneSlider-next',
    prevSelector: '#advOneSlider-prev',
    nextText: '<i class="far fa-angle-right">',
    prevText: '<i class="far fa-angle-left">',       
    onSliderLoad: function(){
        $(".advantages__one__slider").css("visibility", "visible");
    }   
});
});

$(document).ready(function(){
    $(function() {
	    function fnSettings() {
	        var settings = {
                auto: true,
                slideWidth: 300,
                minSlides: 1,
                maxSlides: 1,
                controls: true,
                nextSelector: '#miracleSlider-next',
                prevSelector: '#miracleSlider-prev',
                nextText: '<img src="img/angle-right.png" alt="angle-right">',
                prevText: '<img src="img/angle-left.png" alt="angle-left">',
                onSliderLoad: function(){
                    $(".carousel__slide__miracle").css("visibility", "visible");
                } 
	            },
	            width = $(window).width();
	        if (width >= 576) settings = {
                auto: true,
                slideWidth: 595,
                minSlides: 1,
                maxSlides: 1,
                controls: true,
                nextSelector: '#miracleSlider-next',
                prevSelector: '#miracleSlider-prev',
                nextText: '<img src="img/angle-right.png" alt="angle-right">',
                prevText: '<img src="img/angle-left.png" alt="angle-left">',
                onSliderLoad: function(){
                    $(".carousel__slide__miracle").css("visibility", "visible");
                }
	        };
	        return settings
	    }
	    var settings = fnSettings();
	    var bxslider = $(".carouselSlideMiracle").bxSlider(settings);
	    $(window).resize(function() {
	        settings = fnSettings();
	        bxslider.reloadSlider(settings)
	    })
	});
});

$(document).ready(function(){
    $(function() {
	    function fnSettings() {
	        var settings = {
                auto: true,
                slideWidth: 298,
                minSlides: 1,
                maxSlides: 1,
                slideMargin: 28,
                controls: true,
                nextSelector: '.catalog__next',
                prevSelector: '.catalog__prev',
                nextText: '<i class="far fa-angle-right">',
                prevText: '<i class="far fa-angle-left">',
                onSliderLoad: function(){
                    $(".slideshowCatalog").css("visibility", "visible");
                }
	            },
	            width = $(window).width();
	        if (width >= 992) settings = {
                auto: true,
                slideWidth: 630,
                minSlides: 2,
                maxSlides: 2,
                slideMargin: 28,
                controls: true,
                nextSelector: '.catalog__next',
                prevSelector: '.catalog__prev',
                nextText: '<i class="far fa-angle-right">',
                prevText: '<i class="far fa-angle-left">',
                onSliderLoad: function(){
                    $(".slideshowCatalog").css("visibility", "visible");
                }
	        };
	        return settings
	    }
	    var settings = fnSettings();
	    var bxslider = $(".sliderCatalog").bxSlider(settings);
	    $(window).resize(function() {
	        settings = fnSettings();
	        bxslider.reloadSlider(settings)
	    })
	});
});

$(document).ready(function () {
    $('.sliderEngraving').bxSlider({
    auto: true,
    slideWidth: 270,
    minSlides: 1,
    maxSlides: 1,
    slideMargin: 390,
    controls: true,
    nextSelector: '.engraving__next',
    prevSelector: '.engraving__prev',
    nextText: '<i class="far fa-angle-right">',
    prevText: '<i class="far fa-angle-left">',
    onSliderLoad: function(){
        $(".slideshowEngraving").css("visibility", "visible");
    }    
});
});

$(document).ready(function () {
    $('.advantagesTwoSlider').bxSlider({
    auto: true,
    slideWidth: 240,
    minSlides: 1,
    maxSlides: 1,
    controls: true,
    nextSelector: '#advTwoSlider-next',
    prevSelector: '#advTwoSlider-prev',
    nextText: '<i class="far fa-angle-right">',
    prevText: '<i class="far fa-angle-left">',
    onSliderLoad: function(){
        $(".advantages__two__slider").css("visibility", "visible");
    }    
});
});

$(document).ready(function () {
    $('.addServicesSlider').bxSlider({
    auto: true,
    slideWidth: 234,
    minSlides: 1,
    maxSlides: 1,
    slideMargin: 390,
    controls: true,
    nextSelector: '#addServicesSlider-next',
    prevSelector: '#addServicesSlider-prev',
    nextText: '<i class="far fa-angle-right">',
    prevText: '<i class="far fa-angle-left">',
    onSliderLoad: function(){
        $(".add__services__slider").css("visibility", "visible");
    }    
});
});

$('.carousel').carousel({
    interval: 5000,
    keyboard: true,
    pause: "hover"
})

$(document).ready(function() {
    $('video').mediaelementplayer({
        alwaysShowControls: false,      
        videoVolume: 'horizontal',
        features: ['playpause','progress','volume','fullscreen'],
        startVolume: 0
    });
});

$(document).ready(function() {
    $('.mejs-overlay-button').click(function() {
        $('.mejs-controls').css("visibility", "visible");
    })
    $(".mejs-controls button").attr("title", "");
});


//Scroll btn
$('.slide__261 a#slide__btn__one').click(function () {
    var elem = $('#create__miracle'),
        elemTop = elem.offset().top;
    $('body, html').animate({ scrollTop: elemTop }, 1000);
});

$('.slide__261 a#slide__btn__two').click(function () {
    var elem = $('#catalog'),
        elemTop = elem.offset().top;
    $('body, html').animate({ scrollTop: elemTop }, 2000);
});

$('.create__miracle a#miracle__btn__one').click(function () {
    var elem = $('#catalog'),
        elemTop = elem.offset().top;
    $('body, html').animate({ scrollTop: elemTop }, 600);
});

$('.create__miracle a#miracle__btn__two').click(function () {
    var elem = $('#bonuses__form'),
        elemTop = elem.offset().top;
    $('body, html').animate({ scrollTop: elemTop }, 3000);
});

$('.hint a#scroll__top').click(function () {
    var elem = $('#header'),
        elemTop = elem.offset().top;
    $('body, html').animate({ scrollTop: elemTop }, 3000);
});

//Scroll menu
$('.nav a#catalog__item__nav').click(function () {
    var elem = $('#catalog'),
        elemTop = elem.offset().top;
    $('body, html').animate({ scrollTop: elemTop }, 2300);
});

$('.nav a#delivery__item__nav').click(function () {
    var elem = $('#delivery'),
        elemTop = elem.offset().top;
    $('body, html').animate({ scrollTop: elemTop }, 3700);
});

$('.nav a#bonuses__form__item__nav').click(function () {
    var elem = $('#bonuses__form'),
        elemTop = elem.offset().top;
    $('body, html').animate({ scrollTop: elemTop }, 4200);
});

$('.nav a#reviews__item__nav').click(function () {
    var elem = $('#reviews'),
        elemTop = elem.offset().top;
    $('body, html').animate({ scrollTop: elemTop }, 3900);
});

//burger Scroll menu
$('.burger__menu a#header__item__burger').click(function () {
    var elem = $('#header'),
        elemTop = elem.offset().top;
    $('body, html').animate({ scrollTop: elemTop }, 2800);
});

$('.burger__menu a#catalog__item__burger').click(function () {
    var elem = $('#catalog'),
        elemTop = elem.offset().top;
    $('body, html').animate({ scrollTop: elemTop }, 1200);
});

$('.burger__menu a#delivery__item__burger').click(function () {
    var elem = $('#delivery'),
        elemTop = elem.offset().top;
    $('body, html').animate({ scrollTop: elemTop }, 2600);
});

$('.burger__menu a#bonuses__form__item__burger').click(function () {
    var elem = $('#bonuses__form'),
        elemTop = elem.offset().top;
    $('body, html').animate({ scrollTop: elemTop }, 1700);
});

$('.burger__menu a#reviews__item__burger').click(function () {
    var elem = $('#reviews'),
        elemTop = elem.offset().top;
    $('body, html').animate({ scrollTop: elemTop }, 1800);
});

//burger Scroll btn
$('.burger__menu a#miracle__btn__one__burger').click(function () {
    var elem = $('#catalog'),
        elemTop = elem.offset().top;
    $('body, html').animate({ scrollTop: elemTop }, 1600);
});

$('.burger__menu a#miracle__btn__two__burger').click(function () {
    var elem = $('#bonuses__form'),
        elemTop = elem.offset().top;
    $('body, html').animate({ scrollTop: elemTop }, 3000);
});

$('.work__stages a#work__stages__ws__btn').click(function () {
    var elem = $('#bonuses__form'),
        elemTop = elem.offset().top;
    $('body, html').animate({ scrollTop: elemTop }, 3000);
});


$(document).ready(function(){
  $(".burger__btn").click(function(){
    $(".burger__menu").toggleClass("burger__menu__active");
  });
    
  $(".burger__tc__btn, .burger__menu__item, .burger__miracle__btn").click(function(){
    $(".burger__menu").toggleClass("burger__menu__active");
  });
});

//burger Scroll menu footer
$('.footer a#header__item__footer').click(function () {
    var elem = $('#header'),
        elemTop = elem.offset().top;
    $('body, html').animate({ scrollTop: elemTop }, 2800);
});

$('.footer a#catalog__item__footer').click(function () {
    var elem = $('#catalog'),
        elemTop = elem.offset().top;
    $('body, html').animate({ scrollTop: elemTop }, 2200);
});

$('.footer a#delivery__item__footer').click(function () {
    var elem = $('#delivery'),
        elemTop = elem.offset().top;
    $('body, html').animate({ scrollTop: elemTop }, 2600);
});

$('.footer a#bonuses__form__item__footer').click(function () {
    var elem = $('#bonuses__form'),
        elemTop = elem.offset().top;
    $('body, html').animate({ scrollTop: elemTop }, 1200);
});

$('.footer a#reviews__item__footer').click(function () {
    var elem = $('#reviews'),
        elemTop = elem.offset().top;
    $('body, html').animate({ scrollTop: elemTop }, 1800);
});

//burger Scroll menu footer menu__f
$('.footer a#header__item__footer__f').click(function () {
    var elem = $('#header'),
        elemTop = elem.offset().top;
    $('body, html').animate({ scrollTop: elemTop }, 2800);
});

$('.footer a#catalog__item__footer__f').click(function () {
    var elem = $('#catalog'),
        elemTop = elem.offset().top;
    $('body, html').animate({ scrollTop: elemTop }, 2200);
});

$('.footer a#delivery__item__footer__f').click(function () {
    var elem = $('#delivery'),
        elemTop = elem.offset().top;
    $('body, html').animate({ scrollTop: elemTop }, 2600);
});

$('.footer a#bonuses__form__item__footer__f').click(function () {
    var elem = $('#bonuses__form'),
        elemTop = elem.offset().top;
    $('body, html').animate({ scrollTop: elemTop }, 1200);
});

$('.footer a#reviews__item__footer__f').click(function () {
    var elem = $('#reviews'),
        elemTop = elem.offset().top;
    $('body, html').animate({ scrollTop: elemTop }, 1800);
});

//Animations JS
$(window).scroll(function() {
		$('#miracle__rose').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+1100) {
				$(this).addClass("fadeIn");
                $(this).addClass("visibility", "visible");
			}
		});
	});

$(window).scroll(function() {
		$('#miracle__one, #miracle__two, #miracle__three').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+700) {
				$(this).addClass("slideRight");
                $(this).addClass("visibility", "visible");
			}
		});
	});

$(window).scroll(function() {
		$('#miracle__four, #miracle__five, #miracle__six').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+700) {
				$(this).addClass("slideLeft");
                $(this).addClass("visibility", "visible");
			}
		});
	});

$(window).scroll(function() {
		$('#miracle__rose__small__left').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+700) {
				$(this).addClass("slideLeft");
                $(this).addClass("visibility", "visible");
			}
		});
	});

$(window).scroll(function() {
		$('#miracle__one__carousel, #miracle__two__carousel, #miracle__three__carousel').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+700) {
				$(this).addClass("slideRight");
                $(this).addClass("visibility", "visible");
			}
		});
	});

$(window).scroll(function() {
		$('#work__gift').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+700) {
				$(this).addClass("slideLeft");
                $(this).addClass("visibility", "visible");
			}
		});
	});

$(window).scroll(function() {
		$('#work__item__1, #work__item__2, #work__item__3, #work__item__4').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+700) {
				$(this).addClass("slideRight");
                $(this).addClass("visibility", "visible");
			}
		});
	});

//Mask JS
$(document).ready(function($){
   $("input[type='tel']").mask("+7 (999) 999-99-99");
    
});

//maxlength input
function formFunction() {
  document.getElementById("userName").maxLength = "25";
}

//pattern name
function formFunction() {
  document.getElementById("userName").pattern = "[A-ZА-ЯЁ][a-zа-яё]{2,}";
}