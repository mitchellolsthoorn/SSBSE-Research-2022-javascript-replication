export {}
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Option', () => {
	it('test for Option', async () => {
		const _arrayValuedyQdtu = undefined;
		const _arrayValuectj61P = true;
		const _returnValueL414CCr = "s6J1UwZe3uzmnNwiyL46uKuQz5UlNjag2JOyNigrIgMQzWBYAIevJOtmA288UM2D";
		const _arrayValuezRDQNqP = () => { return _returnValueL414CCr };
		const _arrayValueY6FZbC = [_arrayValuectj61P, _arrayValuezRDQNqP]
		const _returnValuej2Ogajo = [_arrayValuedyQdtu, _arrayValueY6FZbC]
		const _includestl1cr1 = () => { return _returnValuej2Ogajo };
		const _flagsE3K3fNT = {
			"includes": _includestl1cr1
	}
		const _description3aMfrX = true;
		const _Option8FGl01 = new Option(_flagsE3K3fNT, _description3aMfrX)
		const _nameuTbj2Ww = undefined;
		const _returnValueWQ7tkzy = await _Option8FGl01.env(_nameuTbj2Ww)
		const _returnValuem9rrkd = await _Option8FGl01.attributeName()
		const _hidehhs089Q = false;
		const _returnValueHzNHnhN = await _Option8FGl01.hideHelp(_hidehhs089Q)
		const _mandatoryCeFb9jg = -5.567557700421323;
		const _returnValuef4Kavif = await _Option8FGl01.makeOptionMandatory(_mandatoryCeFb9jg)
	});

	it('test for Option', async () => {
		const _flagshpX3CqN = "lnDlT6Phrm4k";
		const _descriptionPtu7XaH = 2.171669292465971;
		const _OptionI2YOif5 = new Option(_flagshpX3CqN, _descriptionPtu7XaH)
		const _hideWKGvTJx = false;
		const _returnValueGGHkUbE = await _OptionI2YOif5.hideHelp(_hideWKGvTJx)
		const _valueel92bL = "LEsHd7QBwjYBIbaw5VhWbW15mgipJV";
		const _returnValue76ytfS = -7.46720174662908;
		const _concatMKaFxUO = () => { return _returnValue76ytfS };
		const _previousTIREx3n = {
			"concat": _concatMKaFxUO
	}
		const _returnValueZdWKTML = await _OptionI2YOif5._concatValue(_valueel92bL, _previousTIREx3n)
		const _namejLKRHB2 = undefined;
		const _returnValuebvh8R9x = await _OptionI2YOif5.env(_namejLKRHB2)
		const _mandatoryTibOgQi = true;
		const _returnValueSyiSjP = await _OptionI2YOif5.makeOptionMandatory(_mandatoryTibOgQi)
	});

	it('test for Option', async () => {
		const _flagszA9gUsw = "xcLj12C4soQRx2bfMhWGAM";
		const _arrayValuek2evEi = -8.262964762118154;
		const _returnValuezx7Qzj6 = null;
		const _arrayValuefpSAkWg = () => { return _returnValuezx7Qzj6 };
		const _arrayValueIcQeiSs = undefined;
		const _descriptioncgSsq3w = [_arrayValuek2evEi, _arrayValuefpSAkWg, _arrayValueIcQeiSs]
		const _OptionD4wzDn5 = new Option(_flagszA9gUsw, _descriptioncgSsq3w)
		const _valueSxSso3Z = -4.18048577988062;
		const _returnValuevMcmESJ = true;
		const _concatWH8FdEN = () => { return _returnValuevMcmESJ };
		const _previousR5RnYLo = {
			"concat": _concatWH8FdEN
	}
		const _returnValueg6Hbc5X = await _OptionD4wzDn5._concatValue(_valueSxSso3Z, _previousR5RnYLo)
		const _mandatorybZf3tNW = false;
		const _returnValueCHLD1b5 = await _OptionD4wzDn5.makeOptionMandatory(_mandatorybZf3tNW)
		const _valuejDkc1qb = true;
		const _returnValueo5qBIkZ = 9.646339832886362;
		const _concatfskQkJZ = () => { return _returnValueo5qBIkZ };
		const _previousFhELyj = {
			"concat": _concatfskQkJZ
	}
		const _returnValueWy1GWRa = await _OptionD4wzDn5._concatValue(_valuejDkc1qb, _previousFhELyj)
		const _valueh2l7Uwp = undefined;
		const _descriptionKBOIBiI = undefined;
		const _returnValueg32rz2 = await _OptionD4wzDn5.default(_valueh2l7Uwp, _descriptionKBOIBiI)
	});

	it('test for Option', async () => {
		const _flagsmv4Lsws = "qxDDCNarLqoCMcNcjbtc7qaD4mwtOeUgPtJCtGql2Ln7okOh3FGrx5ael1gUDRJ7FpKOrgmoM";
		const _descriptionYk1huDJ = true;
		const _Option3d6RVa = new Option(_flagsmv4Lsws, _descriptionYk1huDJ)
		const _argCvcKU3s = -6.183976743199374;
		const _returnValuedWBG27j = await _Option3d6RVa.is(_argCvcKU3s)
		const _returnValueP7lptQe = true;
		const _includesI90j970 = () => { return _returnValueP7lptQe };
		const _returnValuer0hCyBC = "Qfk1ObpP7He8yVPrinn25mYS6uYNRvZGRyq";
		const _joinOrQN6tp = () => { return _returnValuer0hCyBC };
		const _valuespu0JWgN = {
			"includes": _includesI90j970,
		"join": _joinOrQN6tp
	}
		const _returnValue29bGsD = await _Option3d6RVa.choices(_valuespu0JWgN)
	});

	it('test for Option', async () => {
		const _flagstXNfCJ2 = "PSjrE4VwtFzjw2MslGkffgW1nCzwLNvikYQvWlBNvXaRBDP";
		const _descriptiongA22qXA = false;
		const _OptionoBQglBJ = new Option(_flagstXNfCJ2, _descriptiongA22qXA)
		const _nameTL37JPx = undefined;
		const _returnValueAF9vtg1 = await _OptionoBQglBJ.env(_nameTL37JPx)
		const _returnValueV8ELDis = await _OptionoBQglBJ.name()
	});

	it('test for Option', async () => {
		const _flagsmIp7KO = "86UJtD3FpKIWtG";
		const _descriptionnnJn65x = false;
		const _OptionUy4APKl = new Option(_flagsmIp7KO, _descriptionnnJn65x)
		const _fnaCyJM3z = undefined;
		const _returnValueJDUsyo0 = await _OptionUy4APKl.argParser(_fnaCyJM3z)
		const _valueeNVQgOr = undefined;
		const _descriptionhYiv37V = undefined;
		const _returnValueaOvJchG = await _OptionUy4APKl.default(_valueeNVQgOr, _descriptionhYiv37V)
		const _returnValueeyHB9cf = await _OptionUy4APKl.name()
		const _nameglIRGAA = undefined;
		const _returnValueLkgDscr = await _OptionUy4APKl.env(_nameglIRGAA)
		const _arrayValueFjIAChl = null;
		const _arrayValuev171602 = null;
		const _arrayValueSPUmt54 = undefined;
		const _arrayValueGcOPHq2 = [_arrayValueFjIAChl, _arrayValuev171602, _arrayValueSPUmt54]
		const _arrayValueFIhlmJF = null;
		const _arrayValuei4cHrSY = -3.9555065435882506;
		const _arrayValueehTxBNi = true;
		const _arrayValueFLgWWid = undefined;
		const _arrayValueXfuItox = [_arrayValueehTxBNi, _arrayValueFLgWWid]
		const _arrayValueGDevzH1 = [_arrayValueGcOPHq2, _arrayValueFIhlmJF, _arrayValuei4cHrSY, _arrayValueXfuItox]
		const _arrayValuectLKrXI = -7.654973652991718;
		const _namelkIoUxL = [_arrayValueGDevzH1, _arrayValuectLKrXI]
		const _returnValuerhOoKJ = await _OptionUy4APKl.env(_namelkIoUxL)
	});

	it('test for Option', async () => {
		const _flagsGK3biq1 = "D5Y5DaQaowHJDhMeOW6bwSXLhLrMEjQC9mcCVO";
		const _descriptionqQaaj4T = "Eu7QmMAqJnjJpQ5bODk";
		const _OptionEl3Dgr = new Option(_flagsGK3biq1, _descriptionqQaaj4T)
		const _returnValuepUBBGpT = await _OptionEl3Dgr.attributeName()
		const _returnValuemTOyK4K = await _OptionEl3Dgr.attributeName()
		const _mandatoryIlbFdYK = true;
		const _returnValuedfNpxHN = await _OptionEl3Dgr.makeOptionMandatory(_mandatoryIlbFdYK)
		const _returnValueapOCVz1 = {
		
	}
		const _includesHmyx1qa = () => { return _returnValueapOCVz1 };
		const _returnValueISlO23V = 2.414687043267495;
		const _joiniXeZaih = () => { return _returnValueISlO23V };
		const _valuesu5lesSI = {
			"includes": _includesHmyx1qa,
		"join": _joiniXeZaih
	}
		const _returnValuefnOb2Ta = await _OptionEl3Dgr.choices(_valuesu5lesSI)
	});
})