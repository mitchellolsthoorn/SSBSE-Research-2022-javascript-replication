export {}
const {suggestSimilar} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/suggestSimilar.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('suggestSimilar', () => {
	it('test for suggestSimilar', async () => {
		const _returnValueLo9XbWB = undefined;
		const _startsWithYwM4rX = () => { return _returnValueLo9XbWB };
		const _returnValuedKsMTES = true;
		const _slicemhhPeFy = () => { return _returnValuedKsMTES };
		const _lengthxjIAj2m = 6.020067642891732;
		const _wordMGIjxOr = {
			"startsWith": _startsWithYwM4rX,
		"slice": _slicemhhPeFy,
		"length": _lengthxjIAj2m
	}
		const _lengthZ2aIWXc = 9.388945140115329;
		const _arrayValueSU3zu68 = -4.430694188300526;
		const _arrayValueM9Y7z26 = [_arrayValueSU3zu68]
		const _arrayValuegpMkAId = "I9zSbbJJeeuka6uoYkKI";
		const _returnValueeFlyegg = [_arrayValueM9Y7z26, _arrayValuegpMkAId]
		const _arrayValueHDmBZjS = () => { return _returnValueeFlyegg };
		const _returnValueTCR2MoY = "KxTUE7CA37rw1dfEMvQWe8riY6NZkd2MhHfodV3UHFmoIqiG3pYmGvoJ28plrgG";
		const _arrayValueg4uhYbF = () => { return _returnValueTCR2MoY };
		const _arrayValueFeO0SP = undefined;
		const _arrayValueZKijnzT = [_arrayValueHDmBZjS, _arrayValueg4uhYbF, _arrayValueFeO0SP]
		const _arrayValueCsCidFT = [_arrayValueZKijnzT]
		const _arrayValueMMnpB2J = 1.4752151884420979;
		const _returnValueIQw4o5h = [_arrayValueCsCidFT, _arrayValueMMnpB2J]
		const _mapCAbjm3i = () => { return _returnValueIQw4o5h };
		const _forEachF3Nae8F = "JKPkKPu6";
		const _candidatesvgaf6TG = {
			"length": _lengthZ2aIWXc,
		"map": _mapCAbjm3i,
		"forEach": _forEachF3Nae8F
	}
		const _returnValue81Dcut = await suggestSimilar(_wordMGIjxOr, _candidatesvgaf6TG)
	});

	it('test for suggestSimilar', async () => {
		const _returnValueNyLYnYH = undefined;
		const _startsWithxwcLwZN = () => { return _returnValueNyLYnYH };
		const _returnValueRCZG00 = 8.076570146347724;
		const _returnValue54pO2O = () => { return _returnValueRCZG00 };
		const _slicewCYE9uj = () => { return _returnValue54pO2O };
		const _lengthpSqoFS = 8.839114028316505;
		const _wordr37b87 = {
			"startsWith": _startsWithxwcLwZN,
		"slice": _slicewCYE9uj,
		"length": _lengthpSqoFS
	}
		const _candidatesXBgZhM1 = "X4yY5hTgMjIvOTYiHSCMeFmbDG8tbW6PqLnrvSgvHbiSL7rSXCz4HoYFT54eoL5QqnpKrv48nOjQsYiq";
		const _returnValuevaksdJZ = await suggestSimilar(_wordr37b87, _candidatesXBgZhM1)
	});

	it('test for suggestSimilar', async () => {
		const _wordJMvxmX8 = false;
		const _returnValue4E3NGf = undefined;
		const _candidatesghYDOpZ = () => { return _returnValue4E3NGf };
		const _returnValueCse4Cua = await suggestSimilar(_wordJMvxmX8, _candidatesghYDOpZ)
	});

	it('test for suggestSimilar', async () => {
		const _returnValueqMlwrtd = false;
		const _arrayValueDAv1WqG = () => { return _returnValueqMlwrtd };
		const _returnValueExPUdAo = [_arrayValueDAv1WqG]
		const _returnValuegOKlTuO = () => { return _returnValueExPUdAo };
		const _startsWithKhI4lHP = () => { return _returnValuegOKlTuO };
		const _returnValueiDaQYFn = 5.423519262481605;
		const _sliceqAmSh92 = () => { return _returnValueiDaQYFn };
		const _lengthJ4Fk1lJ = 5.04435855593618;
		const _wordnhhWyJR = {
			"startsWith": _startsWithKhI4lHP,
		"slice": _sliceqAmSh92,
		"length": _lengthJ4Fk1lJ
	}
		const _candidatesPlQTLc = "GqSC0URu6AGJg5wEmY52xNDMkI2jWtD";
		const _returnValueBJMuwUH = await suggestSimilar(_wordnhhWyJR, _candidatesPlQTLc)
	});

	it('test for suggestSimilar', async () => {
		const _returnValuewq3uQV = false;
		const _startsWithLoFaxAK = () => { return _returnValuewq3uQV };
		const _returnValueEgc8HcT = true;
		const _slicebHEMUhH = () => { return _returnValueEgc8HcT };
		const _lengthKgpLKjh = false;
		const _wordA3Qq1V8 = {
			"startsWith": _startsWithLoFaxAK,
		"slice": _slicebHEMUhH,
		"length": _lengthKgpLKjh
	}
		const _arrayValueeT8hNDI = "6S7avpEWYO6U0hVEzJwepEu5uPoWiVE3pA0M";
		const _arrayValuePs92f3 = false;
		const _arrayValuesOTb9x0 = true;
		const _candidatesoq8bgZL = [_arrayValueeT8hNDI, _arrayValuePs92f3, _arrayValuesOTb9x0]
		const _returnValuevGNdWdb = await suggestSimilar(_wordA3Qq1V8, _candidatesoq8bgZL)
	});
})