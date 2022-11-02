export {}
const {normalizeType} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('normalizeType', () => {
	it('test for normalizeType', async () => {
		const _arrayValueWivdP1W = undefined;
		const _arrayValueenXLHCO = {
		
	}
		const _returnValueWXf59E = [_arrayValueWivdP1W, _arrayValueenXLHCO]
		const _indexOfTwfuxyY = () => { return _returnValueWXf59E };
		const _type4Khawu = {
			"indexOf": _indexOfTwfuxyY
	}
		const _returnValueX5a1puM = await normalizeType(_type4Khawu)
	});

	it('test for normalizeType', async () => {
		const _arrayValueBaA4h1d = null;
		const _arrayValueSnbKLU = [_arrayValueBaA4h1d]
		const _arrayValueSyqxAav = []
		const _typeSpwVYpc = [_arrayValueSnbKLU, _arrayValueSyqxAav]
		const _returnValuegDLa6V = await normalizeType(_typeSpwVYpc)
	});
})