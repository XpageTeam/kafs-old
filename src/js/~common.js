$(function() {

	/*
		html2canvas($('.job_advert_constructor__example'), {
                onrendered: function (canvas) {
                    var img = canvas.toDataURL('image/png').replace("image/png", "image/octet-stream");
 
                    var p = window.open(); p.document.write("<img src='"+img+"' />"); p.focus(); p.print();         
                }
            });

       */

	$(".fancybox").fancybox({
		// helpers: {
		//       overlay: {
		//         locked: false,
		//       },
		//     },
	});

	$(".another-fancybox").fancybox({
		beforeShow: function(){
			$("body").addClass("new-fancy");

			$("html, body").animate({
				scrollTop: 0
			}, 10);
		},
		afterClose: function(){
			$("body").removeClass("new-fancy");
		}
	});

	$(".scrollup").click(function(){
		$("body:not(:animated)").animate({scrollTop: 0}, 800);
	});

	$(window).scroll(function() {
		var position = $(window).scrollTop();
		if (position >= 250){
			$(".scrollup").fadeIn(500);
		}else{
			$(".scrollup").fadeOut(500);
		}
	});

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
		autoplay: true,
		slide: 'section',
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		touchMove: false
	});

	$(".main-content .category .top").click(function(){
		var $this = $(this).closest(".category");

		if ($this.hasClass("unactive") && !$this.hasClass("active")){
			$this.find(".main").slideDown(500);
			$this.removeClass("unactive").addClass("active");

			setTimeout(function(){$this.find(".top").addClass("active");},500);
		}
	});

	$(".main-content .category .top").click(function(){
		if ($(this).hasClass("active")){
			$(this).removeClass("active").next(".main").slideUp(500);
			$(this).parent(".category").removeClass("active").addClass("unactive");
		}
	});

	$(".main-content .category button.min").click(function(){
		var $this = $(this).parent(".main").closest(".category");

		if ($this.hasClass("active")){
			$this.find(".main").slideUp(500);
			$this.removeClass("active").addClass("unactive");
			setTimeout(function(){$this.find(".top").removeClass("active");},500);
			$("body").animate({scrollTop: $this.offset().top-150}, 500);
		}
		/*else if ($(this).hasClass("top")){
			$(this).next(".main").slideUp(500).closest(".category").removeClass("active").addClass("unactive");
		}*/
	});

	$(".main-content .one .top").click(function(){
		var $this = $(this).closest(".one");

		//if ($this.hasClass("unactive")){
			$this.find(".main").slideToggle(500);
			$this.addClass("active");
		//}
	});

	$(".main-content .one button.min").click(function(){
		var $this = $(this).parent(".text").parent(".main").closest(".one");

		//if ($this.hasClass("active")){
			$this.find(".main").slideUp(500);
			$this.removeClass("active");

			//$("body").animate({scrollTop: $this.offset().top}, 500);
		//}
	});

	$(".fancybox-ajax").fancybox({
		maxWidth	: 900,
		maxHeight	: 600,
		fitToView	: false,
		width		: '70%',
		height		: '70%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});

	$(".custom-modal, .common_btn.shop_popup").click(function(){
		var $this = $(this);
		var id = $this.attr("href").replace("#", "");

		//console.log(id);

		$("body").addClass("popup-open");

		$(".popup_bl_container[id='"+id+"'], .popup_bl_bg").fadeIn(500);

		return false;
	});	

	$(".popup_bl_bg, .popup_bl_container .bl_close").click(function(){
		$(".popup_bl_container, .popup_bl_bg").fadeOut(500);

		$("body").removeClass("popup-open");
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


	/*$('.popup_bl_bg, .bl_close').on('click', function(){

		$('.popup_bl').hide();

	});*/

	$('.link_main_news').on('click', function(e){
    e.preventDefault();
		$('#popup_news').show();
		return false;

	});

	//$("header").prepend('<div class="btn_burger"><a id="hamburger-icon" href="#" title="Меню" class="active">	<span class="line line-1"></span><span class="line line-2"></span><span class="line line-3"></span></a>	</div>')

	$(".burger").click(function(){ 
		var $parent = $(".left-fixed"), $this = $(this);

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
		}, 300)
	});

	$(".close-menu").click(function(){
		var $this = $(this);

		$(".burger, .left-fixed").removeClass("active");

		$("body").removeClass("slideRight");
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
});

var scrollPane = null;

$(function(){
	$(".main .instructors__new .wrapper-instroctors").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		slide: ".bl_item_instructor",
		responsive: [
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	//scrollpane = $(".timetable-table__one").jScrollPane();

	$(".main .faq_item").click(function(){
		var $this = $(this);

		$this.toggleClass("js-opened");

		$this.find(".faq_item_answer").slideToggle(300);
	});

	$(".main .contacts_item_bl b").click(function(){
		var $this = $(this);

		$this.closest(".main .contacts_item_bl").toggleClass("js-opened");

		$this.next("p").slideToggle(300);
	});

	$(".main .contacts_item").click(function(){
		$("html, body").animate({
			scrollTop: $("#map").offset().top
		}, 300)
	});

});

function reinitScroll(){
	$(".timetable-table__one").jScrollPane();
}