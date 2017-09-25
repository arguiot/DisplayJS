// Similar to jQuery's $.load();
load (el, url, callback=() => {}) {
	el = this.s(el);
	this.ajax(url, "GET", "", text => {
		try {
			el[0].innerHTML = text
			callback();
		} catch(e) {
			callback(e);
		}

	});
}
ajax(url, method, data, callback, header="application/x-www-form-urlencoded; charset=UTF-8") {
	const request = new XMLHttpRequest();
	request.open(method, url, true);
	request.setRequestHeader("Content-Type", header);
	request.onload = () => {
		if (request.status >= 200 && request.status < 400) {
			const data = request.responseText;
			callback(data, request);
		} else {
			console.error("DisplayJS error: The ajax request returned an error.");
		}
	};
	request.onerror = () => {
		// There was a connection error of some sort
		console.error("DisplayJS error: The ajax request returned an error.");
	};
	request.send(data);
}
get(url, callback, parse=false) {
	this.ajax(url, "GET", "", (data) => {
		parse ? callback(JSON.parse(data)) : callback(data)
	})
}
