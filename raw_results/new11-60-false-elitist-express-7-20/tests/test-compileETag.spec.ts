export {}
const {compileETag} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileETag', () => {
	it('test for compileETag', async () => {
		const _valU5lt7BH = -1.0543485203894836;
		const _returnValueTKaXYx5 = await compileETag(_valU5lt7BH)
	});

	it('test for compileETag', async () => {
		const _returnValuexwx9oak = -1.1425290590221522;
		const _valNxjbi4m = () => { return _returnValuexwx9oak };
		const _returnValueUHcMEo = await compileETag(_valNxjbi4m)
	});
})