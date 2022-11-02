export {}
const {normalizeTypes} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('normalizeTypes', () => {
	it('test for normalizeTypes', async () => {
		const _lengthfuN8Xf = null;
		const _typesUb6K9G2 = {
			"length": _lengthfuN8Xf
	}
		const _returnValueNxjHLEs = await normalizeTypes(_typesUb6K9G2)
	});

	it('test for normalizeTypes', async () => {
		const _lengthQpTKskB = 7.558516255382251;
		const _typesi5OZSRx = {
			"length": _lengthQpTKskB
	}
		const _returnValueZNjaGx4 = await normalizeTypes(_typesi5OZSRx)
	});

	it('test for normalizeTypes', async () => {
		const _typesrNnJgDg = "JeTdmgCl8N78LI4qfxw65vffxl4cOUl9";
		const _returnValuerf8a1PP = await normalizeTypes(_typesrNnJgDg)
	});
})