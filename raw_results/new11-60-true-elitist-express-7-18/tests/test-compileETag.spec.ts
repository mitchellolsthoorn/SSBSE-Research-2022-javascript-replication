export {}
const {compileETag} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileETag', () => {
	it('test for compileETag', async () => {
		const _valdp8rbZu = 0.2128617331478324;
		const _returnValueC1WyRDf = await compileETag(_valdp8rbZu)
	});

	it('test for compileETag', async () => {
		const _arrayValueUD2FeKS = undefined;
		const _arrayValueIH0Z3h = -6.475922958018422;
		const _arrayValueiPCfNAs = null;
		const _returnValueTjp1L9C = [_arrayValueUD2FeKS, _arrayValueIH0Z3h, _arrayValueiPCfNAs]
		const _valr64qjb = () => { return _returnValueTjp1L9C };
		const _returnValueJZ2o5dk = await compileETag(_valr64qjb)
	});
})