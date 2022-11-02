export {}
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Option', () => {
	it('test for Option', async () => {
		const _returnValuenW81p0n = -4.422467709451803;
		const _includesoVybhuo = () => { return _returnValuenW81p0n };
		const _flagsbVkzAvY = {
			"includes": _includesoVybhuo
	}
		const _descriptionTnsx8Vw = true;
		const _OptionOZ0hesb = new Option(_flagsbVkzAvY, _descriptionTnsx8Vw)
		const _hideiqZrXFN = false;
		const _returnValueTmMYZFQ = await _OptionOZ0hesb.hideHelp(_hideiqZrXFN)
	});

	it('test for Option', async () => {
		const _flagseLJxWwm = "XzyVeO8N8t6SHKevgcNictlQKgQ4dg69T5ztb8ZdaOCjdF1g8k8";
		const _descriptionZXaJbng = null;
		const _OptionmgfTTpk = new Option(_flagseLJxWwm, _descriptionZXaJbng)
		const _fnl7H2MED = {
		
	}
		const _returnValueyfK2ykT = await _OptionmgfTTpk.argParser(_fnl7H2MED)
	});

	it('test for Option', async () => {
		const _flagsuc5xjD = "AO8NP6agiUrvhLRhBCfooHDeEH2Rfp4pO5Nenc4KiI1yMhPjIotMociUL2v35qx1";
		const _returnValueqxOLDOt = "opaTxL3gYyVK0C9FSLM3H8mAZchdhLImacJ1OvddRRReSdcQ3psAF6WKI76uaWqNPTJY2BwpWdVoYfhYyD";
		const _descriptionC609VUR = () => { return _returnValueqxOLDOt };
		const _OptionEbYExTg = new Option(_flagsuc5xjD, _descriptionC609VUR)
		const _returnValueomhpYN = "txC8zT6CWVh7uDu5yEdIPNXmblREnFDCV1WDteGjtgDHEiZmjPgzN3JlTjHJmubcJemGU";
		const _includesppkasR = () => { return _returnValueomhpYN };
		const _returnValue9CV8dY = null;
		const _joinh3rBujO = () => { return _returnValue9CV8dY };
		const _valuesyCv2aPA = {
			"includes": _includesppkasR,
		"join": _joinh3rBujO
	}
		const _returnValuecgBRQz0 = await _OptionEbYExTg.choices(_valuesyCv2aPA)
		const _hideyN5baQi = true;
		const _returnValueNxkEco6 = await _OptionEbYExTg.hideHelp(_hideyN5baQi)
		const _mandatoryaj79T0 = true;
		const _returnValueMTEyz5 = await _OptionEbYExTg.makeOptionMandatory(_mandatoryaj79T0)
		const _nameUAVmNq3 = undefined;
		const _returnValuerHupWeu = await _OptionEbYExTg.env(_nameUAVmNq3)
		const _returnValueNG1Hdn = null;
		const _includesaqAYHCu = () => { return _returnValueNG1Hdn };
		const _returnValueCLR5Cez = null;
		const _joinc1Hoo2T = () => { return _returnValueCLR5Cez };
		const _valuesh4Y8pPZ = {
			"includes": _includesaqAYHCu,
		"join": _joinc1Hoo2T
	}
		const _returnValueezqX0uG = await _OptionEbYExTg.choices(_valuesh4Y8pPZ)
	});

	it('test for Option', async () => {
		const _flagsWLvydv = "N4uMPR6jdyv8sttqrtbvxquoFRHcjR0vjnSaL4AAkAdu1xXagdqy4hHkr9Xfeod837wSUf9nc";
		const _descriptionQpCKWsh = "q4DUQzRERObqSMYjfOtsYL2ohxsGjy69rnsQrgPqOMlkDCF23Es8wEf7KTtrA";
		const _OptionNjTXfUc = new Option(_flagsWLvydv, _descriptionQpCKWsh)
		const _valueeRgSxME = null;
		const _returnValueXMVo2Hd = undefined;
		const _concatMdOVleI = () => { return _returnValueXMVo2Hd };
		const _previousRKRKstr = {
			"concat": _concatMdOVleI
	}
		const _returnValueqoe1ubk = await _OptionNjTXfUc._concatValue(_valueeRgSxME, _previousRKRKstr)
		const _hidesNVQuXG = false;
		const _returnValueD2OzAD6 = await _OptionNjTXfUc.hideHelp(_hidesNVQuXG)
		const _nameMixZg7Q = undefined;
		const _returnValueV0RW4bT = await _OptionNjTXfUc.env(_nameMixZg7Q)
	});

	it('test for Option', async () => {
		const _flagsZGDW1eQ = "9iWSvNv";
		const _descriptionTqZetpN = "eGcqwJORMhwQomCAyAKKHdN17ADjpd";
		const _OptionihkNu6U = new Option(_flagsZGDW1eQ, _descriptionTqZetpN)
		const _valuefg3kLqk = undefined;
		const _descriptionqGvKgqS = undefined;
		const _returnValuedWVCFTb = await _OptionihkNu6U.default(_valuefg3kLqk, _descriptionqGvKgqS)
		const _returnValueEDKMPAw = 1.5219773513634305;
		const _includesdiEpOK6 = () => { return _returnValueEDKMPAw };
		const _returnValueEjb3kAV = false;
		const _joinaKTe2zF = () => { return _returnValueEjb3kAV };
		const _valuesM3uFgvw = {
			"includes": _includesdiEpOK6,
		"join": _joinaKTe2zF
	}
		const _returnValueGmhaXty = await _OptionihkNu6U.choices(_valuesM3uFgvw)
		const _mandatorygZk2fce = true;
		const _returnValueZIu4QI = await _OptionihkNu6U.makeOptionMandatory(_mandatorygZk2fce)
		const _nameOT3eWPO = undefined;
		const _returnValueKvAxdiC = await _OptionihkNu6U.env(_nameOT3eWPO)
	});

	it('test for Option', async () => {
		const _flagsJySkCT7 = "aOnPPru3MZELs";
		const _returnValueWQLe59o = false;
		const _descriptionOaVOiWT = () => { return _returnValueWQLe59o };
		const _OptionicW9YO8 = new Option(_flagsJySkCT7, _descriptionOaVOiWT)
		const _returnValueHECeCjJ = await _OptionicW9YO8.attributeName()
		const _returnValueLftIqD8 = false;
		const _includesQDtL69f = () => { return _returnValueLftIqD8 };
		const _returnValueV1rCiIj = null;
		const _joink1blPaw = () => { return _returnValueV1rCiIj };
		const _valuesmlKjSJg = {
			"includes": _includesQDtL69f,
		"join": _joink1blPaw
	}
		const _returnValueIVy5DIK = await _OptionicW9YO8.choices(_valuesmlKjSJg)
		const _returnValueOpCC5sr = await _OptionicW9YO8.name()
	});

	it('test for Option', async () => {
		const _flagshBAysEF = "FzN3YEoaVsU7EJDvvkEo2SK6sAe67BJluaGa1pqn5ohGTkSwSXktiIkgIl0PQifi4UOUSo";
		const _descriptionVsqB4gl = "o0OiSdS0UHFjpflTRU4Wloz8Cdw6pRbu27xIWh19dj78bgSlsGrj2IM6zOXuF96YaTsMXMs9Oqxj";
		const _OptiongF5IErk = new Option(_flagshBAysEF, _descriptionVsqB4gl)
		const _argyl4axmj = []
		const _returnValuecljjgIB = await _OptiongF5IErk.is(_argyl4axmj)
		const _returnValueQ1C3JEt = true;
		const _returnValueu88PbNX = () => { return _returnValueQ1C3JEt };
		const _includesVTUQ4GK = () => { return _returnValueu88PbNX };
		const _returnValueGCncRzg = null;
		const _joinHlJaIl1 = () => { return _returnValueGCncRzg };
		const _valuesovGpnft = {
			"includes": _includesVTUQ4GK,
		"join": _joinHlJaIl1
	}
		const _returnValueh4uhZG3 = await _OptiongF5IErk.choices(_valuesovGpnft)
	});
})