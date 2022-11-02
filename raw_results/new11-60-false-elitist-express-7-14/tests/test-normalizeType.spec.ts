export {}
const {normalizeType} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('normalizeType', () => {
	it('test for normalizeType', async () => {
		const _returnValueZlhhw2r = -9.400666860492379;
		const _indexOfnuJlmXx = () => { return _returnValueZlhhw2r };
		const _typeZVY21by = {
			"indexOf": _indexOfnuJlmXx
	}
		const _returnValueG3J0DIs = await normalizeType(_typeZVY21by)
	});

	it('test for normalizeType', async () => {
		const _typev0T37C = "y4WKimCSdBHyboZphVeOn7Ve5ymPwJAtXcCjuLxtBp3IJXeJTqD3crQYXgmslTq1a3e4foNSqSwU1Z0Y11ii1qy0evpRraPQB8";
		const _returnValueOJQmnNF = await normalizeType(_typev0T37C)
	});
})