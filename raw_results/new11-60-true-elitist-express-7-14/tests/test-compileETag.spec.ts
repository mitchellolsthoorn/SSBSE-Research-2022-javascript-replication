export {}
const {compileETag} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileETag', () => {
	it('test for compileETag', async () => {
		const _valSgaYPOv = 7.028826446831761;
		const _returnValueNq5SxpN = await compileETag(_valSgaYPOv)
	});

	it('test for compileETag', async () => {
		const _returnValuexCyK8DB = "ddHhV8nubq2Sn5AdttbRfpk4zJLuGV1pi2rCxRqdxPtrQp4";
		const _val1Tv8Kb = () => { return _returnValuexCyK8DB };
		const _returnValuej0yYeA = await compileETag(_val1Tv8Kb)
	});
})