// create your own $.var() like function
custom(targetAttr, callback, push) {
	const custom_push = () => {
		const elements = document.querySelectorAll(`[${targetAttr}]`);
		for (let i = 0; i < elements.length; i++) {
			const attr = elements[i].getAttribute(targetAttr);
			callback(elements[i], attr);
		}
	};
	if (!push) {
		custom_push();
	} else if (push == true) {
		custom_push();
		this.live(this.obj, () => {
			custom_push();
		});
	} else {
		window.setInterval(() => {
			custom_push();
		}, push);
	}
}
