export {}
const {suggestSimilar} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/suggestSimilar.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('suggestSimilar', () => {
	it('test for suggestSimilar', async () => {
		const _worde5vlGj7 = "vGOKF4a31b";
		const _lengthwU0Gwls = 4.47576849440561;
		const _returnValuewiKEWX = 3.0679779051347804;
		const _mapxnmtQCQ = () => { return _returnValuewiKEWX };
		const _returnValueWMqNbHF = undefined;
		const _forEachH0frOZe = () => { return _returnValueWMqNbHF };
		const _candidatess4CM09q = {
			"length": _lengthwU0Gwls,
		"map": _mapxnmtQCQ,
		"forEach": _forEachH0frOZe
	}
		const _returnValueDIDutpA = await suggestSimilar(_worde5vlGj7, _candidatess4CM09q)
	});

	it('test for suggestSimilar', async () => {
		const _arrayValueOzNxpa5 = null;
		const _arrayValuevDZTBk6 = {
		
	}
		const _arrayValueVoA2MyA = 6.365092027609762;
		const _returnValueEAu3qFH = [_arrayValueOzNxpa5, _arrayValuevDZTBk6, _arrayValueVoA2MyA]
		const _startsWithVoNj4M6 = () => { return _returnValueEAu3qFH };
		const _returnValuegHbNJIr = "dQawcsuVeuGpBNt7t9tgHPUWpzlFfrlTEc65MdKCD";
		const _slicexn3qKc9 = () => { return _returnValuegHbNJIr };
		const _length7ieEpU = -9.600172783068958;
		const _wordcXjYRkF = {
			"startsWith": _startsWithVoNj4M6,
		"slice": _slicexn3qKc9,
		"length": _length7ieEpU
	}
		const _arrayValuefgOOzy1 = undefined;
		const _arrayValueiT2sYAr = "KEbpFC3aLjexHnSPstaTKqdpHCkLE2bNkeT";
		const _returnValueTNUNSBF = null;
		const _returnValueUSyOaeK = () => { return _returnValueTNUNSBF };
		const _arrayValueatJA2bX = () => { return _returnValueUSyOaeK };
		const _arrayValueDdYuRVt = [_arrayValuefgOOzy1, _arrayValueiT2sYAr, _arrayValueatJA2bX]
		const _arrayValueohOC6wW = "7c2RX2n1SbehBu85slooxLEAxwYNjwxwKkOwOl5qOGjB";
		const _candidatesFxCVLo4 = [_arrayValueDdYuRVt, _arrayValueohOC6wW]
		const _returnValuebzqkht = await suggestSimilar(_wordcXjYRkF, _candidatesFxCVLo4)
	});

	it('test for suggestSimilar', async () => {
		const _wordbrs6oSs = "l4uKtsVmItDhJ1J3kBO374jpqKLBIuBdrWvyTX93ZQ5C1V3Id";
		const _arrayValueDBmQ1tv = 5.604070441595923;
		const _returnValueN0gBvcM = 0.6946500840518901;
		const _arrayValuekzF6tH0 = () => { return _returnValueN0gBvcM };
		const _arrayValueq6vHg2n = "0MyXEPaaECsvmOa8HykJjW5MGFTq99YkY9o1xHvo9Q";
		const _arrayValueInWlGu = [_arrayValueq6vHg2n]
		const _arrayValueNclCelh = [_arrayValueDBmQ1tv, _arrayValuekzF6tH0, _arrayValueInWlGu]
		const _arrayValuepsgzQR = undefined;
		const _arrayValueY0VOjaQ = -7.498164999104783;
		const _arrayValueGhS36Z8 = null;
		const _returnValuefLkQpwZ = [_arrayValueGhS36Z8]
		const _arrayValueLfCe2vG = () => { return _returnValuefLkQpwZ };
		const _arrayValueThNvElW = [_arrayValueY0VOjaQ, _arrayValueLfCe2vG]
		const _arrayValuelxeNCRM = [_arrayValueNclCelh, _arrayValuepsgzQR, _arrayValueThNvElW]
		const _arrayValueSXhzRi = true;
		const _arrayValuebysehLU = false;
		const _arrayValueKVijMcF = true;
		const _arrayValueOocCVvO = [_arrayValuelxeNCRM, _arrayValueSXhzRi, _arrayValuebysehLU, _arrayValueKVijMcF]
		const _arrayValueVjfCmtr = {
		
	}
		const _arrayValuevmTZGy = null;
		const _candidatesiAlwrF2 = [_arrayValueOocCVvO, _arrayValueVjfCmtr, _arrayValuevmTZGy]
		const _returnValueGSzy9Hb = await suggestSimilar(_wordbrs6oSs, _candidatesiAlwrF2)
	});

	it('test for suggestSimilar', async () => {
		const _wordsB3lHg9 = "wCnsWDV3WYCCEgb8po0H7kP3b5wzwGewU79jcO1yJeZ4DwiXEIhQe7JoHV2EJcXPTIr4bkwVOz2DFz";
		const _returnValuefRUULDt = "eE900G1KQXZNIBs328DTW3JkRTdEs6a5VnL8gB9bNYlEFCz7b32nsI7AwRzhpHQKUHV";
		const _candidatesmaPUIQK = () => { return _returnValuefRUULDt };
		const _returnValuesmUPVI7 = await suggestSimilar(_wordsB3lHg9, _candidatesmaPUIQK)
	});
})