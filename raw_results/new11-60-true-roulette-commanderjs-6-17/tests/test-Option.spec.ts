export {}
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");

describe('Option', () => {
	it('test for Option', async () => {
		const _flagsdXo5FDi = "";
		const _descriptionsUEwSY7 = {
		
	}
		const _OptionS0xV3l = new Option(_flagsdXo5FDi, _descriptionsUEwSY7)
		const _valuedidl5I5 = "yFAnbsCU5gUkaQfoUB1qCaGWbO6lzBlFMsvfe0ANNdWT3Epf5odsniFqicd";
		const _previousI8NRBf = {
		
	}
		const _returnValue2aCG6u = await _OptionS0xV3l._concatValue(_valuedidl5I5, _previousI8NRBf)
		const _nameAzUETyB = "v72mOb2hBbAG8R80023C5WYrSCcUJA1IjTlavcD";
		const _returnValuefndzU4N = await _OptionS0xV3l.env(_nameAzUETyB)
	});

	it('test for Option', async () => {
		const _flagszvDE3tB = "GHMLzFkgW0z5kzBg7iYY";
		const _arrayValuevJ5rPvH = "dGNaeqmB9Uh0227nqk2ufTwcC1pUdbz0Q6S53NIXls";
		const _returnValueVdYS7Wo = 6.094697043912994;
		const _arrayValueJlTOxzM = () => { return _returnValueVdYS7Wo };
		const _arrayValueJOZThbi = undefined;
		const _arrayValuezGnbje2 = undefined;
		const _descriptionBAV4mHD = [_arrayValuevJ5rPvH, _arrayValueJlTOxzM, _arrayValueJOZThbi, _arrayValuezGnbje2]
		const _OptionzHm2vuk = new Option(_flagszvDE3tB, _descriptionBAV4mHD)
		const _namejWMowSn = "itQnziilzyaCHsiHu1GUwpWh4vBcgVnkorlUaTElMecuwpr4wS6U160jJc8Rv5ES5HxYHr7q4B6oUMCqbzoOQKuxIzRtNxyRQ";
		const _returnValueMTJimsf = await _OptionzHm2vuk.env(_namejWMowSn)
		const _fnXeEyZYL = undefined;
		const _returnValueths7Aku = await _OptionzHm2vuk.argParser(_fnXeEyZYL)
	});

	it('test for Option', async () => {
		const _flagsl7qsxIK = "DA6CFVZi6jFeUvrs7wv1BHlVp7QKv3EH40xI0rewLR2jiW9l27T3VyR5AAV";
		const _descriptionSgAArNC = []
		const _OptionALB0Z9y = new Option(_flagsl7qsxIK, _descriptionSgAArNC)
		const _hideZ9afu9n = true;
		const _returnValueAzcevi3 = await _OptionALB0Z9y.hideHelp(_hideZ9afu9n)
		const _namep7NbgTC = {
		
	}
		const _returnValueghgzlOH = await _OptionALB0Z9y.env(_namep7NbgTC)
	});

	it('test for Option', async () => {
		const _flagssu18aZ = "UdzOvOwLXJjMZ1A2XKbNRHDXEQVb7YFEHHfMBXKT4wX7JtBOHotC2e7LlDdt3vzzaA9sM5mBUA5FuWWjIB9bxT1dtcO2";
		const _descriptionS3aVNXY = -5.95328608584153;
		const _OptionFHeygcM = new Option(_flagssu18aZ, _descriptionS3aVNXY)
		const _hider3W9i2t = "T5ZPVjNE1QIQ1zDewpNFztVr5tRhCS6YnhSk9OzyrebrgpQpFfNW0SzS2lMYp3h1fyVSa";
		const _returnValueVKrPXRi = await _OptionFHeygcM.hideHelp(_hider3W9i2t)
		const _fnPuhPSbK = undefined;
		const _returnValueSoPZmY = await _OptionFHeygcM.argParser(_fnPuhPSbK)
		const _mandatorygSDYlyG = false;
		const _returnValueWjXHHSc = await _OptionFHeygcM.makeOptionMandatory(_mandatorygSDYlyG)
		const _returnValue3lTGmB = true;
		const _includesObAw8yh = () => { return _returnValue3lTGmB };
		const _arrayValueTPJS82A = "RzprPjGUaofHyec1TIE8CNoWFW93qFX4SsV4JHkbQEP3Syl4fs";
		const _returnValueBj7KIU4 = [_arrayValueTPJS82A]
		const _joinBOlHXjQ = () => { return _returnValueBj7KIU4 };
		const _values7bRD1E = {
			"includes": _includesObAw8yh,
		"join": _joinBOlHXjQ
	}
		const _returnValueheHqh1b = await _OptionFHeygcM.choices(_values7bRD1E)
		const _returnValueN2ITUMa = false;
		const _valueseKfIn2L = () => { return _returnValueN2ITUMa };
		const _returnValuednDHaPC = await _OptionFHeygcM.choices(_valueseKfIn2L)
	});

	it('test for Option', async () => {
		const _flagshr3BRP = "4G4WT";
		const _descriptionY6l1tIq = undefined;
		const _Optionaf151ye = new Option(_flagshr3BRP, _descriptionY6l1tIq)
		const _returnValueIFijqBc = null;
		const _includesj38rEo = () => { return _returnValueIFijqBc };
		const _returnValuekshvqYU = undefined;
		const _joinxDO6RXz = () => { return _returnValuekshvqYU };
		const _valuesFpopDiQ = {
			"includes": _includesj38rEo,
		"join": _joinxDO6RXz
	}
		const _returnValueSH2u3Ev = await _Optionaf151ye.choices(_valuesFpopDiQ)
		const _fnIj8HVwN = {
		
	}
		const _returnValueT9gfJzX = await _Optionaf151ye.argParser(_fnIj8HVwN)
		const _valueLQUpKF = undefined;
		const _descriptionZVeCLV = "qRPsUaTDbi";
		const _returnValuetwp2hQ = await _Optionaf151ye.default(_valueLQUpKF, _descriptionZVeCLV)
	});

	it('test for Option', async () => {
		const _flagsH3Bogy6 = "Jv41H9TEco66Kjz3qY3JJVY";
		const _returnValueSPBGLh = -1.5031351373353914;
		const _descriptionXmVBzmM = () => { return _returnValueSPBGLh };
		const _OptiondkKGTYC = new Option(_flagsH3Bogy6, _descriptionXmVBzmM)
		const _returnValueZhRycZS = await _OptiondkKGTYC.attributeName()
		const _returnValueoErq6nu = -6.626884627800536;
		const _valuexH5H1vI = () => { return _returnValueoErq6nu };
		const _previousXYSNz6W = {
		
	}
		const _returnValueXjTtrYX = await _OptiondkKGTYC._concatValue(_valuexH5H1vI, _previousXYSNz6W)
		const _hideA85Dnot = false;
		const _returnValueCiqdSNj = await _OptiondkKGTYC.hideHelp(_hideA85Dnot)
	});

	it('test for Option', async () => {
		const _flagsuEKR4K = "mbKtULghiQduYFLd6LtuiLE2iaUsvwg3VeLoDihwXceuJJwhkBXBTV6cKJARxWrw2IOWoGB";
		const _descriptionygGWrMo = {
		
	}
		const _OptionbOAIgG6 = new Option(_flagsuEKR4K, _descriptionygGWrMo)
		const _arg1L6VAu = "o82cJqmvVzz6BeD";
		const _returnValueZEaO95e = await _OptionbOAIgG6.is(_arg1L6VAu)
		const _returnValueb3nRDAZ = await _OptionbOAIgG6.attributeName()
		const _valuekh87gUV = undefined;
		const _previousT2FphQ4 = "K";
		const _returnValueMyAA9ZF = await _OptionbOAIgG6._concatValue(_valuekh87gUV, _previousT2FphQ4)
	});

	it('test for Option', async () => {
		const _flagsML5LS0e = "9fWyDAa2JYd9AWJDdX";
		const _descriptionxhHm3MF = "nbUuun9x8uet9mQovmCRB5ET1Q3Nu1woFqGKO2opfRcSRl5u1iOT9sP7pSGCa7RFYYY";
		const _Optiongb3tGL3 = new Option(_flagsML5LS0e, _descriptionxhHm3MF)
		const _fnP6Ya1Ur = undefined;
		const _returnValuer77Xafg = await _Optiongb3tGL3.argParser(_fnP6Ya1Ur)
		const _arrayValuezCneF0B = "mHu361kC1d2FP6t4OK3HOMhUyRa8WRGDmWPQT";
		const _arrayValueYPA34UF = -5.907781072149204;
		const _valuemH8h3sI = [_arrayValuezCneF0B, _arrayValueYPA34UF]
		const _descriptionjvO3gub = "44h9NIAXGKAcYK4OdwkNAAPccq0bX3GqNsOGFD8h6MvUeT5ag2buCDtrR9H3gbMDJz9hL4fFNQKaBkmJDL6zrzjJWD";
		const _returnValuehx42FM = await _Optiongb3tGL3.default(_valuemH8h3sI, _descriptionjvO3gub)
		const _valueXA10IP = -6.57182437498915;
		const _arrayValuefS1uBKg = "yEc8p3dFslF5h72W2McijgWmONnKRoJ";
		const _arrayValueFmTjmuK = null;
		const _returnValueYxCyDvI = -6.340286511763638;
		const _arrayValuecCQAB6Y = () => { return _returnValueYxCyDvI };
		const _previousSyYXp5 = [_arrayValuefS1uBKg, _arrayValueFmTjmuK, _arrayValuecCQAB6Y]
		const _returnValueOBWwE1Z = await _Optiongb3tGL3._concatValue(_valueXA10IP, _previousSyYXp5)
	});
})