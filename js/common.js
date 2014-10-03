head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

    $('#form1 form').validate();
    $('#form2').validate();
    $('#form3').validate();
    $('#form4').validate();
    $('#form5 form').validate();



//    var checker = document.getElementById('yes');
//    var sendbtn = document.getElementById('send');
//    sendbtn.disabled = true;
//    jQuery(document).ready(function($){
//        checker.onchange = function(){
//            if(this.checked){
//                sendbtn.disabled = false;
//            } else {
//                sendbtn.disabled = true;
//            }
//
//        };
//    });


    $(window).scroll(function () {
        if ( $(this).scrollTop() > 200 && !$('.scrollMenu').hasClass('open') ) {
            $('.scrollMenu').addClass('open');
            $('.scrollMenu').slideDown();
        } else if ( $(this).scrollTop() <= 200 ) {
            $('.scrollMenu').removeClass('open');
            $('.scrollMenu').slideUp();
        }
    });


   $('#moreReviews').click(function () {
      $('#otherItems').slideToggle("normal");
       return false;
   });


    $('.fancybox').fancybox({
        padding: 0,
        helpers: {
            overlay: {
                locked: false,
                css:{'background' : 'rgba(0, 0, 0, 0.5)'}
            }
        },
        tpl: {
            closeBtn: '<div class="myFancyClose"></div>'
        },
        beforeShow: function(){
            $(".fancybox-skin").css("backgroundColor","transparent");
            $(".fancybox-skin").css("boxShadow","none");
        }
    });


    //yet another scrolling with hightlight effect (works for me)
//each marker link would be with section class
//.page is class of page without top menu )
// Navigation
    $('.js-nav a').on('click',function (e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 20
        }, 500, 'swing', function () {
            // window.location.hash = target;
        });
    });

    function navScroll(){
        $('.section').each(function(){
            var pos = $(this).offset().top;
            var id = $(this).attr('id');
            var top = ($('.page').offset().top - 80);
            if( $(window).scrollTop() >= (pos - 79)){
                //$('.js-nav li').removeClass('is-active');
                $('.js-nav li a').removeClass('is-active');
                //$('[href = #'+id+']').parent().addClass('is-active');
                $('[href = #'+id+']').addClass('is-active');
            }
            if($(window).scrollTop() < top){
                //$('.js-nav li').removeClass('is-active');
                $('.js-nav li a').removeClass('is-active');

            }
        });
    }

    $(window).scroll(function() {
        navScroll();
    });



    (function ($) {
        // Counter

        var _second = 1000;
        var _minute = _second * 60;
        var _hour = _minute * 60;
        var _day = _hour * 24;

        var now = new Date();
        var timer;
        var startDay = 4;
        var start = new Date(2013, 1, startDay, 23, 59, 59);
        var distance = now - start;
        var day = Math.floor(distance / _day);
        day = day - Math.floor(day / 3) * 3;
        var end = new Date(now.getFullYear(), now.getMonth(), now.getDate() + day, 23, 59, 59);

        function showRemaining() {
            var now = new Date();
            //now.setMinutes(1);
            var distance = end - now;
            var days = Math.floor(distance / _day);
            if (days < 10) days = '0' + days;
            var hours = Math.floor((distance % _day) / _hour);
            if (hours < 10) hours = '0' + hours;
            var minutes = Math.floor((distance % _hour) / _minute);
            if (minutes < 10) minutes = '0' + minutes;
            var seconds = Math.floor((distance % _minute) / _second);
            if (seconds < 10) seconds = '0' + seconds;

            //$(".count_line .d").html(days);
            $(".count_line .h").html(hours);
            $(".count_line .m").html(minutes);
            $(".count_line .s").html(seconds);
        }
        showRemaining();
        timer = setInterval(showRemaining, 1000);

    })(jQuery);
	console.log($('body').html());
});