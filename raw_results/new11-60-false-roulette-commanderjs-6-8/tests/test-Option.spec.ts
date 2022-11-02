export {}
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Option', () => {
	it('test for Option', async () => {
		const _returnValueSbZbDY5 = -0.11224205421014588;
		const _includesWpSImTZ = () => { return _returnValueSbZbDY5 };
		const _flagsMSEhEMa = {
			"includes": _includesWpSImTZ
	}
		const _returnValueyzr46mH = {
		
	}
		const _descriptionlprZodm = () => { return _returnValueyzr46mH };
		const _OptioncwY68su = new Option(_flagsMSEhEMa, _descriptionlprZodm)
		const _argkgDwWEH = "bR3ZP6f4Pa";
		const _returnValueqwYtVp6 = await _OptioncwY68su.is(_argkgDwWEH)
		const _valueIorJJ26 = undefined;
		const _returnValueXCyJGB = false;
		const _previousxlSA1oX = () => { return _returnValueXCyJGB };
		const _returnValuecxBMRtY = await _OptioncwY68su._concatValue(_valueIorJJ26, _previousxlSA1oX)
		const _arrayValueFAbbfDH = true;
		const _arrayValueSblWqxI = "RvKQw3nw0jlCFNHVyDiLxGPSVzTmqFdcfaB7ePgrIPW8sF9T";
		const _valueIQWIxnw = [_arrayValueFAbbfDH, _arrayValueSblWqxI]
		const _arrayValueeOTIQbQ = "51O1UsM3ioLD2WZ075Slexvqy5FwvjX13wDuMNOv1vsfy6PaLOlTdKk2c52emQxR6i";
		const _arrayValueZyuVd6d = {
		
	}
		const _arrayValueFnmbYZz = []
		const _arrayValueosNCNcE = 0.001443632924402749;
		const _arrayValueJunujdp = [_arrayValueosNCNcE]
		const _arrayValueeRd9j8h = [_arrayValueZyuVd6d, _arrayValueFnmbYZz, _arrayValueJunujdp]
		const _arrayValue2HVVBK = 3.1925658672950092;
		const _arrayValuecH4ISz6 = true;
		const _arrayValuezuGsJMh = undefined;
		const _arrayValueVN4BYTw = 0.7605344530063576;
		const _arrayValueIPt9lXs = [_arrayValue2HVVBK, _arrayValuecH4ISz6, _arrayValuezuGsJMh, _arrayValueVN4BYTw]
		const _returnValue1V9VkY = [_arrayValueeOTIQbQ, _arrayValueeRd9j8h, _arrayValueIPt9lXs]
		const _concatYItDcMg = () => { return _returnValue1V9VkY };
		const _previousL0iVCyw = {
			"concat": _concatYItDcMg
	}
		const _returnValueSM0Fbab = await _OptioncwY68su._concatValue(_valueIQWIxnw, _previousL0iVCyw)
	});

	it('test for Option', async () => {
		const _flagsHCpwbYI = "yO1DOQzfLRF2QpUZoMU3q7oU1OWk9Z";
		const _description0X0dFq = 4.5327981417676995;
		const _OptionzBgUMDK = new Option(_flagsHCpwbYI, _description0X0dFq)
		const _nameD9M4Y3 = "6WcT8c1UGSIRtRTb5XpSRw8J6aKhx7GJUfEDIerfM8Uzo9UEoBZqYwyWFHSp6lk9mbwSXM2";
		const _returnValueFbQLHb = await _OptionzBgUMDK.env(_nameD9M4Y3)
		const _fnlBPbANs = "0ZLr4ggniU8JiZzlr15jr3SnTMxCvWHdKY8aEVvVqM0UJEZMSB1Jp0fxBPiqU8P2oqUR4E28BDY";
		const _returnValuel1CrxvG = await _OptionzBgUMDK.argParser(_fnlBPbANs)
	});

	it('test for Option', async () => {
		const _flagsjQRygyf = "hDgERNyIMqr4jgUrnp9NzUYDVkPBgAfOkjnJANMPFBfS5i";
		const _descriptionGJCQglz = -0.4671433873887114;
		const _OptionUc2it7D = new Option(_flagsjQRygyf, _descriptionGJCQglz)
		const _fnysLW11 = {
		
	}
		const _returnValueObcmoOn = await _OptionUc2it7D.argParser(_fnysLW11)
		const _returnValuejFz13E8 = "WKc6B4OVe4yqYOLlRf6VTgzT9M9WcdgLaQASbhxBr5KGyYN5EmAPjnMeuqNczC3Xh6XEDWJYSVCb5qn9zE3N";
		const _valuesHaVEQWw = () => { return _returnValuejFz13E8 };
		const _returnValueDUkEBK5 = await _OptionUc2it7D.choices(_valuesHaVEQWw)
	});

	it('test for Option', async () => {
		const _flagsy3iPOIi = "tuptvqJ63CctfenjzrZTfkcYeO5ze5VCAHZv4aBUXVMYS2cUl5ADfRKMVNI2HEK";
		const _descriptionk170uJF = 8.306328807993594;
		const _Optioncz6o74j = new Option(_flagsy3iPOIi, _descriptionk170uJF)
		const _mandatoryEpGL7G0 = false;
		const _returnValuesjoS5iG = await _Optioncz6o74j.makeOptionMandatory(_mandatoryEpGL7G0)
		const _argWrGtC7X = {
		
	}
		const _returnValueZNnFCuL = await _Optioncz6o74j.is(_argWrGtC7X)
		const _hidefYLNHXw = true;
		const _returnValueWClFjdS = await _Optioncz6o74j.hideHelp(_hidefYLNHXw)
	});

	it('test for Option', async () => {
		const _flagszyDY8ZW = "6lJxokqeRkmrc5ONJmf4FurWtAnXPak3o1tQOo4qGJktHf2yizajFk9vuPyiD7WEm";
		const _descriptionpe7aGu = null;
		const _OptionFJinvX6 = new Option(_flagszyDY8ZW, _descriptionpe7aGu)
		const _hidem1rBbZU = false;
		const _returnValuejxHrHXK = await _OptionFJinvX6.hideHelp(_hidem1rBbZU)
		const _returnValue8PQu4n = true;
		const _name670i5O = () => { return _returnValue8PQu4n };
		const _returnValueQWp8KT2 = await _OptionFJinvX6.env(_name670i5O)
		const _valueNOGZ1hg = undefined;
		const _descriptionixDsqb = "8RX2adkFf9MYIqZT6OBA63spBfkqXVgY1EhNKO48E3Bh4l0MmDqKsMGlePouK3S8B7IUAi6JjVcKabqAIvpISYmJROqU7CzP";
		const _returnValueB77GTlN = await _OptionFJinvX6.default(_valueNOGZ1hg, _descriptionixDsqb)
		const _returnValueevtEkmf = "nlZvRS2atgJHLl4hfVtl6gufTtdmroewQ8OsOI1raxtfzwdFIn1PH92znwZJvC4YUFvAy5FUokngpBA5pvjobJT9BhEVNjUG";
		const _valuec44Iy9z = () => { return _returnValueevtEkmf };
		const _returnValueb7XFDWE = null;
		const _previousiwx2kJN = () => { return _returnValueb7XFDWE };
		const _returnValueYtWOnnI = await _OptionFJinvX6._concatValue(_valuec44Iy9z, _previousiwx2kJN)
	});

	it('test for Option', async () => {
		const _flagszH3htLe = "UF00YWwY7I1ViIJhWOWAlHA509h7XUbFoS7JLmrrP";
		const _descriptionILvyit = "VvJ8fgnWznhfVC389DQJPBpR9thqho2";
		const _OptionDpXPqYX = new Option(_flagszH3htLe, _descriptionILvyit)
		const _mandatoryum6y1X = false;
		const _returnValueKXF8Ijv = await _OptionDpXPqYX.makeOptionMandatory(_mandatoryum6y1X)
		const _returnValue2P3lMY = await _OptionDpXPqYX.attributeName()
		const _valuesgwtI0Ji = "2dk9mphzX2KA1A0XC1zMw2aAI5LhM1YXsscSgaOVWIras98DwfUBqb3LHO2df";
		const _returnValuewXNBFf = await _OptionDpXPqYX.choices(_valuesgwtI0Ji)
		const _fnTiLqH1B = undefined;
		const _returnValuejZj2pKD = await _OptionDpXPqYX.argParser(_fnTiLqH1B)
	});

	it('test for Option', async () => {
		const _flagsvdyCi6x = "dQTiY7ln4SX9z8oAllZrfUtoUJJUkmsK6Anu6C";
		const _descriptionrqv1aDd = "BNiOvuSFKCrFwjGFw4P7vbMbYRTe1B8aMTCg4dLfDU8OnsEV1APv9oAs";
		const _OptionQ3epqrh = new Option(_flagsvdyCi6x, _descriptionrqv1aDd)
		const _valuevVPRege = -0.5222610921517656;
		const _arrayValuehBue6E = "KfaGt9PJXFjsGMPLhI8xc7B07eqgGUNIUAXCcvAcnz4s7OX4DDIFbs3kqb9t5AMzcWmUnTj69efDsMizk";
		const _arrayValueNnTjVA = null;
		const _previousMOerlIl = [_arrayValuehBue6E, _arrayValueNnTjVA]
		const _returnValueyGf01UG = await _OptionQ3epqrh._concatValue(_valuevVPRege, _previousMOerlIl)
		const _returnValueLqM9QEx = await _OptionQ3epqrh.name()
		const _arrayValueYw5yf6s = undefined;
		const _valuesqbbZbXu = [_arrayValueYw5yf6s]
		const _returnValueVhvfmw9 = await _OptionQ3epqrh.choices(_valuesqbbZbXu)
	});
})