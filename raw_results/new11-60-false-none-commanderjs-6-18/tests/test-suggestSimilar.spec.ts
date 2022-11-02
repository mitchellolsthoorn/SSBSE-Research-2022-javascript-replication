export {}
const {suggestSimilar} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/suggestSimilar.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('suggestSimilar', () => {
	it('test for suggestSimilar', async () => {
		const _wordmC7EdDV = undefined;
		const _candidatesHmfzFVq = undefined;
		const _returnValuenEgNDrh = await suggestSimilar(_wordmC7EdDV, _candidatesHmfzFVq)
	});

	it('test for suggestSimilar', async () => {
		const _wordk1cpSH = null;
		const _arrayValuejWtfQuI = -0.0028142663072134866;
		const _arrayValueXgR5XOF = null;
		const _candidatesmGvwOhM = [_arrayValuejWtfQuI, _arrayValueXgR5XOF]
		const _returnValueIhMswhv = await suggestSimilar(_wordk1cpSH, _candidatesmGvwOhM)
	});

	it('test for suggestSimilar', async () => {
		const _wordGPx6Guk = "eKThY9ZXg5KWpOgKTqpWWkD13ybpV5jfMp4ZzwOnIbhem9OUiwhs3vjUQAcSbhV49auF9UTvW";
		const _candidatespJ3gM7l = "lDYrGY9ZNF3aquW6KDDHgQXJbZOTkGzRU1rc6EUWkdiyEe1uikPTg8T2ry4ErCxeTmeCKV3vPy5GLZTRkVQ4p";
		const _returnValuesdHdEdH = await suggestSimilar(_wordGPx6Guk, _candidatespJ3gM7l)
	});

	it('test for suggestSimilar', async () => {
		const _wordh5amcjB = "SCxCkFD4AEnzo4a8PBvlQoiXQGeyrLUxwJALivqP6jMOXKbYFvs2OgohoNS1pVFR7LSaHAbeR2tAP7UcyX8l2ooYXe";
		const _arrayValueukf7dPX = false;
		const _arrayValueGYGFVl = 1.9389995633511052;
		const _candidatesLCaZFrs = [_arrayValueukf7dPX, _arrayValueGYGFVl]
		const _returnValuel2uvmE4 = await suggestSimilar(_wordh5amcjB, _candidatesLCaZFrs)
	});

	it('test for suggestSimilar', async () => {
		const _wordIqyoEoQ = "XOYkXZ7pLoCDx4IEb84QA9CXFFgfY0nsbhkEFPQ26XXbu";
		const _arrayValuebz0n91H = false;
		const _returnValueaqXhcLD = true;
		const _arrayValuepZWNLo5 = () => { return _returnValueaqXhcLD };
		const _arrayValuectlzdwL = {
		
	}
		const _arrayValuekVZHcQ = [_arrayValuebz0n91H, _arrayValuepZWNLo5, _arrayValuectlzdwL]
		const _arrayValuec52v5rP = {
		
	}
		const _arrayValueS53Ivl = "BhtaDhMGaGOaJ5JZ83Chi8aUoWrphIYHD8R4ywG5at6mgNObPR3iQ9RIHFYn";
		const _candidatesoG7qYxb = [_arrayValuekVZHcQ, _arrayValuec52v5rP, _arrayValueS53Ivl]
		const _returnValue77derW = await suggestSimilar(_wordIqyoEoQ, _candidatesoG7qYxb)
	});

	it('test for suggestSimilar', async () => {
		const _wordof7wtgT = "V4ib0W2lx4jiBRTwNMGToPApApLYGb3obEKsA1uqBDgSuvdtGbrYBPZt6RfEKQJCnK2OgeWgnEqVlyLLY9x1ZQOu";
		const _arrayValueexTAkDB = "8pKIEWZZHk5kP2aVncQEy8k2lfXLmWeTAB28vl2EQFEsncryPHImMU3QOOp4f87k7aPxdHpt8ho1F5qrxrkf2bfqC";
		const _arrayValuehd11BN = undefined;
		const _candidateshcFkNiG = [_arrayValueexTAkDB, _arrayValuehd11BN]
		const _returnValueTSwid6b = await suggestSimilar(_wordof7wtgT, _candidateshcFkNiG)
	});
})