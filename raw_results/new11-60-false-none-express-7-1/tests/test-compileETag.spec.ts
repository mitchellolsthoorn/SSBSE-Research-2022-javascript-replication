export {}
const {compileETag} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileETag', () => {
	it('test for compileETag', async () => {
		const _returnValueTUgFF8Q = "3iJ1Jgx3GKwMo6jzzWKaTKGMNprF";
		const _valPvdrgIw = () => { return _returnValueTUgFF8Q };
		const _returnValueOj6BD5S = await compileETag(_valPvdrgIw)
	});

	it('test for compileETag', async () => {
		const _valDs9cU5 = {
		
	}
		const _returnValueAwuMcT0 = await compileETag(_valDs9cU5)
	});
})