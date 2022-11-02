export {}
const {compileETag} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileETag', () => {
	it('test for compileETag', async () => {
		const _arrayValueLInXGnh = null;
		const _valtRbXiZj = [_arrayValueLInXGnh]
		const _returnValuedNH43is = await compileETag(_valtRbXiZj)
	});

	it('test for compileETag', async () => {
		const _returnValueLyRWYmo = []
		const _valtjeWxvp = () => { return _returnValueLyRWYmo };
		const _returnValuexZGHOPi = await compileETag(_valtjeWxvp)
	});
})