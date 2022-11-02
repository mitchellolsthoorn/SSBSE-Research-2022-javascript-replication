export {}
const {normalizeType} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('normalizeType', () => {
	it('test for normalizeType', async () => {
		const _arrayValueTy1RIzF = false;
		const _arrayValuet1hXyt3 = [_arrayValueTy1RIzF]
		const _arrayValueTdeEkGk = false;
		const _typemGK3ADP = [_arrayValuet1hXyt3, _arrayValueTdeEkGk]
		const _returnValuemzZHKeC = await normalizeType(_typemGK3ADP)
	});
})