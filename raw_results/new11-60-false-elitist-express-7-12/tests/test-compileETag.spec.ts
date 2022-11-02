export {}
const {compileETag} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileETag', () => {
	it('test for compileETag', async () => {
		const _valnJtUioX = 9.836386755952734;
		const _returnValueL1MfPtR = await compileETag(_valnJtUioX)
	});

	it('test for compileETag', async () => {
		const _returnValued9Hj4Y = true;
		const _valr8E592c = () => { return _returnValued9Hj4Y };
		const _returnValueILADyL = await compileETag(_valr8E592c)
	});
})