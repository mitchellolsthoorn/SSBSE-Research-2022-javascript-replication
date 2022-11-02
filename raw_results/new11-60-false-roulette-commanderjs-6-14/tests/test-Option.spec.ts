export {}
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Option', () => {
	it('test for Option', async () => {
		const _returnValueJXkeM4t = null;
		const _includesAN6UUEz = () => { return _returnValueJXkeM4t };
		const _flagseMDSgun = {
			"includes": _includesAN6UUEz
	}
		const _arrayValues6abvBG = undefined;
		const _arrayValuenejxlK = undefined;
		const _arrayValueSsrsxn = undefined;
		const _arrayValuesx5GI08 = [_arrayValueSsrsxn]
		const _arrayValueFgFLmF0 = {
		
	}
		const _descriptions1HoLF = [_arrayValues6abvBG, _arrayValuenejxlK, _arrayValuesx5GI08, _arrayValueFgFLmF0]
		const _OptionrrkQ8k = new Option(_flagseMDSgun, _descriptions1HoLF)
		const _hidelge43B6 = true;
		const _returnValueC66Awrd = await _OptionrrkQ8k.hideHelp(_hidelge43B6)
		const _valuebR3EcC = true;
		const _previouso3KKjWm = "NIx8rkp4wDuRD1UofGR2mYrBBQjEf3xapkUYiGnsgywtXakTR7Wz4u06oHdNm2KxhUuAnqr";
		const _returnValueJeWBlIQ = await _OptionrrkQ8k._concatValue(_valuebR3EcC, _previouso3KKjWm)
		const _fnG7nzv84 = undefined;
		const _returnValueyLpTlr = await _OptionrrkQ8k.argParser(_fnG7nzv84)
		const _returnValuekaAMgS5 = await _OptionrrkQ8k.attributeName()
	});

	it('test for Option', async () => {
		const _flagssniTnF = "OK7ryrwY9XnPh4WRq93k5bzbs2VVVMNWLNjxfNXc8NzWcZ51Xvi4IFr2";
		const _description2Z1oDY = -0.47255703042762676;
		const _Option3D5w06 = new Option(_flagssniTnF, _description2Z1oDY)
		const _fnvT44evF = undefined;
		const _returnValuet73ngPJ = await _Option3D5w06.argParser(_fnvT44evF)
		const _namet3RG2U = undefined;
		const _returnValueklwDLS = await _Option3D5w06.env(_namet3RG2U)
		const _returnValuefgF47h = await _Option3D5w06.attributeName()
		const _fnQlESHUv = undefined;
		const _returnValueyCRwK8H = await _Option3D5w06.argParser(_fnQlESHUv)
	});

	it('test for Option', async () => {
		const _flagsABFDTB3 = "Jpj";
		const _descriptionDbXR9ub = false;
		const _OptionW8J0ZI = new Option(_flagsABFDTB3, _descriptionDbXR9ub)
		const _values0jzbjn = undefined;
		const _returnValueMDCt5GZ = -3.431877983786932;
		const _concatJTcizod = () => { return _returnValueMDCt5GZ };
		const _previousH1FJAtG = {
			"concat": _concatJTcizod
	}
		const _returnValueIJEiYUN = await _OptionW8J0ZI._concatValue(_values0jzbjn, _previousH1FJAtG)
		const _returnValuevsKLTDT = await _OptionW8J0ZI.attributeName()
		const _namezn1n50K = undefined;
		const _returnValuegzmjs3E = await _OptionW8J0ZI.env(_namezn1n50K)
		const _returnValueksi8XkQ = await _OptionW8J0ZI.attributeName()
	});

	it('test for Option', async () => {
		const _flagsk5R4Oww = "G8eFtBTimSVn1";
		const _descriptionalTsm72 = true;
		const _OptionTJhjZW = new Option(_flagsk5R4Oww, _descriptionalTsm72)
		const _returnValue5kS2Kf = await _OptionTJhjZW.name()
		const _returnValuePTk50KG = true;
		const _valueABna4yd = () => { return _returnValuePTk50KG };
		const _returnValueHnkzY3a = null;
		const _concatL0bQO6C = () => { return _returnValueHnkzY3a };
		const _previousB3ZW1tC = {
			"concat": _concatL0bQO6C
	}
		const _returnValuenEkMQOF = await _OptionTJhjZW._concatValue(_valueABna4yd, _previousB3ZW1tC)
		const _namenos3HrJ = undefined;
		const _returnValueVn3MGaX = await _OptionTJhjZW.env(_namenos3HrJ)
		const _valueSOhepS4 = undefined;
		const _descriptionVt2TJyV = undefined;
		const _returnValueVmpjEls = await _OptionTJhjZW.default(_valueSOhepS4, _descriptionVt2TJyV)
	});

	it('test for Option', async () => {
		const _flagsWOgCQGV = "UwUKcIWpTU14aFAS31PSh6FmG5gmPM";
		const _descriptionPsjFPUe = null;
		const _OptionvPKMSLO = new Option(_flagsWOgCQGV, _descriptionPsjFPUe)
		const _mandatorypO7FZm = undefined;
		const _returnValuesVF2ES8 = await _OptionvPKMSLO.makeOptionMandatory(_mandatorypO7FZm)
		const _valuesBCRhVzL = -0.11050897286647832;
		const _returnValueUC29MxX = await _OptionvPKMSLO.choices(_valuesBCRhVzL)
	});

	it('test for Option', async () => {
		const _flagsEkf9Po5 = "ifkQD2v0DsieI";
		const _descriptionhXlxr4h = undefined;
		const _OptionmnZ2T6z = new Option(_flagsEkf9Po5, _descriptionhXlxr4h)
		const _mandatoryNg6c1R3 = false;
		const _returnValueEKvjza8 = await _OptionmnZ2T6z.makeOptionMandatory(_mandatoryNg6c1R3)
		const _mandatorygkRZlRc = false;
		const _returnValuezFn9p1K = await _OptionmnZ2T6z.makeOptionMandatory(_mandatorygkRZlRc)
		const _hideDcw8xLj = "tG9dIo17quJqiY1dshb2sqY74kH1U7ABvCrp3EUD9Vpetv91oUrqKKIXmNF5AsZaUFvckseaKJ";
		const _returnValueo5sVpfI = await _OptionmnZ2T6z.hideHelp(_hideDcw8xLj)
		const _valueZ8n20Uu = "n7rUWhhW8DbCV1TSt8x7VNlroHFgkToMpaAsS1KSXdczSI8VbhVu3";
		const _previousqtfhJ3m = -3.9274790134351747;
		const _returnValueVUU6SYn = await _OptionmnZ2T6z._concatValue(_valueZ8n20Uu, _previousqtfhJ3m)
	});

	it('test for Option', async () => {
		const _flagsiBtiDBb = "IPQsFHLWLqReHrHo5UiL4s31hZTFipJJBXIOBC3RlsAHAfGzAEytW2mC4dEmjXS";
		const _arrayValueZCjpy6I = -8.810083166985384;
		const _returnValueNTSIS6T = undefined;
		const _arrayValueYWcpBQ = () => { return _returnValueNTSIS6T };
		const _arrayValueadDf8Kt = [_arrayValueZCjpy6I, _arrayValueYWcpBQ]
		const _arrayValueQx0Nlk6 = null;
		const _arrayValueHEkGSRC = -9.79472237520866;
		const _descriptionCnnHXQ = [_arrayValueadDf8Kt, _arrayValueQx0Nlk6, _arrayValueHEkGSRC]
		const _OptionzrdBKD8 = new Option(_flagsiBtiDBb, _descriptionCnnHXQ)
		const _mandatoryEMBRWoo = undefined;
		const _returnValuearqawkf = await _OptionzrdBKD8.makeOptionMandatory(_mandatoryEMBRWoo)
		const _mandatorywcQCOHV = {
		
	}
		const _returnValueztJcL1D = await _OptionzrdBKD8.makeOptionMandatory(_mandatorywcQCOHV)
		const _hideMvHX0fU = true;
		const _returnValuepCo9PSS = await _OptionzrdBKD8.hideHelp(_hideMvHX0fU)
		const _valuesldTQHGH = "9fx197hON68Nb";
		const _returnValuejpiWBVE = await _OptionzrdBKD8.choices(_valuesldTQHGH)
		const _value3nKDbO = {
		
	}
		const _arrayValuec9UTAuJ = "hC2zXewGj8I7K5jrd1FdJykg1S9djnMXg4v3n1FYnpgsEKRVUUygI";
		const _previousd5x1IZ3 = [_arrayValuec9UTAuJ]
		const _returnValuew7kp2bP = await _OptionzrdBKD8._concatValue(_value3nKDbO, _previousd5x1IZ3)
	});

	it('test for Option', async () => {
		const _flagsxBy7GIV = "xlssDCepz6wGVNYo1Juf7";
		const _description38FrRO = undefined;
		const _Option7JzOyr = new Option(_flagsxBy7GIV, _description38FrRO)
		const _argWHZX3d7 = {
		
	}
		const _returnValuenu0KYw0 = await _Option7JzOyr.is(_argWHZX3d7)
		const _returnValuewYEs7Q1 = await _Option7JzOyr.name()
	});
})