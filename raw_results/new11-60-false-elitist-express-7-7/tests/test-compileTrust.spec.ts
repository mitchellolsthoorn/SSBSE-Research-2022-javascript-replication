export {}
const {compileTrust} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileTrust', () => {
	it('test for compileTrust', async () => {
		const _arrayValueu7gbsEc = null;
		const _arrayValueKQsCp5B = 6.273840455444315;
		const _arrayValuekmw4i93 = true;
		const _arrayValueCrGlY6s = null;
		const _arrayValuezrDLokl = [_arrayValueKQsCp5B, _arrayValuekmw4i93, _arrayValueCrGlY6s]
		const _valzlcJroO = [_arrayValueu7gbsEc, _arrayValuezrDLokl]
		const _returnValueUePFOzU = await compileTrust(_valzlcJroO)
	});

	it('test for compileTrust', async () => {
		const _valHUd00tl = 0.6129045062050835;
		const _returnValueLEqZEA8 = await compileTrust(_valHUd00tl)
	});

	it('test for compileTrust', async () => {
		const _returnValueOgUC4Sg = -2.8681242993578726;
		const _valWWeVTj = () => { return _returnValueOgUC4Sg };
		const _returnValuervOHR2J = await compileTrust(_valWWeVTj)
	});

	it('test for compileTrust', async () => {
		const _vals36vrbO = true;
		const _returnValueM6Dc31g = await compileTrust(_vals36vrbO)
	});

	it('test for compileTrust', async () => {
		const _valhNEiVf = "5U4rohlJO7cm7raKeeY";
		const _returnValuem1c01UL = await compileTrust(_valhNEiVf)
	});
})