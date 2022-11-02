export {}
const {compileETag} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileETag', () => {
	it('test for compileETag', async () => {
		const _valvPFYCR1 = undefined;
		const _returnValueQC4x2S = await compileETag(_valvPFYCR1)
	});

	it('test for compileETag', async () => {
		const _arrayValuec8oqrO0 = "0iCUBajjB44GyOX4ci9OSgvDGHQQutNYuCCE9XGhVAR";
		const _returnValueuk4LrdJ = [_arrayValuec8oqrO0]
		const _valvTI9uOO = () => { return _returnValueuk4LrdJ };
		const _returnValuez6ukeLl = await compileETag(_valvTI9uOO)
	});
})