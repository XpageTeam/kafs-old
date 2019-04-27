(function () {
'use strict';

if (window.frameCacheVars !== undefined) BX.addCustomEvent("onFrameDataReceived", function (json) {
	loadScripts();
});else if (BX) BX.ready(function () {
	loadScripts();
});else $(function () {
	loadScripts();
});

// window.write = (el, text) => {
// 	$("#more_fields").val(text);

// 	// $.fancybox({
// 	// 	href: "#write",
// 	// 	beforeShow(){
// 	// 		$("body").addClass("fancy-active")
// 	// 	},
// 	// 	afterClose(){
// 	// 		$("body").removeClass()
// 	// 	}
// 	// })
// 	return false;
// };

var setHeiHeight = function setHeiHeight() {
	$('.main_screen_item, .main_screen_tb').css({
		'height': $(window).height() + 'px'
	});
};
var setHeiHeightM = function setHeiHeightM() {
	$('.mobile .main_first_screen, .mobile .main_first_screen .main_screen_tb').css({
		'height': $(window).height() - 212 + 'px'
	});
};

var loadScripts = function loadScripts() {

	if($(window).width() < 660) {
		$('.content.text table').wrap('<div class="table-wrap"></div>');
	}

	$(".fancybox").fancybox();

	$(".main .rates").append("<button class='next-screen-arrow'></button>");

	$(".next-screen-arrow").click(function () {
		$("html, body").animate({
			scrollTop: $(".tutorial").offset().top
		}, 400);
	});

	$(".scrollup").click(function () {
		$("html, body").animate({ scrollTop: 0 }, 800);
	});

	$(".another-fancybox").fancybox({
		beforeShow: function beforeShow() {
			$("body").addClass("new-fancy");

			$("html, body").animate({
				scrollTop: 0
			}, 10);
		},
		afterClose: function afterClose() {
			$("body").removeClass("new-fancy");
		}
	});

	$(".main .instructors__new .wrapper-instroctors").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
        lazyLoad: 'ondemand',
		slide: ".bl_item_instructor",
		responsive: [{
			breakpoint: 700,
			settings: {
				slidesToShow: 2
			}
		}, {
			breakpoint: 500,
			settings: {
				slidesToShow: 1
			}
		}]
	});

	$(".main .faq_item").click(function () {
		var $this = $(this);

		$this.toggleClass("js-opened");

		$this.find(".faq_item_answer").slideToggle(300);
	});

	$(".main .contacts_item_bl b").click(function () {
		var $this = $(this);

		$this.closest(".main .contacts_item_bl").toggleClass("js-opened");

		$this.next("p").slideToggle(300);
	});

	$(".main .contacts_item").click(function () {
		$("html, body").animate({
			scrollTop: $("#map").offset().top
		}, 300);
	});

	$(window).scroll(function () {
		var position = $(window).scrollTop();
		if (position >= 250) {
			$(".scrollup").fadeIn(500);
		} else {
			$(".scrollup").fadeOut(500);
		}
	});

	$('.bl_sert_carousel').slick({
		infinite: true,
		speed: 1000,
		slide: '.bl_sert_slide',
		slidesToShow: 2,
		slidesToScroll: 1,
		touchMove: false
	});

	$('main > .slider').slick({
		infinite: true,
		speed: 1000,
		autoplay: true,
		slide: 'section',
		slidesToShow: 1,
		slidesToScroll: 1,
		touchMove: false,
		autoplaySpeed: 3000,
	});

	$(".main-content .category .top").click(function () {
		var $this = $(this).closest(".category");

		if ($this.hasClass("unactive") && !$this.hasClass("active")) {
			$this.find(".main").slideDown(500);
			$this.removeClass("unactive").addClass("active");

			setTimeout(function () {
				$this.find(".top").addClass("active");
			}, 500);
		}
	});

	$(".main-content .category .top").click(function () {
		if ($(this).hasClass("active")) {
			$(this).removeClass("active").next(".main").slideUp(500);
			$(this).parent(".category").removeClass("active").addClass("unactive");
		}
	});

	$(".main-content .category button.min").click(function () {
		var $this = $(this).parent(".main").closest(".category");

		if ($this.hasClass("active")) {
			$this.find(".main").slideUp(500);
			$this.removeClass("active").addClass("unactive");
			setTimeout(function () {
				$this.find(".top").removeClass("active");
			}, 500);
			$("body").animate({ scrollTop: $this.offset().top - 150 }, 500);
		}
		/*else if ($(this).hasClass("top")){
  	$(this).next(".main").slideUp(500).closest(".category").removeClass("active").addClass("unactive");
  }*/
	});

	$(".main-content .one .top").click(function () {
		var $this = $(this).closest(".one");

		//if ($this.hasClass("unactive")){
		$this.find(".main").slideToggle(500);
		$this.addClass("active");
		//}
	});

	$(".main-content .one button.min").click(function () {
		var $this = $(this).parent(".text").parent(".main").closest(".one");

		//if ($this.hasClass("active")){
		$this.find(".main").slideUp(500);
		$this.removeClass("active");

		//$("body").animate({scrollTop: $this.offset().top}, 500);
		//}
	});

	$(".fancybox-ajax").fancybox({
		maxWidth: 900,
		maxHeight: 600,
		fitToView: false,
		width: '70%',
		height: '70%',
		autoSize: false,
		closeClick: false,
		openEffect: 'none',
		closeEffect: 'none'
	});

	$(".custom-modal, .common_btn.shop_popup").click(function () {
		var $this = $(this),
		    customText;
		var id = $this.attr("href").replace("#", "");

		customText = $this.attr("data-title") || false;

		if (customText) $("#more_fields").val(customText);

		$("body").addClass("popup-open");

		$(".popup_bl_container[id='" + id + "'], .popup_bl_bg").fadeIn(500);

		return false;
	});

	$(".popup_bl_bg, .popup_bl_container .bl_close").click(function () {
		$(".popup_bl_container, .popup_bl_bg").fadeOut(500);

		$("body").removeClass("popup-open");
	});

	$('.serv_item_name span').on('click', function () {

		$(this).parent().next('.serv_item_descr_hide').slideToggle();
	});

	$('.bl_services_h_item').on('click', function () {

		$('.bl_services_h_item').removeClass('active');
		$(this).addClass('active');
		$('.bl_services_cont_item').removeClass('active');
		$('.bl_services_cont_item:eq(' + $(this).index() + ')').addClass('active');
	});

	/*$('.popup_bl_bg, .bl_close').on('click', function(){
 		$('.popup_bl').hide();
 	});*/

	$('.link_main_news').on('click', function (e) {
		e.preventDefault();
		$('#popup_news').show();
		return false;
	});

	//$("header").prepend('<div class="btn_burger"><a id="hamburger-icon" href="#" title="Меню" class="active">	<span class="line line-1"></span><span class="line line-2"></span><span class="line line-3"></span></a>	</div>')

	$(".burger").click(function () {
		var $parent = $(".left-fixed"),
		    $this = $(this);

		// if ($this.hasClass("active")){
		// 	$parent.removeClass("active");
		// 	$this.removeClass("active");
		// 	$("body").removeClass("slideRight");
		// }
		// else{
		$this.addClass("active");
		$parent.addClass("active");
		$("body").addClass("slideRight");
		//}

		//return false;

		$("html, body").animate({
			scrollTop: 0
		}, 300);
	});

	$(".close-menu").click(function () {
		var $this = $(this);

		$(".burger, .left-fixed").removeClass("active");

		$("body").removeClass("slideRight");
	});

	setHeiHeight();

	setHeiHeightM();
};

$(window).on("resize", setHeiHeight());

}());

//# sourceMappingURL=common.js.map
