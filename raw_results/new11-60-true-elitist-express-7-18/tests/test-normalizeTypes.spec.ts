export {}
const {normalizeTypes} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('normalizeTypes', () => {
	it('test for normalizeTypes', async () => {
		const _length2tVQfw = -9.968376603194008;
		const _typesFjhP1M = {
			"length": _length2tVQfw
	}
		const _returnValuePQuIsTc = await normalizeTypes(_typesFjhP1M)
	});

	it('test for normalizeTypes', async () => {
		const _arrayValueqV3lres = "u7EcGz29XagwSUXD3NOPnz4wah1xvCbMJyzG9vQDzRnGIH";
		const _arrayValueqDMgD82 = [_arrayValueqV3lres]
		const _arrayValuevHbctD = {
		
	}
		const _typesaJ1PAJB = [_arrayValueqDMgD82, _arrayValuevHbctD]
		const _returnValuegvEXhVF = await normalizeTypes(_typesaJ1PAJB)
	});
})