export {}
const {compileTrust} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileTrust', () => {
	it('test for compileTrust', async () => {
		const _arrayValueP01Ov7i = "6lMBpkI9CcPr2h3uYS86Z4wEVtxqaUPjpL1T3vfn8Mkmcl3jfRkUb";
		const _valReZoEm8 = [_arrayValueP01Ov7i]
		const _returnValuerLhS0SQ = await compileTrust(_valReZoEm8)
	});

	it('test for compileTrust', async () => {
		const _returnValueiCN8KHa = null;
		const _val4UKZ5G = () => { return _returnValueiCN8KHa };
		const _returnValuefE3nfUb = await compileTrust(_val4UKZ5G)
	});

	it('test for compileTrust', async () => {
		const _valaDV6Jct = -3.872854212438175;
		const _returnValueWlGnF1N = await compileTrust(_valaDV6Jct)
	});

	it('test for compileTrust', async () => {
		const _valdtJWpGe = "5e03zaLdpXtOoqQwkDArFhNECFYkiVjqH9BzdUWUkC80KRg6TnEmyLx";
		const _returnValueLcaqJtk = await compileTrust(_valdtJWpGe)
	});

	it('test for compileTrust', async () => {
		const _valpzU5vP6 = true;
		const _returnValueTKWGghY = await compileTrust(_valpzU5vP6)
	});
})