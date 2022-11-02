export {}
const {normalizeType} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('normalizeType', () => {
	it('test for normalizeType', async () => {
		const _returnValueblDgMeH = null;
		const _indexOfugMLF7 = () => { return _returnValueblDgMeH };
		const _typeIOskSNp = {
			"indexOf": _indexOfugMLF7
	}
		const _returnValueduR4KB = await normalizeType(_typeIOskSNp)
	});

	it('test for normalizeType', async () => {
		const _arrayValueJT4UcP = undefined;
		const _typeidOGLcL = [_arrayValueJT4UcP]
		const _returnValuemin6qkY = await normalizeType(_typeidOGLcL)
	});
})