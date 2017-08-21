// Get the time difference from now to x.
time_ago(time) {
	switch (typeof time) {
	case "number":
		break;
	case "string":
		time = +new Date(time);
		break;
	case "object":
		if (time.constructor === Date) time = time.getTime();
		break;
	default:
		time = +new Date();
	}
	const time_formats = [
		[60, "seconds", 1], // 60
		[120, "1 minute ago", "1 minute from now"], // 60*2
		[3600, "minutes", 60], // 60*60, 60
		[7200, "1 hour ago", "1 hour from now"], // 60*60*2
		[86400, "hours", 3600], // 60*60*24, 60*60
		[172800, "Yesterday", "Tomorrow"], // 60*60*24*2
		[604800, "days", 86400], // 60*60*24*7, 60*60*24
		[1209600, "Last week", "Next week"], // 60*60*24*7*4*2
		[2419200, "weeks", 604800], // 60*60*24*7*4, 60*60*24*7
		[4838400, "Last month", "Next month"], // 60*60*24*7*4*2
		[29030400, "months", 2419200], // 60*60*24*7*4*12, 60*60*24*7*4
		[58060800, "Last year", "Next year"], // 60*60*24*7*4*12*2
		[2903040000, "years", 29030400], // 60*60*24*7*4*12*100, 60*60*24*7*4*12
		[5806080000, "Last century", "Next century"], // 60*60*24*7*4*12*100*2
		[58060800000, "centuries", 2903040000] // 60*60*24*7*4*12*100*20, 60*60*24*7*4*12*100
	];
	const math = this.math;
	let seconds = math.div(math.sub(+new Date(), time), 1000);
	let token = "ago";
	let list_choice = 1;

	if (seconds == 0) {
		return "Just now";
	}
	if (seconds < 0) {
		seconds = Math.abs(seconds);
		token = "from now";
		list_choice = 2;
	}
	let i = 0;
	let format;
	while (format = time_formats[i++]) {
		if (seconds < format[0]) {
			if (typeof format[2] == "string")
				return format[list_choice];
			else
				return `${Math.floor(math.div(seconds, format[2]))} ${format[1]} ${token}`;
		}
	}
	format = time_formats[time_formats.length - 1];
	return `${Math.floor(math.div(seconds, format[2]))} ${format[1]} ${token}`;
}
sum(array) {
	return array.reduce((a, b) => this.math.add(a, b), 0);
}
multiply(array) {
	return array.reduce((a, b) => this.math.mul(a, b), 0);
}
average(array) {
	const summed = this.sum(array);
	const average = this.math.div(summed, array.length);
	return average;
}
median(array) {
	array.sort( (a, b) => this.math.sub(a, b) );
	const half = Math.floor(this.math.div(array.length,2));
	if(array.length % 2) {
		return array[half];
	}
	else {
		return this.math.div(this.math.add(array[half-1], array[half]), 2.0);
	}
}
predict(array, val, text=false) {
	const djs = this;
	function main(valC, text) {
		const first = array[0][0];
		const second = array[1][0];
		const firstVal = array[0][1];
		const secondVal = array[1][1];
		const a = djs.math.div(djs.math.sub(firstVal, secondVal), djs.math.sub(first, second));
		const b = djs.math.sub(secondVal, djs.math.mul(second, a));
		if (text == true) {
			return `f(x) = ${a}x+${b}; f(${valC}) = ${valC * a + b}`;
		}
		else {
			return valC * a + b;
		}
	}
	function patternMatching (array) {
		if (array.length > 2) {
			if (main(array[2][0], false) == array[2][1]) {
				return true;
			}
			else {
				return false;
			}
		}
		else {
			return true;
		}
	}
	if (patternMatching(array)) {
		return main(val, text);
	}
	else {
		return "DisplayJS: Error, can't find any pattern.";
	}

}
get math() {
	const exactMath = {
		add() {
			return mathFunctions.addSubDiv(arguments,0);
		},
		sub() {
			return mathFunctions.addSubDiv(arguments,1);
		},
		mul() {
			return mathFunctions.mul(arguments);
		},
		div() {
			return mathFunctions.addSubDiv(arguments,3);
		}
	};

	var mathFunctions = {
		addSubDiv(argArray, oper) {
			const args = this.countDecimals(this.validMe(argArray));
			const hComma = this.biggestComma(args);
			const shifted = oper !== 3 ? hComma:0;
			const res = this.shiftComma(this.countResult(this.toExponent(args,hComma),oper),shifted);
			this.isSafeInteger(res);
			return res;
		},
		mul(argArray) {
			const args = this.countDecimals(this.validMe(argArray));
			const intArr = [];
			let commaSum = 0;
			for (const i in args){
				commaSum += args[i].comma;
				intArr.push(args[i].integer);
			}
			return this.shiftComma(this.countResult(intArr,2),commaSum);
		},
		isSafeInteger(result) {
			if(result<=-(2 ** 53-1)||result>=(2 ** 53-1)) throw "DisplayJS: The result is not a safe integer.";
		},
		shiftComma(result, commaPos) {
			return this.toExponent(this.countDecimals([result]),-commaPos)[0];
		},
		countResult(nums, operation) {
			let result = nums[0];
			for(let i=1;i<nums.length;i++){
				switch(operation){
				case 0:
					result += nums[i];
					break;
				case 1:
					result -= nums[i];
					break;
				case 2:
					result *= nums[i];
					break;
				case 3:
					result /= nums[i];
					break;
				}
			}
			return result;
		},
		toExponent(args, commaPos) {
			const returned = [];
			for(const i in args){
				args[i].comma -= commaPos;
				const sign = args[i].comma>=0 ? "+":"";
				returned.push(Number(`${args[i].integer.toString()}e${sign}${args[i].comma}`));
			}
			return returned;
		},
		biggestComma(args) {
			const commaAr = [];
			for(const i in args){
				commaAr.push(args[i].comma);
			}
			return Math.min.apply(null,commaAr);
		},
		validMe(args) {
			if(args.length<2) throw "DisplayJS: Set at least two numerical values.";
			for(const i in args){
				args[i] = parseFloat(args[i]);
				if(typeof args[i] !== "number" || isNaN(args[i])) throw "DisplayJS: Every Math argument must be of type number.";
				if(args[i] === Number.POSITIVE_INFINITY || args[i] === Number.NEGATIVE_INFINITY) throw "DisplayJS: Every Math argument must be a numerical value between positive and negative Infinity.";
			}
			return args;
		},
		countDecimals(args) {
			const decimals = [];
			for(const i in args){
				let partDec = 0;
				const splitted = args[i].toString().split("e");
				const commaPos = splitted[0].indexOf(".");
				partDec -= commaPos !== -1 ? splitted[0].length - 1 - commaPos:0;
				partDec += isNaN(Number(splitted[1])) ? 0:Number(splitted[1]);
				splitted[0] = Number(splitted[0].replace(".",""));
				decimals.push({integer:splitted[0],comma:partDec});
			}
			return decimals;
		}
	};
	return exactMath;
}
