export {}
const {normalizeTypes} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('normalizeTypes', () => {
	it('test for normalizeTypes', async () => {
		const _typesU9GyjYX = undefined;
		const _returnValueCd4KhJX = await normalizeTypes(_typesU9GyjYX)
	});

	it('test for normalizeTypes', async () => {
		const _arrayValueGCdF5Mh = null;
		const _arrayValuelos28g = null;
		const _arrayValueaicfPQ5 = null;
		const _arrayValueLpSNo7h = [_arrayValueGCdF5Mh, _arrayValuelos28g, _arrayValueaicfPQ5]
		const _arrayValuePcuPFzB = {
		
	}
		const _typesq7odkXl = [_arrayValueLpSNo7h, _arrayValuePcuPFzB]
		const _returnValueljur1NR = await normalizeTypes(_typesq7odkXl)
	});

	it('test for normalizeTypes', async () => {
		const _typesa6J0igy = -5.657304768124479;
		const _returnValueJFz7tpS = await normalizeTypes(_typesa6J0igy)
	});
})