export {}
const {suggestSimilar} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/suggestSimilar.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('suggestSimilar', () => {
	it('test for suggestSimilar', async () => {
		const _startsWithN3pKqY2 = -4.8807050369875915;
		const _returnValuemSEjf9w = "2viNs6Kyh34EvnktdWeUrb9qCokJwRI78dwDO1uMfu758X5yPmTEmhYZRjWl2Id3PHq9KK1z";
		const _slicegZhn9Bs = () => { return _returnValuemSEjf9w };
		const _lengthQ8nqpsk = -8.694453001815688;
		const _wordYbAEA0M = {
			"startsWith": _startsWithN3pKqY2,
		"slice": _slicegZhn9Bs,
		"length": _lengthQ8nqpsk
	}
		const _lengthN7gO6Be = 5.3862351915596385;
		const _mapQvogVmV = undefined;
		const _returnValuepohqIXV = false;
		const _forEachAq4YGc = () => { return _returnValuepohqIXV };
		const _candidateszX4UoJO = {
			"length": _lengthN7gO6Be,
		"map": _mapQvogVmV,
		"forEach": _forEachAq4YGc
	}
		const _returnValueoCkZhe8 = await suggestSimilar(_wordYbAEA0M, _candidateszX4UoJO)
	});

	it('test for suggestSimilar', async () => {
		const _returnValueH9zIRtI = null;
		const _startsWithMhpdgf7 = () => { return _returnValueH9zIRtI };
		const _returnValueN89QhgF = undefined;
		const _sliceAO69bOH = () => { return _returnValueN89QhgF };
		const _lengthSc8Bpbe = 2.9742797288929346;
		const _wordjUG4iTk = {
			"startsWith": _startsWithMhpdgf7,
		"slice": _sliceAO69bOH,
		"length": _lengthSc8Bpbe
	}
		const _candidatesCkqDzJp = false;
		const _returnValuewPwuY32 = await suggestSimilar(_wordjUG4iTk, _candidatesCkqDzJp)
	});

	it('test for suggestSimilar', async () => {
		const _arrayValueTRROQEL = 7.906636541272697;
		const _returnValueeK5S9VF = [_arrayValueTRROQEL]
		const _startsWithOW7Ck2k = () => { return _returnValueeK5S9VF };
		const _returnValuebppUF3G = null;
		const _sliceyVw5x6E = () => { return _returnValuebppUF3G };
		const _lengthK6nRFif = -7.743071490777759;
		const _wordtIT2uDp = {
			"startsWith": _startsWithOW7Ck2k,
		"slice": _sliceyVw5x6E,
		"length": _lengthK6nRFif
	}
		const _candidatesrxWccj = "19loVHtxki2tmbEuTaf009Wh6FuFFtIjq0KIIkPlviKUt2Kph4rjD0HU1rmREKWq4z6u4j6EGDFF62a";
		const _returnValuecLFIVXU = await suggestSimilar(_wordtIT2uDp, _candidatesrxWccj)
	});

	it('test for suggestSimilar', async () => {
		const _wordkKRxUTF = "eXDynJuS";
		const _arrayValueh2uXZ4e = "13cyctTNXVA4PaqW";
		const _arrayValuev3Sca2 = null;
		const _candidatesSLYZkDX = [_arrayValueh2uXZ4e, _arrayValuev3Sca2]
		const _returnValueb5F0MfD = await suggestSimilar(_wordkKRxUTF, _candidatesSLYZkDX)
	});

	it('test for suggestSimilar', async () => {
		const _wordZKClVZQ = "BqCsV6oAttOO";
		const _arrayValueKORYeIE = {
		
	}
		const _arrayValuei2MxU2G = true;
		const _arrayValueUCr9ofU = "h61UmK3NrFU96XnCp9rFBiTYIsX6cfVIq097M2JZOwmjCEK64HS";
		const _candidatesH7Sqrcc = [_arrayValueKORYeIE, _arrayValuei2MxU2G, _arrayValueUCr9ofU]
		const _returnValuePDY0H6V = await suggestSimilar(_wordZKClVZQ, _candidatesH7Sqrcc)
	});

	it('test for suggestSimilar', async () => {
		const _wordCyFfgmQ = "7bCRQ9rVRRx7gzVLC34CSqXhN2IKcipHspZvMGmeoH";
		const _arrayValueEJSisS5 = "A95Vy6STTTGFtkXKCa4TdSK675QsokVIZEY07L3b2KG1K";
		const _arrayValuesS6jOcC = 3.0884141275488908;
		const _arrayValueUt8rRZ7 = null;
		const _arrayValuenJa5z58 = 3.6462273433283308;
		const _candidatesTJIciJD = [_arrayValueEJSisS5, _arrayValuesS6jOcC, _arrayValueUt8rRZ7, _arrayValuenJa5z58]
		const _returnValueomUKJL7 = await suggestSimilar(_wordCyFfgmQ, _candidatesTJIciJD)
	});
})