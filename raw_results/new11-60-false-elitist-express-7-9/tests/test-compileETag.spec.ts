export {}
const {compileETag} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileETag', () => {
	it('test for compileETag', async () => {
		const _valMTsk34Q = 8.766940717199923;
		const _returnValuehnn8XEO = await compileETag(_valMTsk34Q)
	});

	it('test for compileETag', async () => {
		const _returnValueQUqp0Yc = -1.4994044881936262;
		const _valbbvzozL = () => { return _returnValueQUqp0Yc };
		const _returnValuei07ZQ3N = await compileETag(_valbbvzozL)
	});
})