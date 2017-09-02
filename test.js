const $ = require("./dist/display.es6");

test("Math part", () => {
	expect($.extend({"a": 1, "b": 3}, {"a": 2, "c": 6})).toEqual({"a": 2, "b": 3, "c": 6})
	expect($.linespace(0, 20, 10)).toEqual([ 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ])
	expect($.reshape($.range(5), 2)).toEqual([ [ 0, 1 ], [ 2, 3 ], [ 4, 5 ] ])
	expect($.flatten([ [ 0, 1 ], [ 2, 3 ], [ 4, 5 ] ])).toEqual($.range(5))
	expect($.drop($.range(5), -1)).toEqual($.range(4))
	expect($.rmFromArray($.range(10), (a) => a % 2)).toEqual([ 0, 2, 4, 6, 8, 10 ])
	var aDay = 24 * 60 * 60 * 1000;
	expect($.time_ago(new Date(Date.now() - aDay))).toMatch(/Yesterday/)
	expect($.sum($.range(100))).toBe(5050)
	expect($.multiply($.arange(1, 5, 1))).toBe(120)
	expect($.average([53, 9, 8, 37, 4])).toEqual(22.2)
	expect($.median([53, 9, 8, 37, 4])).toBe(9)
	expect($.predict([[1,3],[2,5],[3,7]], 4)).toBe(9)
	// math object
	expect($.math.mul($.math.div(1, 3), 6)).toBe(2)
	expect($.math.add(0.2, 0.4)).toEqual(0.6)
})
