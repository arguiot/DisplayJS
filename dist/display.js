"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DisplayJS = function DisplayJS(obj) {
	_classCallCheck(this, DisplayJS);

	this.obj = obj;
};

var _DOM_DJS = function (_DisplayJS) {
	_inherits(_DOM_DJS, _DisplayJS);

	function _DOM_DJS() {
		_classCallCheck(this, _DOM_DJS);

		return _possibleConstructorReturn(this, (_DOM_DJS.__proto__ || Object.getPrototypeOf(_DOM_DJS)).apply(this, arguments));
	}

	_createClass(_DOM_DJS, [{
		key: "var",
		value: function _var(push) {
			var _this2 = this;

			var var_push = function var_push() {
				var elements = document.querySelectorAll("[var]");
				for (var i = 0; i < elements.length; i++) {
					var attr = elements[i].getAttribute("var");
					elements[i].innerHTML = _this2.obj[attr];
				}
			};
			if (!push) {
				var_push();
			} else {
				window.setInterval(function () {
					var_push();
				}, push);
			}
		}
	}, {
		key: "target",
		value: function target(callback) {
			if (!callback) {
				var callback = function callback() {};
			}
			var addEventListener = function () {
				if (document.addEventListener) {
					return function (element, event, handler) {
						element.addEventListener(event, handler, false);
					};
				} else {
					return function (element, event, handler) {
						element.attachEvent("on" + event, handler);
					};
				}
			}();
			var obj = this.obj;
			[].forEach.call(document.querySelectorAll('[target]'), function (x, i, a) {
				addEventListener(a[i], "change", function () {
					var attr1 = a[i].getAttribute("target");
					obj[attr1] = this.value;
					callback();
				});
				addEventListener(a[i], "keydown", function () {
					var attr2 = a[i].getAttribute("target");
					obj[attr2] = this.value;
					callback();
				});
				addEventListener(a[i], "input", function () {
					var attr3 = a[i].getAttribute("target");
					obj[attr3] = this.value;
					callback();
				});
				addEventListener(a[i], "paste", function () {
					var attr4 = a[i].getAttribute("target");
					obj[attr4] = this.value;
					callback();
				});
			});
		}
	}, {
		key: "prepend",
		value: function prepend(element, html) {
			var div = document.createElement('div');
			div.innerHTML = html;
			element.insertBefore(div, element.firstChild);
		}
	}, {
		key: "append",
		value: function append(element, html) {
			element.innerHTML += html;
		}
	}, {
		key: "select",
		value: function select(str) {
			var obj = document.querySelectorAll(str);
			return obj;
		}
	}, {
		key: "empty",
		value: function empty(element) {
			element.innerHTML = null;
		}
	}, {
		key: "remove",
		value: function remove(element) {
			element.parentNode.removeChild(element);
		}
	}, {
		key: "on",
		value: function on(element, event, callback) {
			var addEventListener = function () {
				if (document.addEventListener) {
					return function (element, event, handler) {
						element.addEventListener(event, handler, false);
					};
				} else {
					return function (element, event, handler) {
						element.attachEvent("on" + event, handler);
					};
				}
			}();
			return addEventListener(element, event, callback);
		}
	}, {
		key: "show",
		value: function show(element) {
			element.style.display = 'block';
			return true;
		}
	}, {
		key: "hide",
		value: function hide(element) {
			element.style.display = 'none';
			return true;
		}
	}, {
		key: "ajaxGet",
		value: function ajaxGet(url, callback) {
			var xmlhttp = new XMLHttpRequest();
			xmlhttp.onreadystatechange = function () {
				if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
					callback(xmlhttp.responseText);
				}
			};
			xmlhttp.open("GET", url, true);
			xmlhttp.send();
		}
	}, {
		key: "ajaxGet",
		value: function ajaxGet(url, send) {
			var xmlhttp = new XMLHttpRequest();
			xmlhttp.onreadystatechange = function () {
				if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
					callback(xmlhttp.responseText);
				}
			};
			xmlhttp.open("POST", url, true);
			xmlhttp.send(send);
		}
	}, {
		key: "hasClass",
		value: function hasClass(element, className) {
			if (element.classList) return element.classList.contains(className);
			return !!element.className.match(new RegExp("(\\s|^)" + className + "(\\s|$)"));
		}
	}, {
		key: "addClass",
		value: function addClass(element, className) {
			if (element.classList) element.classList.add(className);else if (!hasClass(element, className)) element.className += " " + className;
		}
	}, {
		key: "removeClass",
		value: function removeClass(element, className) {
			if (element.classList) element.classList.remove(className);else if (hasClass(element, className)) {
				var reg = new RegExp("(\\s|^)" + className + "(\\s|$)");
				element.className = element.className.replace(reg, ' ');
			}
		}
	}, {
		key: "toogleClass",
		value: function toogleClass(element, class1) {
			var classes = element.className;
			var regex = new RegExp("\\b" + class1 + "\\b");
			var hasOne = classes.match(regex);
			class1 = class1.replace(/\s+/g, '');
			if (hasOne) element.className = classes.replace(regex, '');else element.className = classes + class1;
		}
	}, {
		key: "each",
		value: function each(elements, callback) {
			for (var i = 0; i < elements.length; i++) {
				callback(elements[i]);
			}
		}
	}, {
		key: "style",
		value: function style(element, name, value) {
			element.style[name] = value;
		}
	}, {
		key: "getStyle",
		value: function getStyle(element, styleProp) {
			var value = void 0;
			var defaultView = (element.ownerDocument || document).defaultView;
			// W3C standard way:
			if (defaultView && defaultView.getComputedStyle) {
				// sanitize property name to css notation
				// (hypen separated words eg. font-Size)
				styleProp = styleProp.replace(/([A-Z])/g, "-$1").toLowerCase();
				return defaultView.getComputedStyle(element, null).getPropertyValue(styleProp);
			} else if (element.currentStyle) {
				// IE
				// sanitize property name to camelCase
				styleProp = styleProp.replace(/\-(\w)/g, function (str, letter) {
					return letter.toUpperCase();
				});
				value = element.currentStyle[styleProp];
				// convert other units to pixels on IE
				if (/^\d+(em|pt|%|ex)?$/i.test(value)) {
					return function (value) {
						var oldLeft = element.style.left;
						var oldRsLeft = element.runtimeStyle.left;
						element.runtimeStyle.left = element.currentStyle.left;
						element.style.left = value || 0;
						value = element.style.pixelLeft + "px";
						element.style.left = oldLeft;
						element.runtimeStyle.left = oldRsLeft;
						return value;
					}(value);
				}
				return value;
			}
		}
	}]);

	return _DOM_DJS;
}(DisplayJS);