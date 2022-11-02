export {}
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Option', () => {
	it('test for Option', async () => {
		const _returnValueK37AZfp = "sFq2a5dhTJHJ8KKrm";
		const _includeshBI9BLb = () => { return _returnValueK37AZfp };
		const _flagsRitPvyj = {
			"includes": _includeshBI9BLb
	}
		const _descriptionkLq5KI1 = "tv";
		const _OptionjsRkpeJ = new Option(_flagsRitPvyj, _descriptionkLq5KI1)
		const _returnValuej5AyqYJ = await _OptionjsRkpeJ.name()
	});

	it('test for Option', async () => {
		const _flagsOY1oNm2 = "VDaUcleWRxCVpBoJf9HiR53XnGHfoRehgKLU8A4P3NxlygVz9lj7VdP6gKCs";
		const _arrayValuef49Iq6r = -9.32785298522857;
		const _descriptionarBshnO = [_arrayValuef49Iq6r]
		const _Optionom75QH3 = new Option(_flagsOY1oNm2, _descriptionarBshnO)
		const _mandatoryriuivO2 = null;
		const _returnValuehFEDQBW = await _Optionom75QH3.makeOptionMandatory(_mandatoryriuivO2)
		const _returnValuebDjMERp = await _Optionom75QH3.attributeName()
	});

	it('test for Option', async () => {
		const _flagsrUcgHIr = "fNE5lZ9Yt5HCKmYjkEvCM1z5bI7B7orxOYAP1kfwDy8ySmJb";
		const _descriptiont7izWNs = -0.9471484315871486;
		const _OptionJ34YNYj = new Option(_flagsrUcgHIr, _descriptiont7izWNs)
		const _arrayValuelgGus0y = 0.6638622432985297;
		const _returnValuewm534Lw = [_arrayValuelgGus0y]
		const _includeseGpPuz = () => { return _returnValuewm534Lw };
		const _returnValueE9RKUP = null;
		const _joinpitZJMt = () => { return _returnValueE9RKUP };
		const _valueszN7BEqP = {
			"includes": _includeseGpPuz,
		"join": _joinpitZJMt
	}
		const _returnValuePXQ9V43 = await _OptionJ34YNYj.choices(_valueszN7BEqP)
		const _hidedNrURlP = true;
		const _returnValuee2ANugs = await _OptionJ34YNYj.hideHelp(_hidedNrURlP)
	});

	it('test for Option', async () => {
		const _flagsZsHJvOD = "4xfBDrahK4NH2f2JVj9fHIXGZf2ncusE9VR7C3T99MKiJK7plVfTuQQGNjvL5o7tbGOtCKeMS3RxuLxokzPoqqCKQjmki";
		const _arrayValueoGg8jHT = undefined;
		const _returnValuevC1tlM2 = "F8TJOvsoieUTSics5";
		const _arrayValuez6IWnIN = () => { return _returnValuevC1tlM2 };
		const _arrayValuevzF7cjO = "YTtSoDd24n4sEr4S1KFpzp3NLBSJDs7NtiRi2KJaMy3Sa6UCI8EiqOVNLXas69RYN";
		const _descriptionZkM76Sc = [_arrayValueoGg8jHT, _arrayValuez6IWnIN, _arrayValuevzF7cjO]
		const _OptiondbyYMbN = new Option(_flagsZsHJvOD, _descriptionZkM76Sc)
		const _valuesxikItk1 = -4.34273010019595;
		const _returnValuevGvFNly = await _OptiondbyYMbN.choices(_valuesxikItk1)
		const _hideopGjckc = false;
		const _returnValuehpof7Ne = await _OptiondbyYMbN.hideHelp(_hideopGjckc)
		const _returnValuewU2BkAk = await _OptiondbyYMbN.name()
		const _fnmTO1e7a = undefined;
		const _returnValuevYJPw8a = await _OptiondbyYMbN.argParser(_fnmTO1e7a)
	});

	it('test for Option', async () => {
		const _flagsSNn6JKM = "fSc9eQbKzRTiMTrePhEIw6z5RiwEQfjC6RhNN5GEdws0KO51xuYc";
		const _descriptionGUlAPE4 = false;
		const _OptionUUSIpr3 = new Option(_flagsSNn6JKM, _descriptionGUlAPE4)
		const _valueTEck3Lh = "wSVKYtrSdEvmNXp";
		const _concatDDymDe9 = []
		const _previoushNMCt8v = {
			"concat": _concatDDymDe9
	}
		const _returnValuelrwYDSQ = await _OptionUUSIpr3._concatValue(_valueTEck3Lh, _previoushNMCt8v)
		const _hidepyKaXdl = true;
		const _returnValuegKdASV5 = await _OptionUUSIpr3.hideHelp(_hidepyKaXdl)
		const _valueWN7w0ia = undefined;
		const _descriptionJUzLFiG = true;
		const _returnValueWXEOeLc = await _OptionUUSIpr3.default(_valueWN7w0ia, _descriptionJUzLFiG)
		const _fnsGqRSMf = undefined;
		const _returnValuer1Q3GCz = await _OptionUUSIpr3.argParser(_fnsGqRSMf)
	});

	it('test for Option', async () => {
		const _flagshKHQRc0 = "Gd7JeZOLak9n1USUCrpOwy8LcXfuTmKBfLSBNiw3WMxIKUljv";
		const _arrayValuedwUoOSu = null;
		const _descriptionZ6QiGJa = [_arrayValuedwUoOSu]
		const _OptionwKOl5ie = new Option(_flagshKHQRc0, _descriptionZ6QiGJa)
		const _argm39kHbw = {
		
	}
		const _returnValuesACNmaJ = await _OptionwKOl5ie.is(_argm39kHbw)
		const _returnValuew6RKEqq = await _OptionwKOl5ie.attributeName()
		const _mandatoryHPRlFp8 = 3.6017191690203525;
		const _returnValueutLYF4U = await _OptionwKOl5ie.makeOptionMandatory(_mandatoryHPRlFp8)
		const _returnValuepwKLkrO = "DRh8sfx9IukK77NsspcxTqYlfGyvMl7GddPX7QEPAD8hYeW";
		const _includesVS840PM = () => { return _returnValuepwKLkrO };
		const _returnValuelqR806P = "Cf5p7ThN2K05uC9mijia45WqEO2dwhWbX8sgtA30vERsOJyXtkyfW9PTKP4DxU65augIhhyIQ7Ym5Ngx9VWgv";
		const _joinMQm43yj = () => { return _returnValuelqR806P };
		const _valuesueLcgdj = {
			"includes": _includesVS840PM,
		"join": _joinMQm43yj
	}
		const _returnValuek77o4bh = await _OptionwKOl5ie.choices(_valuesueLcgdj)
	});

	it('test for Option', async () => {
		const _flagsbPAEQZb = "W23wkeH1kTWK";
		const _returnValueHoXVdGT = {
		
	}
		const _returnValueiVRxaZ6 = () => { return _returnValueHoXVdGT };
		const _descriptionw5aUeV = () => { return _returnValueiVRxaZ6 };
		const _OptionnQ8YG4p = new Option(_flagsbPAEQZb, _descriptionw5aUeV)
		const _valueXtiU1ws = undefined;
		const _descriptionusaXCOQ = undefined;
		const _returnValueH5VdVEa = await _OptionnQ8YG4p.default(_valueXtiU1ws, _descriptionusaXCOQ)
		const _valueclJrRrW = null;
		const _returnValueUWfDQtn = "zht9dqObDvhbwOEIItqtuI0PZV8wKs61s9ogN97y6D051t8xuQLaaln4INBs2eHDOBJG";
		const _concatMClEdY = () => { return _returnValueUWfDQtn };
		const _previouszgA8tmq = {
			"concat": _concatMClEdY
	}
		const _returnValueA4YobXe = await _OptionnQ8YG4p._concatValue(_valueclJrRrW, _previouszgA8tmq)
		const _arrayValuehxqvXIl = false;
		const _arrayValueGHI1sU = null;
		const _arrayValuex3vqf5 = true;
		const _namebsKh86 = [_arrayValuehxqvXIl, _arrayValueGHI1sU, _arrayValuex3vqf5]
		const _returnValuegLa6AF = await _OptionnQ8YG4p.env(_namebsKh86)
		const _valueeyKTAHg = undefined;
		const _descriptionLME0XvI = undefined;
		const _returnValuedf2Kgs8 = await _OptionnQ8YG4p.default(_valueeyKTAHg, _descriptionLME0XvI)
	});

	it('test for Option', async () => {
		const _flagskaaEgcS = "peRO3nXCDy9ss5G4AE5PCRQtMCHn5j7BOEEncx";
		const _descriptionNGuzvxO = {
		
	}
		const _Optionq53NFkH = new Option(_flagskaaEgcS, _descriptionNGuzvxO)
		const _valuesxxOSL9 = true;
		const _returnValueUiCMsvd = await _Optionq53NFkH.choices(_valuesxxOSL9)
		const _returnValueH3rC8Gi = "h9BAe";
		const _includesaqW2cXi = () => { return _returnValueH3rC8Gi };
		const _returnValueJhbWTFv = true;
		const _joinoOEFowm = () => { return _returnValueJhbWTFv };
		const _valuesZ201Bak = {
			"includes": _includesaqW2cXi,
		"join": _joinoOEFowm
	}
		const _returnValueQkwwFB = await _Optionq53NFkH.choices(_valuesZ201Bak)
		const _valuejuQhZb = undefined;
		const _arrayValueA1syp51 = "rrP9iAxRzTjuQ6WyAqiKEsElTJGjfr6q5RI6mPuV7qiIwn3FScMvSDoXPjtYv3q1oEjkV8r";
		const _arrayValuesOAHCzz = true;
		const _arrayValuemukHiWH = null;
		const _arrayValuecJMteqm = null;
		const _previousjJylrBs = [_arrayValueA1syp51, _arrayValuesOAHCzz, _arrayValuemukHiWH, _arrayValuecJMteqm]
		const _returnValueXQYHuuj = await _Optionq53NFkH._concatValue(_valuejuQhZb, _previousjJylrBs)
		const _fngmHHdcB = {
		
	}
		const _returnValueTULecg9 = await _Optionq53NFkH.argParser(_fngmHHdcB)
		const _returnValuekoIIaZ = await _Optionq53NFkH.name()
	});
})