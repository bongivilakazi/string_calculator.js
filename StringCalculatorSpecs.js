describe("Add", function(){
	it("should return 0 if the string passed in is of length 0", function(){
		expect(add("")).toBe(0);
	});
	it("should return a single number as it is.", function(){
		expect(add("309")).toBe(309);
	});
	it("should return the sum of two numbers.", function(){
		expect(add("309,21")).toBe(330);//(1)
	});
	it("should handle an unknown amount of numbers.", function(){
		expect(add("5,5,5,5,5,5,5")).toBe(35);//i think its not needed
	});
	it("should handle newline characters between numbers.", function(){
		expect(add("33\n7,\n,4")).toBe(44);//(3)
	});
	it("should handle different delimiters.", function(){
		expect(add("//;\n1;2ddddff")).toBe(3);//(7)
	});
	it("should ignore all numbers larger than 1000.", function(){
		expect(add("//[***100000dfdf1000dfd3][[[9]1[{{2}")).toBe(1015)//(6)
	});
});
