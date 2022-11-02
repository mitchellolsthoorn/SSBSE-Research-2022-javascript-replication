export {}
const {compileETag} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileETag', () => {
	it('test for compileETag', async () => {
		const _arrayValueo7ZmWGd = undefined;
		const _arrayValuet6QAeN4 = undefined;
		const _valMQT3FYs = [_arrayValueo7ZmWGd, _arrayValuet6QAeN4]
		const _returnValueSdJcumA = await compileETag(_valMQT3FYs)
	});

	it('test for compileETag', async () => {
		const _returnValueM83EMfZ = null;
		const _valCTpwWkp = () => { return _returnValueM83EMfZ };
		const _returnValuecmbftGM = await compileETag(_valCTpwWkp)
	});
})