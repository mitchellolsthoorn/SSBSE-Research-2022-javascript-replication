export {}
const {compileETag} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileETag', () => {
	it('test for compileETag', async () => {
		const _val0wvfBv = -2.952188369096465;
		const _returnValueuuU5voI = await compileETag(_val0wvfBv)
	});

	it('test for compileETag', async () => {
		const _returnValueZsoQpv = null;
		const _valEEfZCQv = () => { return _returnValueZsoQpv };
		const _returnValueGoNISRu = await compileETag(_valEEfZCQv)
	});
})