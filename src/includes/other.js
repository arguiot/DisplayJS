then(toCall, callback) {
	try {
		callback(toCall())
	} catch (e) {
		throw "DisplayJS: " + e;
	}
}
