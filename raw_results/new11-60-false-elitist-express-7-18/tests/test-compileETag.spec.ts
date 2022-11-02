export {}
const {compileETag} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileETag', () => {
	it('test for compileETag', async () => {
		const _valsJy3Zqu = -9.5314959817729;
		const _returnValuev6VBrQV = await compileETag(_valsJy3Zqu)
	});

	it('test for compileETag', async () => {
		const _arrayValuevoU1Bww = null;
		const _arrayValuepuwja7C = -0.2805756123678229;
		const _returnValueNRYduPw = [_arrayValuevoU1Bww, _arrayValuepuwja7C]
		const _vallCkfRj = () => { return _returnValueNRYduPw };
		const _returnValueuh5mUUN = await compileETag(_vallCkfRj)
	});
})