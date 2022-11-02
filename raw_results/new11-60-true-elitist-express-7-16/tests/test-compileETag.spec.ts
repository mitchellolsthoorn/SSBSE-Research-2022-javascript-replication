export {}
const {compileETag} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileETag', () => {
	it('test for compileETag', async () => {
		const _valhuOGJGA = -1.7318614423523755;
		const _returnValueHSwTuUX = await compileETag(_valhuOGJGA)
	});

	it('test for compileETag', async () => {
		const _returnValueJQKBB6S = undefined;
		const _valzVxKQog = () => { return _returnValueJQKBB6S };
		const _returnValuecGV2VHB = await compileETag(_valzVxKQog)
	});
})