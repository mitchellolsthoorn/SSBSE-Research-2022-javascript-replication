export {}
const {normalizeType} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('normalizeType', () => {
	it('test for normalizeType', async () => {
		const _arrayValuexBhkUO = undefined;
		const _returnValueVAHsckk = [_arrayValuexBhkUO]
		const _indexOflBVUl5f = () => { return _returnValueVAHsckk };
		const _typeppKPAm = {
			"indexOf": _indexOflBVUl5f
	}
		const _returnValuehtsFAGp = await normalizeType(_typeppKPAm)
	});

	it('test for normalizeType', async () => {
		const _typerE50wQr = "E6ZrQW77l5XJkdUeJpuzUYagmoIlkX8f75kytZhEfYlG4IFsxeY5fF6ZXfvF7jyVTXAz26Y2fRYhnx5SoHl";
		const _returnValueaBjsh8u = await normalizeType(_typerE50wQr)
	});
})