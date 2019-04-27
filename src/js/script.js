// Добавляем "contains"-селектор не чувствительный к регистру
jQuery.expr[":"].icontains = jQuery.expr.createPseudo(function(arg) {
    return function( elem ) {
        return jQuery(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
    };
});



jQuery(document).ready(function() {

  $('.fancybox').fancybox({
    helpers: {
      overlay: {
        locked: false,
      },
    },
  });
	$(".various").fancybox({
		maxWidth	: 900,
		maxHeight	: 600,
		fitToView	: false,
		width		: '70%',
		height		: '70%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none',
		headers  : { 'X-fancyBox': true }
	});
	$('.serv_item_name span').on('click', function(){

		$(this).parent().next('.serv_item_descr_hide').slideToggle();

	});


	$('.bl_services_h_item').on('click', function(){

		$('.bl_services_h_item').removeClass('active');
		$(this).addClass('active');
		$('.bl_services_cont_item').removeClass('active');
		$('.bl_services_cont_item:eq(' + $(this).index() + ')').addClass('active');

	});


	$('.popup_bl_bg, .bl_close').on('click', function(){

		$('.popup_bl').hide();

	});

	$('.link_main_news').on('click', function(e){
    e.preventDefault();
		$('#popup_news').show();
		return false;

	});

	$('.common_btn.shop_popup').on('click', function(){

		$('#popup_form').show();
		return false;

	});

	function setHeiHeight() {
		$('.main_screen_item, .main_screen_tb').css({
			'height': $(window).height() + 'px'
		});
	}
	setHeiHeight();
	$(window).resize( setHeiHeight );

	function setHeiHeightM() {
		$('.mobile .main_first_screen, .mobile .main_first_screen .main_screen_tb').css({
			'height': $(window).height() - 212 + 'px'
		});
	}
	setHeiHeightM();
	$(window).resize( setHeiHeightM );



	$('.bl_sert_carousel').slick({
		dots: false,
		infinite: true,
		speed: 1000,
		slide: '.bl_sert_slide',
		slidesToShow: 2,
		slidesToScroll: 1,
		touchMove: false

	});

	$('main > .slider').slick({
		dots: false,
		infinite: true,
		speed: 1000,
		slide: 'section',
		slidesToShow: 1,
		slidesToScroll: 1,
		touchMove: false
	});

	 var hamburger = $('#hamburger-icon');
	  hamburger.click(function() {
		$('.main_menu').toggleClass('active');
		 hamburger.toggleClass('active');
		 return false;
	  });



});

$(document).ready(function(){
  $('[name="PROPERTY[43][0]"]').inputmask("+7 (999) 999 99 99");
});

$(window).load(function() {


	$('.main_page').addClass('main_page_animated');

	setTimeout(function(){
		$('.pic_trafficlight_orange').addClass('active');
	}, 500);
	setTimeout(function(){
		$('.pic_trafficlight_orange').removeClass('active');
	}, 1200);


});