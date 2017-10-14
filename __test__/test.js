const djs = require(path.join(testFileDir, "../dist/display.js"));
eye.describe("Math part", () => {
	eye.test("$.extend()", "node",
		$ => $(djs.extend({"a": 1, "b": 3}, {"a": 2, "c": 6})).Equal({"a": 2, "b": 3, "c": 6})
	)
	eye.test("$.linespace()", "node",
		$ => $(djs.linespace(0, 20, 10)).Equal([ 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ])
	)
	eye.test("$.reshape()", "node",
		$ => $(djs.reshape(djs.range(5), 2)).Equal([ [ 0, 1 ], [ 2, 3 ], [ 4, 5 ] ])
	)
	eye.test("$.flatten()", "node",
		$ => $(djs.flatten([ [ 0, 1 ], [ 2, 3 ], [ 4, 5 ] ])).Equal(djs.range(5))
	)
	eye.test("$.drop()", "node",
		$ => $(djs.drop(djs.range(5), -1)).Equal(djs.range(4))
	)
	eye.test("$.rmFromArray()", "node",
		$ => $(djs.rmFromArray(djs.range(10), a => a % 2 == 0)).Equal([ 1, 3, 5, 7, 9 ])
	)
	var aDay = 24 * 60 * 60 * 1000;
	eye.test("$.time_ago()", "node",
		$ => $(djs.time_ago(new Date(Date.now() - aDay))).Match(/Yesterday/)
	)
	eye.test("$.sum()", "node",
		$ => $(djs.sum(djs.range(100))).Equal(5050)
	)
	eye.test("$.multiply()", "node",
		$ => $(djs.multiply(djs.arange(1, 5, 1))).Equal(120)
	)
	eye.test("$.average()", "node",
		$ => $(djs.average([53, 9, 8, 37, 4])).Equal(22.2)
	)
	eye.test("$.median()", "node",
		$ => $(djs.median([53, 9, 8, 37, 4])).Equal(9)
	)
	eye.test("$.predict()", "node",
		$ => $(djs.predict([[1,3],[2,5],[3,7]], 4)).Equal(9)
	)
	eye.test("$.math", "node",
		$ => $(djs.math.mul(djs.math.div(1, 3), 6)).Equal(2),
		$ => $(djs.math.add(0.2, 0.4)).Equal(0.6)
	)
})
eye.test("DOM", "browser", path.join(testFileDir, "dom.html"))
