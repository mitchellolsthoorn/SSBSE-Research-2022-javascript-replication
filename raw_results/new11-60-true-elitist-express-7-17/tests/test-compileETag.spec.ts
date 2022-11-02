export {}
const {compileETag} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileETag', () => {
	it('test for compileETag', async () => {
		const _valtoW0pZQ = 3.6287527481642616;
		const _returnValueeRMnnms = await compileETag(_valtoW0pZQ)
	});

	it('test for compileETag', async () => {
		const _returnValueBKdjHO = -2.6144649238682476;
		const _valYt69h2N = () => { return _returnValueBKdjHO };
		const _returnValuey99rMcF = await compileETag(_valYt69h2N)
	});
})