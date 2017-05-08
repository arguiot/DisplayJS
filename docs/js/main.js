$('.footer-container').hide();
$('.hamburger').click(() => {
	$('.js-toggled').toggleClass('visible');
});
$(window).scroll(function () {
	var wScroll = $(this).scrollTop();
	  var jumpIn  = $('header').height() + 250;
	  if (wScroll > jumpIn) {
	    $('.footer-container').show();
	  } else {
	    $('.footer-container').hide();
	  }
	$("header").css({
		'top': 0-($(this).scrollTop() / 3) + "px"
	});
});
$(document).ready(function () {
	$.getJSON("https://unpkg.com/noobscroll?json", function (data) {
		var size = data.size / 1024;
		size = Math.round(size * 100) / 100
		$(".kb").text(size);
	});
});