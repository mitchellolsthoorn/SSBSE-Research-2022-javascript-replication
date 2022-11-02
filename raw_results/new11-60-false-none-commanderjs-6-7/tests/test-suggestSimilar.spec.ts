export {}
const {suggestSimilar} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/suggestSimilar.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('suggestSimilar', () => {
	it('test for suggestSimilar', async () => {
		const _arrayValuebBEIQ6X = 4.356673986684793;
		const _wordqJobFSB = [_arrayValuebBEIQ6X]
		const _arrayValueuo3MtCK = null;
		const _arrayValueUidJdp = undefined;
		const _arrayValueoCKAyZN = "ad8dVcUJsOrQ5G760iLXx";
		const _candidatesXkcdv1w = [_arrayValueuo3MtCK, _arrayValueUidJdp, _arrayValueoCKAyZN]
		const _returnValuen9Vlpgn = await suggestSimilar(_wordqJobFSB, _candidatesXkcdv1w)
	});

	it('test for suggestSimilar', async () => {
		const _wordlrX2M4g = "0fnUCviMSYNy2W5ORGYhK3qXeqVCAMwTyCb770zrfjiyDG19L88TaQNdiz";
		const _candidatesel8ELi = undefined;
		const _returnValuegPmJPUP = await suggestSimilar(_wordlrX2M4g, _candidatesel8ELi)
	});

	it('test for suggestSimilar', async () => {
		const _wordjBurS2W = "BIkbfFB2GIjx1OLgwtcEF6PBpFOlEAZ1MvipRFm0cI2CHuuzUy";
		const _candidateshR9Kd2g = "odBx3SX5vk1HwyClMd7SX3dhl2v7aPwK8Si8p27BO8uo7Dlu0AqVJ32HD7Yd46TiEAVVDSlbbE7BD6l31agpyKCMyv6MEXeEUK";
		const _returnValueIjpBe9T = await suggestSimilar(_wordjBurS2W, _candidateshR9Kd2g)
	});

	it('test for suggestSimilar', async () => {
		const _wordenb1Au2 = "DnKlRfX5iCmX8n04MJ";
		const _arrayValuefGaBqv5 = {
		
	}
		const _arrayValue1bLkDH = true;
		const _arrayValueXxhKNF = null;
		const _arrayValueZIP2u4e = "5GqQu3cFletFCceWdQi43Q9wr54TK1iY4qV8vST3hkgZYtRgm3RvhMkCkoYDugruHLoW3WNlxwEa13nQjwX";
		const _candidatesnU5Ofo = [_arrayValuefGaBqv5, _arrayValue1bLkDH, _arrayValueXxhKNF, _arrayValueZIP2u4e]
		const _returnValuesAknW7j = await suggestSimilar(_wordenb1Au2, _candidatesnU5Ofo)
	});

	it('test for suggestSimilar', async () => {
		const _wordJd80rXS = "xVfw4NvdJl5zuVSKGjkH2vbgnVeGP2RvUU87wuOxgcaRxqVA4QpuZTyiL4g2fJwl6H7jME";
		const _arrayValueijbfH1r = "kM4f6WNmaRY6S9oIuaqWfq48srel3kYJFHfAShoQM7mcqH2tJgb9pLIoQXIwaReBu9wb";
		const _arrayValuet7jRaqm = null;
		const _candidatesDy1W4lA = [_arrayValueijbfH1r, _arrayValuet7jRaqm]
		const _returnValuejl4OmNw = await suggestSimilar(_wordJd80rXS, _candidatesDy1W4lA)
	});

	it('test for suggestSimilar', async () => {
		const _wordqlshIZ7 = "regRg1GumhX91ep0h6kvAIJMrZypHH9";
		const _arrayValueNdgQ3is = false;
		const _arrayValueLgzM5Wm = "Kut69Pe6XLSb05xytUMUau8RFOHyjjX1HGmXbnG7QZ5uQidgmzpW";
		const _candidatesfI6JyxQ = [_arrayValueNdgQ3is, _arrayValueLgzM5Wm]
		const _returnValuexXz65rl = await suggestSimilar(_wordqlshIZ7, _candidatesfI6JyxQ)
	});
})