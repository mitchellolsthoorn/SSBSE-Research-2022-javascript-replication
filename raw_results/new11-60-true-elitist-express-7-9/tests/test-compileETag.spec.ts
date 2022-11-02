export {}
const {compileETag} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileETag', () => {
	it('test for compileETag', async () => {
		const _returnValue98oznL = -3.6588830335855356;
		const _valCvZoFXX = () => { return _returnValue98oznL };
		const _returnValuem7Bjyga = await compileETag(_valCvZoFXX)
	});

	it('test for compileETag', async () => {
		const _valv3CyBh = 5.102081574905206;
		const _returnValuew0kl9D6 = await compileETag(_valv3CyBh)
	});
})