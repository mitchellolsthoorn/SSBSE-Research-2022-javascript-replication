export {}
const {compileETag} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileETag', () => {
	it('test for compileETag', async () => {
		const _valHZXDL8P = 1.883724906669622;
		const _returnValuekvkXYPN = await compileETag(_valHZXDL8P)
	});

	it('test for compileETag', async () => {
		const _returnValueQSmMiL = null;
		const _valiWQPrjf = () => { return _returnValueQSmMiL };
		const _returnValueRKfQ6HJ = await compileETag(_valiWQPrjf)
	});
})