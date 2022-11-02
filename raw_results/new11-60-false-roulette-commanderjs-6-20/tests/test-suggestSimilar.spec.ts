export {}
const {suggestSimilar} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/suggestSimilar.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('suggestSimilar', () => {
	it('test for suggestSimilar', async () => {
		const _returnValueE1oHTTO = null;
		const _wordqsow0Zi = () => { return _returnValueE1oHTTO };
		const _lengthpVuCmtH = -5.029601144437562;
		const _returnValueFiCUgaR = false;
		const _mapBbdWAee = () => { return _returnValueFiCUgaR };
		const _returnValueoVxS0Xe = -3.082564580787654;
		const _forEachh7Jpj0o = () => { return _returnValueoVxS0Xe };
		const _candidatesK7p6fnj = {
			"length": _lengthpVuCmtH,
		"map": _mapBbdWAee,
		"forEach": _forEachh7Jpj0o
	}
		const _returnValueIkwBj2h = await suggestSimilar(_wordqsow0Zi, _candidatesK7p6fnj)
	});

	it('test for suggestSimilar', async () => {
		const _arrayValueX5qfjar = {
		
	}
		const _arrayValueCA8CZo = "Kjr1Z8K4n";
		const _arrayValueNJcFdeS = [_arrayValueCA8CZo]
		const _wordHE5faE = [_arrayValueX5qfjar, _arrayValueNJcFdeS]
		const _arrayValuel7FY3EL = {
		
	}
		const _arrayValuewtuBwjF = undefined;
		const _arrayValuem1YCEii = -3.106618143019241;
		const _arrayValueMaQ2Whz = -7.375098675860026;
		const _arrayValueiPsmBTQ = null;
		const _arrayValueY6IuwyS = [_arrayValuem1YCEii, _arrayValueMaQ2Whz, _arrayValueiPsmBTQ]
		const _arrayValuerv2m6As = null;
		const _returnValuezAMaS13 = [_arrayValuel7FY3EL, _arrayValuewtuBwjF, _arrayValueY6IuwyS, _arrayValuerv2m6As]
		const _candidateslqJKf1x = () => { return _returnValuezAMaS13 };
		const _returnValueI1t7pw9 = await suggestSimilar(_wordHE5faE, _candidateslqJKf1x)
	});

	it('test for suggestSimilar', async () => {
		const _wordJPzQQZT = "gC2J9lJ0uXCH3Fq2Y";
		const _arrayValuePPMgkB = "pAVJkB7BSIXw5779XM24n0nK6KZXBXKXInUtZ7DvNt2k41K";
		const _arrayValueRJQabe6 = []
		const _arrayValueQAkQfYt = -6.083915757476958;
		const _candidateslS9HT9Z = [_arrayValuePPMgkB, _arrayValueRJQabe6, _arrayValueQAkQfYt]
		const _returnValueDWGsPa = await suggestSimilar(_wordJPzQQZT, _candidateslS9HT9Z)
	});

	it('test for suggestSimilar', async () => {
		const _returnValueC3Cy63 = true;
		const _startsWithBVhzfaB = () => { return _returnValueC3Cy63 };
		const _returnValue55qOx9 = undefined;
		const _sliceCdXy1g = () => { return _returnValue55qOx9 };
		const _lengthKZNT7qV = -2.7859849628238598;
		const _wordSz0Fdzd = {
			"startsWith": _startsWithBVhzfaB,
		"slice": _sliceCdXy1g,
		"length": _lengthKZNT7qV
	}
		const _candidatesbAMJKbv = "5cRWe3tc3GoRtyUlz0HVupzDqoBUKuBQS2MjfcAuPedxo59gjmM4jxn1ALLCe2wtMNauD45wgtZSEJWpd35TgZE";
		const _returnValueFXADPM = await suggestSimilar(_wordSz0Fdzd, _candidatesbAMJKbv)
	});

	it('test for suggestSimilar', async () => {
		const _wordTuAfZ3j = "mJ";
		const _arrayValuesMAPqRG = 2.5934958317880117;
		const _arrayValueab9CPLn = null;
		const _returnValueQHKpxdh = "rKnRa2x5ajFGr81Kr2flIrdmeV16nne7Hp";
		const _arrayValueiLlnLP0 = () => { return _returnValueQHKpxdh };
		const _arrayValueJhEyMzU = [_arrayValueab9CPLn, _arrayValueiLlnLP0]
		const _candidatesJXe7vD = [_arrayValuesMAPqRG, _arrayValueJhEyMzU]
		const _returnValueNVrVCZO = await suggestSimilar(_wordTuAfZ3j, _candidatesJXe7vD)
	});
})