export {}
const {suggestSimilar} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/suggestSimilar.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('suggestSimilar', () => {
	it('test for suggestSimilar', async () => {
		const _wordaaoa6aw = undefined;
		const _arrayValueVns4QgA = {
		
	}
		const _arrayValueoHkhxzO = undefined;
		const _arrayValueW6meT2D = {
		
	}
		const _arrayValuetiauba4 = [_arrayValueW6meT2D]
		const _candidateswpoA8CU = [_arrayValueVns4QgA, _arrayValueoHkhxzO, _arrayValuetiauba4]
		const _returnValuezMnc8O8 = await suggestSimilar(_wordaaoa6aw, _candidateswpoA8CU)
	});

	it('test for suggestSimilar', async () => {
		const _wordtqpZZPs = "eHCoxe3QWbWXY2";
		const _candidatesNU2dZbz = []
		const _returnValuezSQlk34 = await suggestSimilar(_wordtqpZZPs, _candidatesNU2dZbz)
	});

	it('test for suggestSimilar', async () => {
		const _returnValuervqn2v = {
		
	}
		const _startsWithxx93nhh = () => { return _returnValuervqn2v };
		const _returnValuekiH2WRo = null;
		const _sliceSYEC53 = () => { return _returnValuekiH2WRo };
		const _lengths7LmdkZ = -9.158630287325344;
		const _wordGKxQLCH = {
			"startsWith": _startsWithxx93nhh,
		"slice": _sliceSYEC53,
		"length": _lengths7LmdkZ
	}
		const _candidatesUzm2bOT = "1uOWPUeWnD37sRVQ3rWOIjT7ype6Ahv9SMyQkkqUTgT8AzxRYufoTbSWG3AEtzQueTjtKuPgT";
		const _returnValuekdsPIfn = await suggestSimilar(_wordGKxQLCH, _candidatesUzm2bOT)
	});

	it('test for suggestSimilar', async () => {
		const _wordxO2wxQ = "xvTiIvDIrysWGnSKSngcdmWTTOEN1vpx2EA";
		const _arrayValuehtOMeX7 = -9.480026618196726;
		const _arrayValueVyHJIpb = null;
		const _arrayValueAHwT2D = "2XRRltI";
		const _arrayValuevP0DQWk = null;
		const _returnValueVOEdbRd = -6.8234184042608925;
		const _arrayValueLwxuPx3 = () => { return _returnValueVOEdbRd };
		const _arrayValuevKbMRsl = "UwttEL2Db7iwNUJVVF7d6XqGVoaYMTtkVMFpXRYx9FG346wHeZQ8i3MuGOpKQUbrGe3T3etgWBZJdjKojvbjl";
		const _arrayValueH57Gh1 = null;
		const _arrayValuefGhlePo = [_arrayValueAHwT2D, _arrayValuevP0DQWk, _arrayValueLwxuPx3, _arrayValuevKbMRsl, _arrayValueH57Gh1]
		const _candidatesgQYHeA9 = [_arrayValuehtOMeX7, _arrayValueVyHJIpb, _arrayValuefGhlePo]
		const _returnValueqRZKkTg = await suggestSimilar(_wordxO2wxQ, _candidatesgQYHeA9)
	});

	it('test for suggestSimilar', async () => {
		const _worduJcIfE9 = "8GopxVyigkex";
		const _arrayValueMq4YTcr = "x5qKIYXxxfL07FAALGAPN8pXegXqh8Skkc7XbQsmLJraovOMJ0wMe7UwDmrfSOzM";
		const _arrayValueG4DYbi = null;
		const _candidatesgiVRjRE = [_arrayValueMq4YTcr, _arrayValueG4DYbi]
		const _returnValueadJM8xt = await suggestSimilar(_worduJcIfE9, _candidatesgiVRjRE)
	});

	it('test for suggestSimilar', async () => {
		const _wordq4rExot = "9XwYioDJ3LtmHLDbaca";
		const _arrayValueBfpiGcx = "LY5oBHVSSP5QVqt5w7z";
		const _candidates3eBHBL = [_arrayValueBfpiGcx]
		const _returnValueufksCnv = await suggestSimilar(_wordq4rExot, _candidates3eBHBL)
	});
})