export {}
import split from "../../.syntest/instrumented/benchmark/top10npm/lodash/split.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('split', () => {
	it('test for split', async () => {
		const _stringhCn5f2v = "6bLH53DxAL2AiaLv3oa7zsXtol6esYRrYLti2NJDaqfqpjUTgniMGxSjmXNx8FAzDg";
		const _separator8MNAWX = "KPfnCkgcpJGiCAQ8f1xf53XOqO22oTpzYl1dcLWYFlMie3u2T4asVvdmYf655";
		const _limitfz2VZR = {
		
	}
		const _returnValuecZWaVRH = await split(_stringhCn5f2v, _separator8MNAWX, _limitfz2VZR)
	});

	it('test for split', async () => {
		const _stringVFUGFTg = -0.9219887502189508;
		const _separatorzn2ufOX = null;
		const _limitSkOb0K = undefined;
		const _returnValueFjuIyqD = await split(_stringVFUGFTg, _separatorzn2ufOX, _limitSkOb0K)
	});

	it('test for split', async () => {
		const _stringG0cbF0q = "o8yJxSSiVGkQW0Fu5G1cnXQw8vTnNICnOJ";
		const _separatorRgf8ywr = "WVfwq7IOxi4Pdt";
		const _limitMZ8rBTy = true;
		const _returnValueCVvBUph = await split(_stringG0cbF0q, _separatorRgf8ywr, _limitMZ8rBTy)
	});
})