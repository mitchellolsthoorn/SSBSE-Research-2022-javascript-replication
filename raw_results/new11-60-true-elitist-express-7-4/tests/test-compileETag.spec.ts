export {}
const {compileETag} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileETag', () => {
	it('test for compileETag', async () => {
		const _valru0Zz0B = 1.172542348248962;
		const _returnValuevyU8Gea = await compileETag(_valru0Zz0B)
	});

	it('test for compileETag', async () => {
		const _returnValuex8XYfbR = true;
		const _valzudJyft = () => { return _returnValuex8XYfbR };
		const _returnValuewIaJ9Wj = await compileETag(_valzudJyft)
	});
})