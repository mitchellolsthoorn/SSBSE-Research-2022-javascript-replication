export {}
const {normalizeType} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('normalizeType', () => {
	it('test for normalizeType', async () => {
		const _returnValuen1hJ1pH = null;
		const _returnValuelQdsDsX = () => { return _returnValuen1hJ1pH };
		const _indexOfONzC3vj = () => { return _returnValuelQdsDsX };
		const _typeN7qO764 = {
			"indexOf": _indexOfONzC3vj
	}
		const _returnValueMTVZFSV = await normalizeType(_typeN7qO764)
	});

	it('test for normalizeType', async () => {
		const _typeNBrTfSi = "1Cwjqkl1x5nLYCGPTDj6woWwbXPkyqwRktBw7UqNsJvVP3TfuCU1zKXtAFwM8";
		const _returnValueKkychCZ = await normalizeType(_typeNBrTfSi)
	});
})