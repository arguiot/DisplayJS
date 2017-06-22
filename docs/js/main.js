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
$.on([window], 'scroll', function() {
	var wScroll = window.scrollY;
		var header = $.select("header");
	  	var jumpIn  = window.innerHeight;
    if (wScroll > 30) {
      $.addClass($.select(".footer-fixed"), "visible");
    }
    else {
      $.removeClass($.select(".footer-fixed"), "visible");
    }
	  if (wScroll > jumpIn) {
	    $.show($.select(".footer-container"));
	    $.hide($.select("#particles-js"));
      
	  } else {
	    $.hide($.select(".footer-container"));
	    $.show($.select("#particles-js"));
      
	  }
	// $.select(".show")[0].style.top = 0 - (window.scrollY / 3) + "px";
});
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 180,
      "density": {
        "enable": true,
        "value_area": 1000
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});