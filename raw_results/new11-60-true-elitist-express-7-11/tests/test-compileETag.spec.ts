export {}
const {compileETag} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileETag', () => {
	it('test for compileETag', async () => {
		const _valAgAFeX6 = 3.0876435250247987;
		const _returnValueFnPO29T = await compileETag(_valAgAFeX6)
	});

	it('test for compileETag', async () => {
		const _returnValueSPgETtZ = 6.623868710858261;
		const _valoMaw929 = () => { return _returnValueSPgETtZ };
		const _returnValueoLtduwQ = await compileETag(_valoMaw929)
	});
})