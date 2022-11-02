export {}
const {compileETag} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileETag', () => {
	it('test for compileETag', async () => {
		const _valwke70l = "oYBP2PhGPuB1GSwQkduHPYce";
		const _returnValuer6pPuuB = await compileETag(_valwke70l)
	});

	it('test for compileETag', async () => {
		const _returnValuewGRDbma = undefined;
		const _valSkXSoX1 = () => { return _returnValuewGRDbma };
		const _returnValueOfdiznn = await compileETag(_valSkXSoX1)
	});
})