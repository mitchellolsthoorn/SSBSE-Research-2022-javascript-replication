export {}
const {suggestSimilar} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/suggestSimilar.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('suggestSimilar', () => {
	it('test for suggestSimilar', async () => {
		const _returnValueRq58Nyr = {
		
	}
		const _startsWithIgWQrw8 = () => { return _returnValueRq58Nyr };
		const _returnValueocQfKjp = 7.659903090429879;
		const _slicer7mYFN = () => { return _returnValueocQfKjp };
		const _lengthXmUzTeH = 7.505275674792436;
		const _wordgneYvCm = {
			"startsWith": _startsWithIgWQrw8,
		"slice": _slicer7mYFN,
		"length": _lengthXmUzTeH
	}
		const _candidateszTNFNf3 = 8.299437022357822;
		const _returnValueDXmVuJD = await suggestSimilar(_wordgneYvCm, _candidateszTNFNf3)
	});

	it('test for suggestSimilar', async () => {
		const _returnValueAb1TE9m = "jCEOlEn2P36ODMLM888rphQhK6YDRmvuSXVU9NZalbrnWhvG6tc8XW9J5dQ3JXMBxiLJKUmqBJi";
		const _startsWithyy8kdyL = () => { return _returnValueAb1TE9m };
		const _returnValueVq5m51 = -2.651873216235632;
		const _slicev9URDer = () => { return _returnValueVq5m51 };
		const _lengthoColESB = -0.4027614398185655;
		const _wordZOQBgMU = {
			"startsWith": _startsWithyy8kdyL,
		"slice": _slicev9URDer,
		"length": _lengthoColESB
	}
		const _candidatesxq19Deo = null;
		const _returnValuegYNMBd = await suggestSimilar(_wordZOQBgMU, _candidatesxq19Deo)
	});

	it('test for suggestSimilar', async () => {
		const _returnValuexdBTHN4 = "PaFHIRJg0KbRdI";
		const _startsWithOqxLYRL = () => { return _returnValuexdBTHN4 };
		const _returnValuexu3ervO = {
		
	}
		const _slicefetuek = () => { return _returnValuexu3ervO };
		const _lengthAM5pHR1 = undefined;
		const _wordDxFTJ8j = {
			"startsWith": _startsWithOqxLYRL,
		"slice": _slicefetuek,
		"length": _lengthAM5pHR1
	}
		const _arrayValuejHZ7c2I = false;
		const _arrayValueotZaHcK = false;
		const _candidatesP5B1gkh = [_arrayValuejHZ7c2I, _arrayValueotZaHcK]
		const _returnValuet0dmA35 = await suggestSimilar(_wordDxFTJ8j, _candidatesP5B1gkh)
	});

	it('test for suggestSimilar', async () => {
		const _returnValuejB2oTxx = {
		
	}
		const _startsWithoCHL1bp = () => { return _returnValuejB2oTxx };
		const _returnValueiqaCykZ = {
		
	}
		const _sliceF02M3Ui = () => { return _returnValueiqaCykZ };
		const _lengthstnncar = -6.8555737195624875;
		const _wordh5H9ucd = {
			"startsWith": _startsWithoCHL1bp,
		"slice": _sliceF02M3Ui,
		"length": _lengthstnncar
	}
		const _candidatespblzHTo = "n7c1KuPhP7WyPggKgZbrgyGoxBcl5wav0DVyle2Ts1C9Tpa6sc3LNu8KzJKHBDU2GZXxpMaNfj";
		const _returnValueU6lOm8u = await suggestSimilar(_wordh5H9ucd, _candidatespblzHTo)
	});

	it('test for suggestSimilar', async () => {
		const _wordfsgU1i7 = "mSYwEC1HnUAq9cC37lrYCCdi4TBVJhlnYq6DUcocgcinfAORQWMwcVvpFKuzCrG0KYjrnxgENkyrBT8OEz5xFLOCqW";
		const _arrayValuej7tSbbw = {
		
	}
		const _arrayValuernIvk14 = true;
		const _arrayValueFXceeNo = null;
		const _arrayValueGqgyZDy = "S2l3n9yciGayR6knPIgK5x9o618D5fRs9WKnpRq4";
		const _arrayValuekkoNLPQ = [_arrayValueFXceeNo, _arrayValueGqgyZDy]
		const _arrayValuew7uYyxN = null;
		const _candidatesYXxNPr = [_arrayValuej7tSbbw, _arrayValuernIvk14, _arrayValuekkoNLPQ, _arrayValuew7uYyxN]
		const _returnValuelBUSAoq = await suggestSimilar(_wordfsgU1i7, _candidatesYXxNPr)
	});

	it('test for suggestSimilar', async () => {
		const _wordmiRxeVC = "P8AoSnG5yzVzzcAO";
		const _arrayValueWTp6OXi = false;
		const _arrayValue8Uc2SW = "PeKvMlqbUsPdXsd6x";
		const _returnValueW5FPXg = null;
		const _arrayValueOKVjqvM = () => { return _returnValueW5FPXg };
		const _arrayValueBxT1ND = -5.438265063023574;
		const _candidatesxILF6oK = [_arrayValueWTp6OXi, _arrayValue8Uc2SW, _arrayValueOKVjqvM, _arrayValueBxT1ND]
		const _returnValueVpAIQAr = await suggestSimilar(_wordmiRxeVC, _candidatesxILF6oK)
	});
})