export {}
const {compileETag} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileETag', () => {
	it('test for compileETag', async () => {
		const _valm2O4RPW = {
		
	}
		const _returnValue12ysLY = await compileETag(_valm2O4RPW)
	});

	it('test for compileETag', async () => {
		const _returnValuevaPdC0o = "M69syDJKAm8G8Q";
		const _valEnJAFnQ = () => { return _returnValuevaPdC0o };
		const _returnValuerlFu7XV = await compileETag(_valEnJAFnQ)
	});
})