export {}
const {normalizeType} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('normalizeType', () => {
	it('test for normalizeType', async () => {
		const _returnValuedwQDjsC = null;
		const _indexOfuB3jt6 = () => { return _returnValuedwQDjsC };
		const _typeWp9k0Fe = {
			"indexOf": _indexOfuB3jt6
	}
		const _returnValueHGaeqy = await normalizeType(_typeWp9k0Fe)
	});

	it('test for normalizeType', async () => {
		const _returnValueSzHGMxF = -1.2596026066865065;
		const _indexOfpBuyIce = () => { return _returnValueSzHGMxF };
		const _typeixSVXQ2 = {
			"indexOf": _indexOfpBuyIce
	}
		const _returnValueKjV2G3m = await normalizeType(_typeixSVXQ2)
	});
})