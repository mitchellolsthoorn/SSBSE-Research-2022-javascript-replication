export {}
const {normalizeType} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('normalizeType', () => {
	it('test for normalizeType', async () => {
		const _typeI8oQlOO = -0.3030288503815619;
		const _returnValue7KQcMp = await normalizeType(_typeI8oQlOO)
	});

	it('test for normalizeType', async () => {
		const _arrayValuei3eK6u4 = true;
		const _arrayValueQ1l3iI6 = "279jbLOyH2kJCbEUCeipCd5o89LfqY8vjJxetzSmg4Qj";
		const _arrayValueP69fHov = -1.0291266518529074;
		const _arrayValuefN8gFzz = [_arrayValuei3eK6u4, _arrayValueQ1l3iI6, _arrayValueP69fHov]
		const _arrayValueIrRiux2 = null;
		const _typenNK0Fy = [_arrayValuefN8gFzz, _arrayValueIrRiux2]
		const _returnValueGk1dhiV = await normalizeType(_typenNK0Fy)
	});
})