export {}
const {normalizeTypes} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('normalizeTypes', () => {
	it('test for normalizeTypes', async () => {
		const _arrayValueiaYJHip = "2rOX1xlvUhh3DExqsVKJMzqLtrOGpO9YiANQpQVKtJpJERfx6Fxg1RzLBfmuTeX9k3NoCrObsHGDLSO2CU2";
		const _arrayValuerDVYCH = 6.321685152053714;
		const _lengthxXt7Ji = [_arrayValueiaYJHip, _arrayValuerDVYCH]
		const _typesHtwK7LN = {
			"length": _lengthxXt7Ji
	}
		const _returnValuecJDDc6F = await normalizeTypes(_typesHtwK7LN)
	});

	it('test for normalizeTypes', async () => {
		const _length9ZGzta = true;
		const _typesUTHOQ8N = {
			"length": _length9ZGzta
	}
		const _returnValuegzpzXK5 = await normalizeTypes(_typesUTHOQ8N)
	});

	it('test for normalizeTypes', async () => {
		const _typesEhtg77L = "VRpM2TYP23OrOr46PwGD8vhiFecSxxoWHFNtJOwyzE4HvGM24zlvpdV04FTsjVvLJGkbpg8zlWcJRLSPYoOWb";
		const _returnValueMwMeoHR = await normalizeTypes(_typesEhtg77L)
	});
})