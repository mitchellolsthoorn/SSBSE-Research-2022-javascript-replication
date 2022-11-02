export {}
const {normalizeType} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('normalizeType', () => {
	it('test for normalizeType', async () => {
		const _returnValueLRJe6Ga = 8.605466488776813;
		const _returnValuesTzISK = () => { return _returnValueLRJe6Ga };
		const _indexOfDqlSLUW = () => { return _returnValuesTzISK };
		const _typeaWci5XK = {
			"indexOf": _indexOfDqlSLUW
	}
		const _returnValuezsw3Sdm = await normalizeType(_typeaWci5XK)
	});

	it('test for normalizeType', async () => {
		const _arrayValueWAXbSE5 = "3YWHvYQ7NaOG5NQGrN8QqO4BkmwNSPMJBUnxB4Oo1jiG8PdpkRl6U77q2NrL";
		const _typefyWKRVt = [_arrayValueWAXbSE5]
		const _returnValueiMT7E7V = await normalizeType(_typefyWKRVt)
	});
})