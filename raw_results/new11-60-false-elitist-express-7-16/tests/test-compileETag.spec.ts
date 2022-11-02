export {}
const {compileETag} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileETag', () => {
	it('test for compileETag', async () => {
		const _valjFBaYQy = -9.21465818273511;
		const _returnValueRLvIbMK = await compileETag(_valjFBaYQy)
	});

	it('test for compileETag', async () => {
		const _returnValueWkDiDLU = -0.432881990653037;
		const _valOJHWCaD = () => { return _returnValueWkDiDLU };
		const _returnValueaehimwf = await compileETag(_valOJHWCaD)
	});
})