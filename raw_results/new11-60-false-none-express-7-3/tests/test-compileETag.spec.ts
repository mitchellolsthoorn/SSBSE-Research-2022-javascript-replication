export {}
const {compileETag} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileETag', () => {
	it('test for compileETag', async () => {
		const _valZLjU0Tu = null;
		const _returnValuecXtUPpr = await compileETag(_valZLjU0Tu)
	});

	it('test for compileETag', async () => {
		const _returnValueg7R2s47 = undefined;
		const _valqyyQtC = () => { return _returnValueg7R2s47 };
		const _returnValueeBgcipV = await compileETag(_valqyyQtC)
	});
})