export {}
const {suggestSimilar} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/suggestSimilar.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('suggestSimilar', () => {
	it('test for suggestSimilar', async () => {
		const _returnValuetX2cUi8 = "nkZqO3Zh8nKsgD65FleDMnixEgw6ISnPB1HacJH8Dszwz85J5S";
		const _startsWithlAu7GjB = () => { return _returnValuetX2cUi8 };
		const _returnValueMfZFb3w = undefined;
		const _slicefmQJAzE = () => { return _returnValueMfZFb3w };
		const _lengthUrn2jb = 7.933573914751541;
		const _wordqG9Ydj = {
			"startsWith": _startsWithlAu7GjB,
		"slice": _slicefmQJAzE,
		"length": _lengthUrn2jb
	}
		const _lengthGXGugbs = -2.348197545078828;
		const _returnValuepy2X4Ir = {
		
	}
		const _mapjNgLbmw = () => { return _returnValuepy2X4Ir };
		const _returnValuexzPsm4i = 0.43511169445645415;
		const _forEachYJg0AeF = () => { return _returnValuexzPsm4i };
		const _candidatesrRMsvjz = {
			"length": _lengthGXGugbs,
		"map": _mapjNgLbmw,
		"forEach": _forEachYJg0AeF
	}
		const _returnValueHK2OFsx = await suggestSimilar(_wordqG9Ydj, _candidatesrRMsvjz)
	});

	it('test for suggestSimilar', async () => {
		const _returnValueuTb29dt = undefined;
		const _startsWithDYqEbH = () => { return _returnValueuTb29dt };
		const _returnValueK7GpC0n = null;
		const _slicemIwJB3d = () => { return _returnValueK7GpC0n };
		const _lengthX0LLSxh = -9.523473276027447;
		const _wordLti06i = {
			"startsWith": _startsWithDYqEbH,
		"slice": _slicemIwJB3d,
		"length": _lengthX0LLSxh
	}
		const _candidatesigpOkUq = null;
		const _returnValuedMa2ZTJ = await suggestSimilar(_wordLti06i, _candidatesigpOkUq)
	});

	it('test for suggestSimilar', async () => {
		const _returnValueeRvN2S = 2.9118776585996464;
		const _startsWithYVSrJ5D = () => { return _returnValueeRvN2S };
		const _returnValuezxg3gKx = false;
		const _sliceHc0mmXj = () => { return _returnValuezxg3gKx };
		const _lengthDMhcmT = undefined;
		const _wordS3IJs9Y = {
			"startsWith": _startsWithYVSrJ5D,
		"slice": _sliceHc0mmXj,
		"length": _lengthDMhcmT
	}
		const _candidatesA1LcM5G = "JnwzfGSeqpA8mgmZyUcoLleqEukxsX7cG3GO6TfWoNZ8JOQcNVaXQJpAMyBx6jur2GKkvAMnNFr99iAPxWWZ8GvhAkO5RIsh";
		const _returnValuew7TdvuI = await suggestSimilar(_wordS3IJs9Y, _candidatesA1LcM5G)
	});

	it('test for suggestSimilar', async () => {
		const _returnValue0XnT89 = undefined;
		const _startsWith5Epqzk = () => { return _returnValue0XnT89 };
		const _returnValueUTux0nW = "ND2uf3KrwrMzlF7jday98kA3PukxRlhJJg1JJ7F3EG9l2Px0kpzE7YPxaPNzqWa4F54ZwUtk8mcs5eZipo5lF";
		const _sliceS00JCEf = () => { return _returnValueUTux0nW };
		const _lengthDnPIwT = 2.815276957988896;
		const _wordXhwDcZ9 = {
			"startsWith": _startsWith5Epqzk,
		"slice": _sliceS00JCEf,
		"length": _lengthDnPIwT
	}
		const _arrayValueKDrP03 = -4.3377915346702975;
		const _candidatesz4tY7r9 = [_arrayValueKDrP03]
		const _returnValue7r3Gwo = await suggestSimilar(_wordXhwDcZ9, _candidatesz4tY7r9)
	});

	it('test for suggestSimilar', async () => {
		const _returnValueel2o5ad = null;
		const _startsWithi7QA5Ns = () => { return _returnValueel2o5ad };
		const _arrayValueFtOTCE8 = undefined;
		const _arrayValueRIC3qK2 = null;
		const _arrayValuemvBg2fP = {
		
	}
		const _arrayValueEV0pW00 = [_arrayValuemvBg2fP]
		const _returnValueNnpKyAo = [_arrayValueFtOTCE8, _arrayValueRIC3qK2, _arrayValueEV0pW00]
		const _slicevUjti7h = () => { return _returnValueNnpKyAo };
		const _lengthsUd0kq = -1.8125097999649729;
		const _wordn3v0nbb = {
			"startsWith": _startsWithi7QA5Ns,
		"slice": _slicevUjti7h,
		"length": _lengthsUd0kq
	}
		const _arrayValuely3h7O = "jQqh8DLD7whjY";
		const _arrayValueMRP235j = "mva1fkdC1dtRnamtMS";
		const _arrayValuesNRTTra = [_arrayValuely3h7O, _arrayValueMRP235j]
		const _candidatesVdHePFA = [_arrayValuesNRTTra]
		const _returnValueSWko2aP = await suggestSimilar(_wordn3v0nbb, _candidatesVdHePFA)
	});
})