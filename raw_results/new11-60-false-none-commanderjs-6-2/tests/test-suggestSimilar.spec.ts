export {}
const {suggestSimilar} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/suggestSimilar.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('suggestSimilar', () => {
	it('test for suggestSimilar', async () => {
		const _wordXiQRmjJ = null;
		const _candidatesj5mkLNT = {
		
	}
		const _returnValuefwD23G2 = await suggestSimilar(_wordXiQRmjJ, _candidatesj5mkLNT)
	});

	it('test for suggestSimilar', async () => {
		const _wordoFpl1U0 = undefined;
		const _candidatesy7p7wG8 = false;
		const _returnValueIpXz45J = await suggestSimilar(_wordoFpl1U0, _candidatesy7p7wG8)
	});

	it('test for suggestSimilar', async () => {
		const _wordJtOQ5v = "DomeLyfSq2FynWC1Gzb6XOUlHeNXgVpmpQwE3sM2nOOXpqrsnF9s";
		const _arrayValueVwcjFeU = null;
		const _candidatesi5O4GWa = [_arrayValueVwcjFeU]
		const _returnValueR2LzWVO = await suggestSimilar(_wordJtOQ5v, _candidatesi5O4GWa)
	});

	it('test for suggestSimilar', async () => {
		const _wordRHY3ga = "9ddUXOi";
		const _arrayValueQYKYCR = {
		
	}
		const _arrayValue0YQbZq = null;
		const _candidatesPVagwnq = [_arrayValueQYKYCR, _arrayValue0YQbZq]
		const _returnValueGIY1pvi = await suggestSimilar(_wordRHY3ga, _candidatesPVagwnq)
	});

	it('test for suggestSimilar', async () => {
		const _words1yIgzL = "NAvh5dA3BSg";
		const _arrayValues2Ox2fi = "YSs4BvEQqOBabzT5HYGwj4RBcjoBvyCJ8SAXOxilbDs8";
		const _candidateslcmvau5 = [_arrayValues2Ox2fi]
		const _returnValue9vMTeW = await suggestSimilar(_words1yIgzL, _candidateslcmvau5)
	});

	it('test for suggestSimilar', async () => {
		const _wordYwPNNx = "XbzWwWP7cMMaM1OmsB652TvCQ1ZTqbwBQ0Ps5iuGzkFYmSEw2zThUf9UFoxVXeEubmW";
		const _candidatesInAFnG4 = "EcoWAkNAjCXngizcWiH1dlUInmc64MltunqtfNkoT2em1RmLVfKau6bqETUI5rrEeUDqOdjQcftRRJ";
		const _returnValuehZhxZ3a = await suggestSimilar(_wordYwPNNx, _candidatesInAFnG4)
	});

	it('test for suggestSimilar', async () => {
		const _wordxlnhrsW = "sCazi5QLyApHYLPcZIFrJzuUTJvrPp";
		const _arrayValueOXeKMlz = "neW";
		const _arrayValuev0Yp2e = false;
		const _arrayValueaMSunL5 = [_arrayValueOXeKMlz, _arrayValuev0Yp2e]
		const _arrayValueKbkkV45 = "oaR1D3uGN7oQd3jNd3aDdKKlbdSro8jgX";
		const _candidatestPkMrb0 = [_arrayValueaMSunL5, _arrayValueKbkkV45]
		const _returnValueiEis5H = await suggestSimilar(_wordxlnhrsW, _candidatestPkMrb0)
	});
})