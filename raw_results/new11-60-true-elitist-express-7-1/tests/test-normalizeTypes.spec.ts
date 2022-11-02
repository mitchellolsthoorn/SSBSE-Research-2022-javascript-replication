export {}
const {normalizeTypes} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('normalizeTypes', () => {
	it('test for normalizeTypes', async () => {
		const _lengthboYKZTB = 2.432870636016366;
		const _typesoDkGZ7C = {
			"length": _lengthboYKZTB
	}
		const _returnValueleEnwt3 = await normalizeTypes(_typesoDkGZ7C)
	});

	it('test for normalizeTypes', async () => {
		const _length9XZzTO = -3.5586261635442025;
		const _typesGax6SK = {
			"length": _length9XZzTO
	}
		const _returnValueVdFjlz3 = await normalizeTypes(_typesGax6SK)
	});

	it('test for normalizeTypes', async () => {
		const _returnValueiuMmcFu = undefined;
		const _arrayValueRNPZPlW = () => { return _returnValueiuMmcFu };
		const _arrayValueuHolx8X = [_arrayValueRNPZPlW]
		const _arrayValueFiAXgy = null;
		const _typesDh63fm = [_arrayValueuHolx8X, _arrayValueFiAXgy]
		const _returnValueCiJadhT = await normalizeTypes(_typesDh63fm)
	});
})