export {}
const {normalizeTypes} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('normalizeTypes', () => {
	it('test for normalizeTypes', async () => {
		const _lengthFPQoxO = 6.29807510691538;
		const _types5Pxw69 = {
			"length": _lengthFPQoxO
	}
		const _returnValueFTtkmiK = await normalizeTypes(_types5Pxw69)
	});

	it('test for normalizeTypes', async () => {
		const _lengthWks7nUA = -4.57463633457142;
		const _typesSwObExd = {
			"length": _lengthWks7nUA
	}
		const _returnValueA0bJ3R0 = await normalizeTypes(_typesSwObExd)
	});

	it('test for normalizeTypes', async () => {
		const _arrayValuevpVpk5H = undefined;
		const _returnValueXiwQ0o = null;
		const _arrayValueIfVZEki = () => { return _returnValueXiwQ0o };
		const _arrayValueAdUaTvK = [_arrayValuevpVpk5H, _arrayValueIfVZEki]
		const _arrayValueqLt8IA7 = 7.577397841056218;
		const _arrayValuecVvu1qL = -8.252210746762403;
		const _typesZbrHYE = [_arrayValueAdUaTvK, _arrayValueqLt8IA7, _arrayValuecVvu1qL]
		const _returnValuePHYLTvV = await normalizeTypes(_typesZbrHYE)
	});
})