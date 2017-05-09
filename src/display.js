class DisplayJS { 
  constructor (obj) {
	this.obj = obj;
  }
}
class _DOM_DJS extends DisplayJS {
	var (push) {
		const var_push = () => {
			const elements = document.querySelectorAll("[var]");
			for (let i = 0; i < elements.length; i++) {
				const attr = elements[i].getAttribute("var");
				elements[i].innerHTML = this.obj[attr];
			}
		}
		if (!push) {
			var_push();
		}
		else {
			window.setInterval(() => {
				var_push();
			}, push);
		}
				
	}
	target (callback) {
		if (!callback) {
			var callback = () => {

			}
		}
		const addEventListener = ((() => {
		    if(document.addEventListener) {
		        return (element, event, handler) => {
		            element.addEventListener(event, handler, false);
		        };
		    }
		    else {
		        return (element, event, handler) => {
		            element.attachEvent(`on${event}`, handler);
		        };
		    }
		})());
		const obj = this.obj;
		[].forEach.call(document.querySelectorAll('[target]'), (x, i, a) => {
		    addEventListener(a[i], "change", function () {
		    	const attr1 = a[i].getAttribute("target");
		        obj[attr1] = this.value;
		        callback();
		    });
		    addEventListener(a[i], "keydown", function () {
		    	const attr2 = a[i].getAttribute("target");
		        obj[attr2] = this.value;
		        callback();
		    });
		    addEventListener(a[i], "input", function () {
		    	const attr3 = a[i].getAttribute("target");
		        obj[attr3] = this.value;
		        callback();
		    });
		    addEventListener(a[i], "paste", function () {
		    	const attr4 = a[i].getAttribute("target");
		        obj[attr4] = this.value;
		        callback();
		    });
		});
	}
	prepend (element, html) {
	    const div = document.createElement('div');
	    div.innerHTML = html;
	    element.insertBefore(div, element.firstChild);
	}
	append (element, html) {
	    element.innerHTML += html;
	}
	select (str) {
		const obj = document.querySelectorAll(str);
		return obj;
	}
	empty (element) {
		element.innerHTML = null;
	}
	remove (element) {
		element.parentNode.removeChild(element);
	}
	on (element, event, callback) {
		const addEventListener = ((() => {
		    if(document.addEventListener) {
		        return (element, event, handler) => {
		            element.addEventListener(event, handler, false);
		        };
		    }
		    else {
		        return (element, event, handler) => {
		            element.attachEvent(`on${event}`, handler);
		        };
		    }
		})());
		return addEventListener(element, event, callback);
	}
	show (element) {
        element.style.display='block'; 
        return true;
	}
	hide (element) {
        element.style.display='none';
        return true;
	}
	ajaxGet (url, callback) {
		const xmlhttp = new XMLHttpRequest();
	    xmlhttp.onreadystatechange = () => {
	        if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
	            callback(xmlhttp.responseText);
	        }
	    }
	    xmlhttp.open("GET", url, true);
	    xmlhttp.send();
	}
	ajaxGet (url, send) {
		const xmlhttp = new XMLHttpRequest();
	    xmlhttp.onreadystatechange = () => {
	        if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
	            callback(xmlhttp.responseText);
	        }
	    }
	    xmlhttp.open("POST", url, true);
	    xmlhttp.send(send);
	}
	hasClass (element, className) {
	    if (element.classList)
	        return element.classList.contains(className);
	    return !!element.className.match(new RegExp(`(\\s|^)${className}(\\s|$)`));
	}
	addClass (element, className) {
	    if (element.classList)
	        element.classList.add(className)
	    else if (!hasClass(element, className))
	        element.className += ` ${className}`;
	}
	removeClass (element, className) {
	    if (element.classList)
	        element.classList.remove(className)
	    else if (hasClass(element, className))
	    {
	        const reg = new RegExp(`(\\s|^)${className}(\\s|$)`);
	        element.className = element.className.replace(reg, ' ');
	    }
	}
	toogleClass(element, class1) {
	  const classes = element.className;
	  const regex = new RegExp(`\\b${class1}\\b`);
	  const hasOne = classes.match(regex);
	  class1 = class1.replace(/\s+/g, '');
	  if (hasOne)
	    element.className = classes.replace(regex, '');
	  else
	    element.className = classes + class1;
	}
	each (elements, callback) {
		for (let i = 0; i < elements.length; i++) {
			callback(elements[i]);
		}
	}
	style (element, name, value) {
		element.style[name] = value;
	}
	getStyle(element, styleProp) {
        let value;
        const defaultView = (element.ownerDocument || document).defaultView;
        // W3C standard way:
        if (defaultView && defaultView.getComputedStyle) {
          // sanitize property name to css notation
          // (hypen separated words eg. font-Size)
          styleProp = styleProp.replace(/([A-Z])/g, "-$1").toLowerCase();
          return defaultView.getComputedStyle(element, null).getPropertyValue(styleProp);
        } else if (element.currentStyle) { // IE
          // sanitize property name to camelCase
          styleProp = styleProp.replace(/\-(\w)/g, (str, letter) => letter.toUpperCase());
          value = element.currentStyle[styleProp];
          // convert other units to pixels on IE
          if (/^\d+(em|pt|%|ex)?$/i.test(value)) { 
            return ((value => {
                const oldLeft = element.style.left;
                const oldRsLeft = element.runtimeStyle.left;
                element.runtimeStyle.left = element.currentStyle.left;
                element.style.left = value || 0;
                value = `${element.style.pixelLeft}px`;
                element.style.left = oldLeft;
                element.runtimeStyle.left = oldRsLeft;
                return value;
            }))(value);
          }
          return value;
        }
    }
}