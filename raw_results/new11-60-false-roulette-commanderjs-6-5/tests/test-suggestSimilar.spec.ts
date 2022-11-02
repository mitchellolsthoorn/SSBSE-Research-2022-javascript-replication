export {}
const {suggestSimilar} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/suggestSimilar.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('suggestSimilar', () => {
	it('test for suggestSimilar', async () => {
		const _wordRZhXUTs = "A3gtwGuTER13MA7ACdqO8jDMFFc2Vw1uCWxshw18QtLOrzDXMU6E5KJbgEFPfjODfBYfpKlfYEyH7Ci3";
		const _lengthYtKjAF5 = undefined;
		const _returnValuetHeDzin = -5.320961605986493;
		const _returnValuev2bTtaU = () => { return _returnValuetHeDzin };
		const _mapEozVekd = () => { return _returnValuev2bTtaU };
		const _returnValueFYJA5mX = {
		
	}
		const _forEachyE9gFN = () => { return _returnValueFYJA5mX };
		const _candidatesQFaw9z = {
			"length": _lengthYtKjAF5,
		"map": _mapEozVekd,
		"forEach": _forEachyE9gFN
	}
		const _returnValuepkZzfKl = await suggestSimilar(_wordRZhXUTs, _candidatesQFaw9z)
	});

	it('test for suggestSimilar', async () => {
		const _wordHcyZWBp = "jbHdTR";
		const _candidatesonvtWh9 = "as4SGD4MWTVYuOyD72lQl64mkHohXTxcAsLrLpc9dPuGKXbGueTNUQKOmouoC8CYCo6bGL1GAKHHShg3";
		const _returnValue6Tbj2U = await suggestSimilar(_wordHcyZWBp, _candidatesonvtWh9)
	});

	it('test for suggestSimilar', async () => {
		const _wordm5C6g19 = "ChDGM8cqSpjHVaTNBJBQG3Exf6p2nSgYdRWoL3NmWDJqphcjB2hwsUq176LOHPuCvbALSLoUxofo41XC3GAX7JT";
		const _returnValueWcorQXz = "mj9hDnUqAhniSuSnt2H2ZD6zdqdxg87DTkF4ffAkxOr5dhT95";
		const _returnValueWpLPWjv = () => { return _returnValueWcorQXz };
		const _candidatesKe1gnz = () => { return _returnValueWpLPWjv };
		const _returnValueAJB2jUb = await suggestSimilar(_wordm5C6g19, _candidatesKe1gnz)
	});

	it('test for suggestSimilar', async () => {
		const _wordC7hJmil = "FVp7GJBe";
		const _arrayValuegRusr4 = "bf1Myzs9vL4LK6rsPOKnbpIXlQdk5rTbFczdxHef9BvFLRe27Eyyh";
		const _arrayValuemDBpmE = undefined;
		const _candidateserDIfv = [_arrayValuegRusr4, _arrayValuemDBpmE]
		const _returnValuexOgDPTS = await suggestSimilar(_wordC7hJmil, _candidateserDIfv)
	});

	it('test for suggestSimilar', async () => {
		const _wordsdw5tG7 = "kh53tUReItS2LY5WA6Pzi7tmMaPTZlpc4gZedsev7TmhQLpegqiIbpqzuryHlF0EQbZCuTgSijIwqcJmgXXJIH8Ni";
		const _arrayValuegPCquNX = true;
		const _arrayValueO2SqBu = null;
		const _arrayValueVQbMykA = null;
		const _arrayValuefjeRAUx = [_arrayValueVQbMykA]
		const _arrayValueiX9LyV7 = true;
		const _arrayValueGpMjJZ = [_arrayValuefjeRAUx, _arrayValueiX9LyV7]
		const _arrayValuedvwSSql = [_arrayValueGpMjJZ]
		const _arrayValuebee80RR = true;
		const _arrayValuewJf0oyb = [_arrayValuegPCquNX, _arrayValueO2SqBu, _arrayValuedvwSSql, _arrayValuebee80RR]
		const _arrayValueMb8bvrs = true;
		const _candidatesgqKOsMp = [_arrayValuewJf0oyb, _arrayValueMb8bvrs]
		const _returnValuefdWcsT9 = await suggestSimilar(_wordsdw5tG7, _candidatesgqKOsMp)
	});

	it('test for suggestSimilar', async () => {
		const _returnValueCrxQebR = 3.5547502822606845;
		const _startsWithbEhyLVW = () => { return _returnValueCrxQebR };
		const _returnValueW8WlCyy = "I";
		const _sliceH2yu0S3 = () => { return _returnValueW8WlCyy };
		const _lengthakdUzP5 = 0.024618549320063465;
		const _wordqL8Tu90 = {
			"startsWith": _startsWithbEhyLVW,
		"slice": _sliceH2yu0S3,
		"length": _lengthakdUzP5
	}
		const _candidatesSIpEqy = "OQMfjn4tAoSFTr6K9hWvrTvboYZqQghN1euJxHsSdbqp";
		const _returnValueQ6XTn61 = await suggestSimilar(_wordqL8Tu90, _candidatesSIpEqy)
	});

	it('test for suggestSimilar', async () => {
		const _returnValuevvhNBIG = {
		
	}
		const _startsWithHezb0Om = () => { return _returnValuevvhNBIG };
		const _returnValuePaFKSZ0 = {
		
	}
		const _sliceuBMzcS = () => { return _returnValuePaFKSZ0 };
		const _lengthCKxAwzj = 3.039632618528179;
		const _wordxsJeYa7 = {
			"startsWith": _startsWithHezb0Om,
		"slice": _sliceuBMzcS,
		"length": _lengthCKxAwzj
	}
		const _arrayValue0aA2jL = "tUZ7z2nf9QCysOUCsMGSLgws8f1JuElJ7mETS6OXv5gShl1AEtaiuY1VJF";
		const _candidatesD2uHqe1 = [_arrayValue0aA2jL]
		const _returnValueN3AmiAH = await suggestSimilar(_wordxsJeYa7, _candidatesD2uHqe1)
	});

	it('test for suggestSimilar', async () => {
		const _wordso0yfTA = "ijx";
		const _returnValueciuvl2y = false;
		const _arrayValueEyize8 = () => { return _returnValueciuvl2y };
		const _arrayValueRLGTG40 = true;
		const _arrayValuepbmSroo = [_arrayValueEyize8, _arrayValueRLGTG40]
		const _arrayValueFBJvISN = true;
		const _arrayValueAnslOEC = [_arrayValuepbmSroo, _arrayValueFBJvISN]
		const _candidatesggILQAo = [_arrayValueAnslOEC]
		const _returnValueyZ4yqEv = await suggestSimilar(_wordso0yfTA, _candidatesggILQAo)
	});
})