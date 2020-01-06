const expect = require('chai').expect;
const calculate = require('./lib.js').calculate;

describe('should pass', () => {
	it('should pass', () => {
		expect(true).to.equal(true);
	});
});

describe('test calc', () => {
	it('shoudl give 4', () => {
		expect(calculate(2,2)).to.equal(4);
	});
});
