export {}
const {suggestSimilar} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/suggestSimilar.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('suggestSimilar', () => {
	it('test for suggestSimilar', async () => {
		const _wordApy1LBO = undefined;
		const _returnValueGhmSf17 = "nlUTXA5U6LtgTMgVygmVEcFxrhWDZqwhWJOozhH4P";
		const _candidatesxGzLLBu = () => { return _returnValueGhmSf17 };
		const _returnValueLMpzKg4 = await suggestSimilar(_wordApy1LBO, _candidatesxGzLLBu)
	});

	it('test for suggestSimilar', async () => {
		const _wordJ5P9uQr = []
		const _candidatesj27MjCx = {
		
	}
		const _returnValueeAYqFgl = await suggestSimilar(_wordJ5P9uQr, _candidatesj27MjCx)
	});

	it('test for suggestSimilar', async () => {
		const _wordf7ywboT = "gME7wlkplIteRjfKqhCHAwaFwAAJVfNplV";
		const _arrayValueow1HYTt = null;
		const _candidatesf3QviCv = [_arrayValueow1HYTt]
		const _returnValueKPHEX6P = await suggestSimilar(_wordf7ywboT, _candidatesf3QviCv)
	});

	it('test for suggestSimilar', async () => {
		const _wordMfkTz93 = "Rh1P5M5yTvkUIB3zYyFwb5e6hcjhvpJWgMwppzcyUgt7uq9kdScHwNhTGtrPtK4klZaMWkRzNCnFUSBWXoFOSba3eLgnN";
		const _arrayValuelAjmzYD = 2.8505896866661455;
		const _candidatesRdX9PyL = [_arrayValuelAjmzYD]
		const _returnValueAu3iWYk = await suggestSimilar(_wordMfkTz93, _candidatesRdX9PyL)
	});

	it('test for suggestSimilar', async () => {
		const _wordjZcBseU = "pdyy8SeeBNUJUnxIxGv6mbDNosKdt4UFnAuN66MtDMf5FEsYjgeoXKxiOl7NeYICK7w5274b2ytdRR1K";
		const _arrayValueoX0ePMy = null;
		const _arrayValueZjVpm8m = [_arrayValueoX0ePMy]
		const _candidatesEc8M3PQ = [_arrayValueZjVpm8m]
		const _returnValueHAvopeE = await suggestSimilar(_wordjZcBseU, _candidatesEc8M3PQ)
	});

	it('test for suggestSimilar', async () => {
		const _wordZUSnfl = "pmt8NxzPQjPHxaePNgjl3gw9IqhWQMNKIMAdxWty3BIymG3nY5v7ipOTVvXpK2bhcqmeesPjWUUG5g49RMia3SpHUuJySj4X";
		const _arrayValueuGO2or = "I6z7jlkqSTGgeoSCXGcAOcC6FbibpNipHCEJ0ymas8iL5z2yVumK8fDMN";
		const _candidatesBCylHY = [_arrayValueuGO2or]
		const _returnValueMndSJse = await suggestSimilar(_wordZUSnfl, _candidatesBCylHY)
	});
})