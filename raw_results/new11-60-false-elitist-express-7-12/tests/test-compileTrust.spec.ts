export {}
const {compileTrust} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileTrust', () => {
	it('test for compileTrust', async () => {
		const _valVAg7WYl = "tkhLtQEG5DhjYup3uA0MkZjsS4AyEN9vQqRrhDKUUz4zq";
		const _returnValuehesmfkj = await compileTrust(_valVAg7WYl)
	});

	it('test for compileTrust', async () => {
		const _arrayValuetWPyS7z = null;
		const _arrayValueqNo0YBo = -0.5858057212698764;
		const _valCa1oJZg = [_arrayValuetWPyS7z, _arrayValueqNo0YBo]
		const _returnValueuxQ9TvB = await compileTrust(_valCa1oJZg)
	});

	it('test for compileTrust', async () => {
		const _valetsnJQK = -3.7403558081081467;
		const _returnValueXedFmZ8 = await compileTrust(_valetsnJQK)
	});

	it('test for compileTrust', async () => {
		const _valI0Kv7p6 = true;
		const _returnValueUgxyKih = await compileTrust(_valI0Kv7p6)
	});

	it('test for compileTrust', async () => {
		const _returnValueDEEpAE = null;
		const _valAS2ID2 = () => { return _returnValueDEEpAE };
		const _returnValueLvKBFy = await compileTrust(_valAS2ID2)
	});
})