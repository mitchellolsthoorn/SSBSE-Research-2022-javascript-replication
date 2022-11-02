export {}
const {normalizeTypes} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('normalizeTypes', () => {
	it('test for normalizeTypes', async () => {
		const _lengthp0eDAnu = 1.8994541153367095;
		const _typesRWe0ITD = {
			"length": _lengthp0eDAnu
	}
		const _returnValueYAzxurO = await normalizeTypes(_typesRWe0ITD)
	});

	it('test for normalizeTypes', async () => {
		const _arrayValuedgu7ZGC = null;
		const _arrayValueLaYKTb3 = -0.18673442442963584;
		const _lengthIIZx1Zv = [_arrayValuedgu7ZGC, _arrayValueLaYKTb3]
		const _typesQ1NRopU = {
			"length": _lengthIIZx1Zv
	}
		const _returnValuefE5e0T = await normalizeTypes(_typesQ1NRopU)
	});

	it('test for normalizeTypes', async () => {
		const _typesiqK0Bpu = "Fbhqnmm4f9Kw8cM8mGgsvVSz1ztejjhMfLmVWO6aeinrHmLGiUuIpJV7AhY0URsXntFhvQk1Cz";
		const _returnValueAfnZmte = await normalizeTypes(_typesiqK0Bpu)
	});
})