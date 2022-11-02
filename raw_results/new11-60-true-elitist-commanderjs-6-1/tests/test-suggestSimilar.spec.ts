export {}
const {suggestSimilar} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/suggestSimilar.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('suggestSimilar', () => {
	it('test for suggestSimilar', async () => {
		const _returnValuecgzBvnC = "f8K4p1joHzQjYRTraI6Hzu25VN80CkZkaSAaysRNRkn6cebSyhCPKG8P9Y3n7VIFUeNaTRKLPGLrl";
		const _startsWithdH8n53t = () => { return _returnValuecgzBvnC };
		const _returnValueQQwkW0 = null;
		const _sliceVYucWKp = () => { return _returnValueQQwkW0 };
		const _lengthZSRkts = -2.212424174877415;
		const _wordqLhdEr7 = {
			"startsWith": _startsWithdH8n53t,
		"slice": _sliceVYucWKp,
		"length": _lengthZSRkts
	}
		const _lengthpnICYc = -1.1220116715150965;
		const _returnValuevd84FOh = {
		
	}
		const _mapsp5tDmA = () => { return _returnValuevd84FOh };
		const _returnValue97EKmP = undefined;
		const _forEachSjZtI1C = () => { return _returnValue97EKmP };
		const _candidatesPvGRox = {
			"length": _lengthpnICYc,
		"map": _mapsp5tDmA,
		"forEach": _forEachSjZtI1C
	}
		const _returnValueBSCgGsY = await suggestSimilar(_wordqLhdEr7, _candidatesPvGRox)
	});

	it('test for suggestSimilar', async () => {
		const _wordCxY93FF = false;
		const _candidatesDgi3bng = false;
		const _returnValueT0yupEQ = await suggestSimilar(_wordCxY93FF, _candidatesDgi3bng)
	});

	it('test for suggestSimilar', async () => {
		const _returnValueZaoJ1eX = true;
		const _startsWithemd1ix = () => { return _returnValueZaoJ1eX };
		const _returnValueUoXfEgP = undefined;
		const _slicepPv34RY = () => { return _returnValueUoXfEgP };
		const _lengthfvW1kto = -6.801455697569656;
		const _wordCi4fWt6 = {
			"startsWith": _startsWithemd1ix,
		"slice": _slicepPv34RY,
		"length": _lengthfvW1kto
	}
		const _candidatesPWSgdqm = "71QmnmMnnIQMHe4MMhp1I4mYkw1V91cBVXGPzb";
		const _returnValuelWtt8c8 = await suggestSimilar(_wordCi4fWt6, _candidatesPWSgdqm)
	});

	it('test for suggestSimilar', async () => {
		const _wordBm4Qkug = "yNbRYCjwiGAqXbVw57kWokaVW1EFeLXX8QtghSuZg19BsSJ4o5Cys2cc6NVpAym5V42OsMPtCOTcGyNUbbGetTBhQj47UeiT";
		const _arrayValuepbG1WJT = "1SOilvU3qmcvBiEdJklOsiXnUOikiHlTfiG6qarFbSMsqobT3Vip3IsqXtOw7dfNjtc9NVfCbNPv";
		const _arrayValuePcb42NJ = undefined;
		const _candidatesj6oyoRg = [_arrayValuepbG1WJT, _arrayValuePcb42NJ]
		const _returnValuePPiLN2 = await suggestSimilar(_wordBm4Qkug, _candidatesj6oyoRg)
	});

	it('test for suggestSimilar', async () => {
		const _wordFiU7YQM = "4rDKsT6e7MNaylf4ErNm4yZgOcStrz8h8iCQ6HUrR7LziBO3l9paUMCh3sovSj8j2TaFnqmvogNgAsAwl7NHqBicqQt2dfFx";
		const _arrayValuebudepvO = true;
		const _arrayValueKT7ImbK = false;
		const _candidatesoQTTfRc = [_arrayValuebudepvO, _arrayValueKT7ImbK]
		const _returnValueNyCq6c = await suggestSimilar(_wordFiU7YQM, _candidatesoQTTfRc)
	});
})