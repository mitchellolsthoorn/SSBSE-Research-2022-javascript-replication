export {}
const {compileETag} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileETag', () => {
	it('test for compileETag', async () => {
		const _valT0y4Fnm = {
		
	}
		const _returnValuevWnbqOM = await compileETag(_valT0y4Fnm)
	});

	it('test for compileETag', async () => {
		const _returnValueWPVbRds = undefined;
		const _valfmIGBn4 = () => { return _returnValueWPVbRds };
		const _returnValueZfjL3Pw = await compileETag(_valfmIGBn4)
	});
})