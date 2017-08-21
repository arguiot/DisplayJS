// Object.prototype.watch() implementation
live(watched, callback) {
	const ObjUtils = {
		watch(object, property, onPropertyChange) {
			const descriptor = Object.getOwnPropertyDescriptor(object, property);

			if (typeof descriptor === "undefined") {
				throw new Error(`DisplayJS: Invalid descriptor for property: ${property}, object: ${object}`);
			}

			if (typeof onPropertyChange !== "function") {
				throw new Error(`DisplayJS: Invalid onPropertyChange handler: ${onPropertyChange}`);
			}

			let value = object[property];

			Object.defineProperty(object, property, {
				enumerable: true,
				configurable: true,
				get() {
					return value;
				},
				set(newValue) {
					if (newValue === value) return;
					onPropertyChange(object, property, newValue, value);
					return value = newValue;
				},
			});
		},
		watchAll(object, onPropertyChange) {
			if (typeof onPropertyChange !== "function") {
				throw new Error(`DisplayJS: Invalid onPropertyChange handler: ${onPropertyChange}`);
			}

			for (const property in object) {
				this.watch(object, property, onPropertyChange);
			}
		},
	};
	ObjUtils.watchAll(watched, (obj, prop, newVal, oldVal) => {
		callback(obj, prop, newVal, oldVal);
	});
}
