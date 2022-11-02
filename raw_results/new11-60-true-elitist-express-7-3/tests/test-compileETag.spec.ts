export {}
const {compileETag} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileETag', () => {
	it('test for compileETag', async () => {
		const _valXkl7sHN = null;
		const _returnValueZnM089 = await compileETag(_valXkl7sHN)
	});

	it('test for compileETag', async () => {
		const _arrayValueukkI4JK = {
		
	}
		const _arrayValueufPNxWm = null;
		const _returnValue7gmKev = [_arrayValueukkI4JK, _arrayValueufPNxWm]
		const _valpjsbLO9 = () => { return _returnValue7gmKev };
		const _returnValueGuJHXM = await compileETag(_valpjsbLO9)
	});
})