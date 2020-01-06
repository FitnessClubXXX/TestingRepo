const expect = require('chai').expect;
const s = require('./server.js');

describe('should pass', () => {
	it('should pass', () => {
		expect(true).to.equal(true);
	});
});

describe('test calc', () => {
	it('shoudl give 4', () => {
		expect(s.calculate(2,2)).to.equal(4);
	});
});
