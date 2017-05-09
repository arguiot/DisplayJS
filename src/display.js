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
	ajax (url, callback) {
		const xmlhttp = new XMLHttpRequest();
	    xmlhttp.onreadystatechange = () => {
	        if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
	            callback(xmlhttp.responseText);
	        }
	    }
	    xmlhttp.open("GET", url, true);
	    xmlhttp.send();
	}
	hasClass (el, className) {
	    if (el.classList)
	        return el.classList.contains(className);
	    return !!el.className.match(new RegExp(`(\\s|^)${className}(\\s|$)`));
	}
	addClass (el, className) {
	    if (el.classList)
	        el.classList.add(className)
	    else if (!hasClass(el, className))
	        el.className += ` ${className}`;
	}
	removeClass (el, className) {
	    if (el.classList)
	        el.classList.remove(className)
	    else if (hasClass(el, className))
	    {
	        const reg = new RegExp(`(\\s|^)${className}(\\s|$)`);
	        el.className = el.className.replace(reg, ' ');
	    }
	}
	toogleClass(ele, class1) {
	  const classes = ele.className;
	  const regex = new RegExp(`\\b${class1}\\b`);
	  const hasOne = classes.match(regex);
	  class1 = class1.replace(/\s+/g, '');
	  if (hasOne)
	    ele.className = classes.replace(regex, '');
	  else
	    ele.className = classes + class1;
	}
}