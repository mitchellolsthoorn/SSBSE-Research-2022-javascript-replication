export {}
const {normalizeType} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('normalizeType', () => {
	it('test for normalizeType', async () => {
		const _returnValueTEgYZGV = undefined;
		const _returnValueFOwzz9U = () => { return _returnValueTEgYZGV };
		const _returnValueI267E0 = () => { return _returnValueFOwzz9U };
		const _typem5xuXM0 = () => { return _returnValueI267E0 };
		const _returnValueAaBlIu9 = await normalizeType(_typem5xuXM0)
	});

	it('test for normalizeType', async () => {
		const _arrayValueUqVe4BX = -4.940434559652517;
		const _arrayValueMxJJ1yT = "kTjXNCYvgKSWBM8WBACcjnUdfZqThfXtl9jyj1PAyeMGNEbDI9eHefswSM89WfDe";
		const _arrayValueyk8rr5 = [_arrayValueUqVe4BX, _arrayValueMxJJ1yT]
		const _arrayValuegxlDijk = null;
		const _type94nWgk = [_arrayValueyk8rr5, _arrayValuegxlDijk]
		const _returnValueXXvJ4ns = await normalizeType(_type94nWgk)
	});
})