$(function() {
	$('.box_slider').slick({
	  // infinite: true,
	  arrows: true,
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 3,
	  speed: 3000,
	  autoplay: true,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});
	
	$('.box_banner').slick({
	  // infinite: true,
	  arrows: false,
	  infinite: true,
	  slidesToShow: 5,
	  // slidesToScroll: 5,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 5,
	        slidesToScroll: 5,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});
	$('.box_list_teacher').slick({
	  // infinite: true,
	  // arrows: false,
	  infinite: true,
	  slidesToShow: 1,
	  speed: 3000,
	  autoplay: false,
	  dots: true,
	  arrows: true,
	  prevArrow: '<span class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i></span>',
	  nextArrow: '<span class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i></span>',
	  // nextArrow: '<i class="fas fa-angle-right"></i>',
	});
	$('.box_reason').slick({
	  // infinite: true,
	  // arrows: false,
	  infinite: true,
	  slidesToShow: 1,
	  speed: 3000,
	  autoplay: false,
	  dots: false,
	  arrows: true,
	  prevArrow: '<span class="slick-prev slick-arrow"><i class="fas fa-arrow-circle-left"></i></span>',
	  nextArrow: '<span class="slick-next slick-arrow"><i class="fas fa-arrow-circle-right"></i></span>',
	  // nextArrow: '<i class="fas fa-angle-right"></i>',
	});
	
});
$(document).ready(function () {
	
    $("#jsDownloadBtn ").click(function(){
	    $("#jsHeaderDownload").hide();
	    $('#page').addClass('noDowload');
	  });
    $('.dropdown-language').click(function(e) {
    	// alert($(this).getClass().getName());
	    e.stopPropagation();
	});
    $(".dropdown-language li").click(function(){
	    var class_lang = $(this).prop("class");
	    if($(".lnk_lang").hasClass("lag_en")) {
	    	$(".lnk_lang").removeClass("lag_en");
	    }
	    if($(".lnk_lang").hasClass("lag_vn")) {
	    	$(".lnk_lang").removeClass("lag_vn");
	    }
	    
	    $(".lnk_lang").addClass(class_lang);
	    // $(".lnk_lang").attr('class',"test")
	  });
    
});
jQuery(document).ready(function(){
        /*Animate when click anchor link*/
        jQuery('a[href^="#"]').on('click', function(event) {
            var target = jQuery(this.getAttribute('href'));
            if( target.length ) {
                event.preventDefault();
                jQuery('html, body').stop().animate({
                    scrollTop: target.offset().top
                }, 1000);
            }
        });

});
$(document).ready(function () {
  // Menu ---------------------------//
  $('.menuopen').on('click', function() {
    if($('body').hasClass('fix_active')) {
      $('body').removeClass('fix_active open_menu');
      $('.fixmenu').fadeOut();
      $('.overlay').fadeOut();
      $('#contents').css('padding-top','');
       $('.fixmenu').css('top',$('#header').height());
    } else {
      $('.fixmenu').fadeIn();
      $('.overlay').fadeIn();
      $('body').addClass('fix_active open_menu');
      $('#contents').css('padding-top',$('#header').height());
      $('.fixmenu').css('top',$('#header').height());
    }
  });
    
});