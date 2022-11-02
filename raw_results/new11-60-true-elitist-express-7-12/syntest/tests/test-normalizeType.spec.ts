export {}
const {normalizeType} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('normalizeType', () => {
	it('test for normalizeType', async () => {
		const _returnValuedizXhy1 = undefined;
		const _indexOfQmGiwlq = () => { return _returnValuedizXhy1 };
		const _typezPSd7Qn = {
			"indexOf": _indexOfQmGiwlq
	}
		const _returnValueJzUTZzs = await normalizeType(_typezPSd7Qn)
	});

	it('test for normalizeType', async () => {
		const _typeuqm60bP = "mG7VgCPXXKXfpvC8Sk";
		const _returnValueOIOMVS3 = await normalizeType(_typeuqm60bP)
	});
})