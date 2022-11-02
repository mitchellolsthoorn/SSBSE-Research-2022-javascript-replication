export {}
const {normalizeType} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('normalizeType', () => {
	it('test for normalizeType', async () => {
		const _arrayValueGL8naJk = undefined;
		const _arrayValueF06vt2V = [_arrayValueGL8naJk]
		const _arrayValueoRIN5so = "eWpD2CSXPsMjLTBhJiS2IZqwsV22Kq2pgbf3f";
		const _returnValueGPHGEn1 = [_arrayValueF06vt2V, _arrayValueoRIN5so]
		const _indexOfX7quP7 = () => { return _returnValueGPHGEn1 };
		const _typeKFHcfzY = {
			"indexOf": _indexOfX7quP7
	}
		const _returnValuephYvq1o = await normalizeType(_typeKFHcfzY)
	});

	it('test for normalizeType', async () => {
		const _typeQpv4HeA = "cMc89cXDqXvLI5";
		const _returnValueb9HVSpH = await normalizeType(_typeQpv4HeA)
	});
})