export {}
const {suggestSimilar} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/suggestSimilar.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('suggestSimilar', () => {
	it('test for suggestSimilar', async () => {
		const _returnValuemWhWPj = null;
		const _startsWithLJ0eGbL = () => { return _returnValuemWhWPj };
		const _arrayValueQB6uIG = undefined;
		const _arrayValueSYsCRtM = undefined;
		const _arrayValueCI3xARL = true;
		const _arrayValueZBjPyhF = [_arrayValueSYsCRtM, _arrayValueCI3xARL]
		const _arrayValuevE3AT8p = [_arrayValueQB6uIG, _arrayValueZBjPyhF]
		const _arrayValueKsd4F7j = true;
		const _returnValuer6zWwTK = [_arrayValuevE3AT8p, _arrayValueKsd4F7j]
		const _slicekCRzDR1 = () => { return _returnValuer6zWwTK };
		const _lengthKzTX5D2 = -1.198476498230752;
		const _wordjBjhkhf = {
			"startsWith": _startsWithLJ0eGbL,
		"slice": _slicekCRzDR1,
		"length": _lengthKzTX5D2
	}
		const _lengthJYCpb55 = -2.008882140613344;
		const _arrayValueK5NRD84 = undefined;
		const _returnValueAgarWXL = [_arrayValueK5NRD84]
		const _mapxwzhKSX = () => { return _returnValueAgarWXL };
		const _returnValuebjP6Ys = null;
		const _forEachdOCRB5g = () => { return _returnValuebjP6Ys };
		const _candidateseTEw3T = {
			"length": _lengthJYCpb55,
		"map": _mapxwzhKSX,
		"forEach": _forEachdOCRB5g
	}
		const _returnValuezLGWLzm = await suggestSimilar(_wordjBjhkhf, _candidateseTEw3T)
	});

	it('test for suggestSimilar', async () => {
		const _wordk1L79Zt = "jrJHCyj8xJxMGS8mtpPIXNczWJHjOSLr4BAPgdgAu";
		const _candidatesBrYYYM = []
		const _returnValueINxo23D = await suggestSimilar(_wordk1L79Zt, _candidatesBrYYYM)
	});

	it('test for suggestSimilar', async () => {
		const _wordLG7e9HB = "vE1vi";
		const _candidatesVU5i5P = "s9PxE4bV4qkpp86";
		const _returnValuejEZFrtG = await suggestSimilar(_wordLG7e9HB, _candidatesVU5i5P)
	});

	it('test for suggestSimilar', async () => {
		const _wordWWHR1pQ = "23TSFUmcPlND2VWt6AxuNQkxdiWBwARWyUlStIYX1NrdMQGGH0b2";
		const _arrayValueHR7YrPF = "OuGlzNCIn3ReUAtTI";
		const _candidatesbf9s9Q9 = [_arrayValueHR7YrPF]
		const _returnValueH1m30YA = await suggestSimilar(_wordWWHR1pQ, _candidatesbf9s9Q9)
	});

	it('test for suggestSimilar', async () => {
		const _wordt7kT7IB = "Vk6GpgJJLtHJF4KULjXlxXXSmeVU0E7ccykq9SNgE7qpMBjZz6Bofu6C2XRJ9sHwztWkOOltLb7SwqBYLBQJqV";
		const _arrayValueo4YceK4 = undefined;
		const _arrayValuelPVcftz = [_arrayValueo4YceK4]
		const _returnValueZbH1BIt = {
		
	}
		const _arrayValuesu7y4EZ = () => { return _returnValueZbH1BIt };
		const _arrayValueDSgsglw = false;
		const _candidatesOU2uMuT = [_arrayValuelPVcftz, _arrayValuesu7y4EZ, _arrayValueDSgsglw]
		const _returnValueV2tc2ZT = await suggestSimilar(_wordt7kT7IB, _candidatesOU2uMuT)
	});

	it('test for suggestSimilar', async () => {
		const _word4ezzvZ = "pBn";
		const _arrayValueC8EgjSz = null;
		const _arrayValueUjuCfLA = "YMKiWhmolgZUqOH1JonflOJpUKQwUtsRvpbxbhkxMURkKa8v4qgiFU4ic";
		const _arrayValuerWwwwqC = [_arrayValueC8EgjSz, _arrayValueUjuCfLA]
		const _arrayValuevXIbA7b = undefined;
		const _candidatesYgiARcA = [_arrayValuerWwwwqC, _arrayValuevXIbA7b]
		const _returnValuenpzK73U = await suggestSimilar(_word4ezzvZ, _candidatesYgiARcA)
	});
})