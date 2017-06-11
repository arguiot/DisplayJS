var $ = new DisplayJS(window);
$.hide($.select(".footer-container"));
var hamburger = $.select(".hamburger");
$.on(hamburger, "click", function() {
	$.toggleClass($.select(".js-toggled"), "visible");
});
$.ajax("https://unpkg.com/display.js?json", "GET", "", function (data) {
	data = JSON.parse(data)
	var size = data.size / 1024;
	size = Math.round(size * 100) / 100
	console.log(size);
	$.text($.select(".kb"), size);
});
window.addEventListener('scroll', function() {
	var wScroll = window.scrollY;
		var header = $.select("header");
	  var jumpIn  = $.select("header")[0].style.height + 250;
	  if (wScroll > jumpIn) {
	    $.show($.select(".footer-container"));
	  } else {
	    $.hide($.select(".footer-container"));
	  }
	// $.select(".show")[0].style.top = 0 - (window.scrollY / 3) + "px";
});
// $('.footer-container').hide();
// $('.hamburger').click(() => {
// 	$('.js-toggled').toggleClass('visible');
// });
// $(window).scroll(function () {
// 	var wScroll = $(this).scrollTop();
// 	  var jumpIn  = $('header').height() + 250;
// 	  if (wScroll > jumpIn) {
// 	    $('.footer-container').show();
// 	  } else {
// 	    $('.footer-container').hide();
// 	  }
// 	
// });
