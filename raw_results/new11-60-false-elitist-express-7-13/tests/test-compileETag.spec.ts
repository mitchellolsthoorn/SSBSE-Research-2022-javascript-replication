export {}
const {compileETag} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileETag', () => {
	it('test for compileETag', async () => {
		const _valA1bRT3h = 7.680727295609728;
		const _returnValuehY4yrnG = await compileETag(_valA1bRT3h)
	});

	it('test for compileETag', async () => {
		const _returnValuesBMCDKO = false;
		const _valh3T9R2M = () => { return _returnValuesBMCDKO };
		const _returnValuecMYouVP = await compileETag(_valh3T9R2M)
	});
})