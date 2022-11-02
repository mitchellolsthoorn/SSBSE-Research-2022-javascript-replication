export {}
const {normalizeTypes} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('normalizeTypes', () => {
	it('test for normalizeTypes', async () => {
		const _lengthyagmBHO = 8.639233381319311;
		const _typesyZUa09V = {
			"length": _lengthyagmBHO
	}
		const _returnValuepbeDqEo = await normalizeTypes(_typesyZUa09V)
	});

	it('test for normalizeTypes', async () => {
		const _lengthLpf43P = -1.5535160642886794;
		const _typesJHKlv3e = {
			"length": _lengthLpf43P
	}
		const _returnValueDtCL7Yi = await normalizeTypes(_typesJHKlv3e)
	});

	it('test for normalizeTypes', async () => {
		const _typeskfjGFLt = "RLKwGfPnM88pvguSLaVAXFNLqkdtxlr3f9MJkt6x2VkTXWHo5aax";
		const _returnValuemF7x7aW = await normalizeTypes(_typeskfjGFLt)
	});
})