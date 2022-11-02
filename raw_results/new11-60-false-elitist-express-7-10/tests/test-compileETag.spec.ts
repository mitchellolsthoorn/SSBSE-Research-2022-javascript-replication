export {}
const {compileETag} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileETag', () => {
	it('test for compileETag', async () => {
		const _valVfQLYrI = 5.33880080520451;
		const _returnValuejHlFGGe = await compileETag(_valVfQLYrI)
	});

	it('test for compileETag', async () => {
		const _returnValueBqLeO5 = "fVcVsaVUmovC09d3l";
		const _valNQ5sMmW = () => { return _returnValueBqLeO5 };
		const _returnValueJ2jtRFw = await compileETag(_valNQ5sMmW)
	});
})