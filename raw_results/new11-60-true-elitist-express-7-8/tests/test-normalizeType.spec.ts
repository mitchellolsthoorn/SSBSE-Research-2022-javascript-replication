export {}
const {normalizeType} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('normalizeType', () => {
	it('test for normalizeType', async () => {
		const _returnValuexR1dbWq = null;
		const _indexOfayLAlxI = () => { return _returnValuexR1dbWq };
		const _typeTENjaCT = {
			"indexOf": _indexOfayLAlxI
	}
		const _returnValuesk7ofmL = await normalizeType(_typeTENjaCT)
	});

	it('test for normalizeType', async () => {
		const _typeMOAu3l = "MkRh7kFeQIdv9vB6aURu8hO38b13gayqZwYzM";
		const _returnValueLRFUQuw = await normalizeType(_typeMOAu3l)
	});
})