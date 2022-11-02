export {}
const {normalizeType} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('normalizeType', () => {
	it('test for normalizeType', async () => {
		const _returnValuexxD5SNx = null;
		const _indexOfjGpkuvi = () => { return _returnValuexxD5SNx };
		const _typepoALuHr = {
			"indexOf": _indexOfjGpkuvi
	}
		const _returnValueYdUUpDH = await normalizeType(_typepoALuHr)
	});

	it('test for normalizeType', async () => {
		const _arrayValuetN2WyfR = 7.759851869075199;
		const _arrayValueMYjkrPT = -8.331528418053919;
		const _arrayValuexPr8NwQ = null;
		const _arrayValueu0dCPfw = undefined;
		const _arrayValueyv2HlN = "MDXsqcJsShVis66IOmgxkQ18LQLHhQ7GSayj4dvGEddarXmdV";
		const _arrayValueamrmTa = [_arrayValueu0dCPfw, _arrayValueyv2HlN]
		const _returnValue3Kq5Om = [_arrayValuetN2WyfR, _arrayValueMYjkrPT, _arrayValuexPr8NwQ, _arrayValueamrmTa]
		const _returnValueicZO6fJ = () => { return _returnValue3Kq5Om };
		const _arrayValuejfkxY8 = () => { return _returnValueicZO6fJ };
		const _arrayValueqkR7bBn = true;
		const _arrayValueUt9HnCe = true;
		const _arrayValueAi8Py2n = true;
		const _arrayValueYoOHRtF = [_arrayValueUt9HnCe, _arrayValueAi8Py2n]
		const _arrayValuerQlnQn = null;
		const _typeBzYuzMc = [_arrayValuejfkxY8, _arrayValueqkR7bBn, _arrayValueYoOHRtF, _arrayValuerQlnQn]
		const _returnValuek6OOiMi = await normalizeType(_typeBzYuzMc)
	});
})