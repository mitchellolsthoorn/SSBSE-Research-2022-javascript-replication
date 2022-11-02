export {}
const {suggestSimilar} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/suggestSimilar.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('suggestSimilar', () => {
	it('test for suggestSimilar', async () => {
		const _returnValueZhcKUpJ = "U";
		const _word327y0i = () => { return _returnValueZhcKUpJ };
		const _candidatesFhZnJHJ = "W0RWmvzqNQuiziD32Zgfue1x6NcbAX41zrlWN8r368QVbunQZWzuMVlItUKdJxNqzJIUIpcPyDzGzrW7GffSbAeJt";
		const _returnValueGPeOK2l = await suggestSimilar(_word327y0i, _candidatesFhZnJHJ)
	});

	it('test for suggestSimilar', async () => {
		const _returnValueCyqHcxQ = null;
		const _startsWithubAYkVF = () => { return _returnValueCyqHcxQ };
		const _sliceBkiDvKX = true;
		const _lengthkCoacrQ = 9.204739017508654;
		const _wordDkJwOQY = {
			"startsWith": _startsWithubAYkVF,
		"slice": _sliceBkiDvKX,
		"length": _lengthkCoacrQ
	}
		const _arrayValueQrmcKyg = 2.960133318570735;
		const _arrayValuePXXZEg = null;
		const _candidatess4V2HEX = [_arrayValueQrmcKyg, _arrayValuePXXZEg]
		const _returnValuervKypAo = await suggestSimilar(_wordDkJwOQY, _candidatess4V2HEX)
	});

	it('test for suggestSimilar', async () => {
		const _wordxGUFhYU = "W7q85CXjt6uMsf13eLEZv066Dcr7zumvjDW75Ici2RsXyk92SLK2TdWHGUMTMUEBBoy5HiLh7zHMKtZVd3XFH2LA";
		const _candidatesYvV0Bud = "IeAwjhP8AUsDbTLo1VaYrWmYl9R1BwAnfUZ5hFrC";
		const _returnValueWK6Vz6a = await suggestSimilar(_wordxGUFhYU, _candidatesYvV0Bud)
	});

	it('test for suggestSimilar', async () => {
		const _arrayValuezFbIOkM = -6.710358710291257;
		const _wordeaFVZTH = [_arrayValuezFbIOkM]
		const _arrayValuebvPUWQg = -2.5591965134316847;
		const _returnValuepAx7164 = [_arrayValuebvPUWQg]
		const _candidatesIP4YVei = () => { return _returnValuepAx7164 };
		const _returnValueeXfC0tC = await suggestSimilar(_wordeaFVZTH, _candidatesIP4YVei)
	});

	it('test for suggestSimilar', async () => {
		const _returnValueaph0uOQ = 6.5998854841525905;
		const _startsWithvwuePl0 = () => { return _returnValueaph0uOQ };
		const _returnValueeA2HD0j = 9.803340515362422;
		const _sliceZesXlxg = () => { return _returnValueeA2HD0j };
		const _lengthwo6uTe9 = 8.32273170303705;
		const _wordUEoKQw = {
			"startsWith": _startsWithvwuePl0,
		"slice": _sliceZesXlxg,
		"length": _lengthwo6uTe9
	}
		const _arrayValueh061VGt = null;
		const _candidatesQt1cMV2 = [_arrayValueh061VGt]
		const _returnValueDwfC4rn = await suggestSimilar(_wordUEoKQw, _candidatesQt1cMV2)
	});

	it('test for suggestSimilar', async () => {
		const _arrayValueaBbmHS4 = true;
		const _returnValueV2MJohq = [_arrayValueaBbmHS4]
		const _startsWith04JlBi = () => { return _returnValueV2MJohq };
		const _returnValueGiyqYWk = {
		
	}
		const _slice4wImlh = () => { return _returnValueGiyqYWk };
		const _lengthJkJ1A8 = 6.091801856881112;
		const _wordTgpemE = {
			"startsWith": _startsWith04JlBi,
		"slice": _slice4wImlh,
		"length": _lengthJkJ1A8
	}
		const _candidatesVO8HJFN = "EI3s6ps6pXclPW5Tf";
		const _returnValueSjqzH0n = await suggestSimilar(_wordTgpemE, _candidatesVO8HJFN)
	});

	it('test for suggestSimilar', async () => {
		const _wordS5vxmmX = "StmKGO3HuroUAnf94iQ7i";
		const _arrayValueFA1bwRv = "A0xuB1OwoGruqDE3E7wWcOBF0zmJeEozyRMMzJXPvFMSRQyXTpzRnhwNYgRUAB6xvhWOi5n";
		const _candidatesZVlAwAP = [_arrayValueFA1bwRv]
		const _returnValueLhS0lZM = await suggestSimilar(_wordS5vxmmX, _candidatesZVlAwAP)
	});

	it('test for suggestSimilar', async () => {
		const _wordScHdAqg = "hqGJYfEjK70u1k7bP76L2Q4yY40DXeCcPpq7vnoeMycttVkm6vApBSWsxHkmPqpY8YOFWY6DqewZx4aClLM8PBIvJTetHwUdmu";
		const _arrayValueJ4WouGv = "RHKgNKrsljLs9ugeBmyhbHaVweFmmDbvuxePhOfzfhRVbuQbWQso77nT445Gm7MvMOdDjFgjmGc8VKFFo7SNxyjgO3SQExSJorp";
		const _candidatesLlPhjpt = [_arrayValueJ4WouGv]
		const _returnValueMsJG3ti = await suggestSimilar(_wordScHdAqg, _candidatesLlPhjpt)
	});
})