export {}
const {compileETag} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileETag', () => {
	it('test for compileETag', async () => {
		const _valCYfoZCx = -8.181152969782735;
		const _returnValueOu2vwwj = await compileETag(_valCYfoZCx)
	});

	it('test for compileETag', async () => {
		const _returnValueB2zJKvn = null;
		const _valA8aK87P = () => { return _returnValueB2zJKvn };
		const _returnValueERUfZWA = await compileETag(_valA8aK87P)
	});
})