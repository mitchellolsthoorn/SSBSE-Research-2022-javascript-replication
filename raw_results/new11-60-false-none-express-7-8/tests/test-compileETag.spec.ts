export {}
const {compileETag} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileETag', () => {
	it('test for compileETag', async () => {
		const _valCSSl8Pu = undefined;
		const _returnValuemLViPKG = await compileETag(_valCSSl8Pu)
	});

	it('test for compileETag', async () => {
		const _returnValueTMU7AB8 = null;
		const _valPDwwQF = () => { return _returnValueTMU7AB8 };
		const _returnValuewaJB1Z = await compileETag(_valPDwwQF)
	});
})