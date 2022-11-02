export {}
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");

describe('Option', () => {
	it('test for Option', async () => {
		const _flagsAzJsdtp = "S3uORgRz";
		const _descriptionT1aLla = null;
		const _Option7fTxji = new Option(_flagsAzJsdtp, _descriptionT1aLla)
		const _returnValueVcufpy = null;
		const _valuesbDLVpV = () => { return _returnValueVcufpy };
		const _returnValueJSK7bPW = await _Option7fTxji.choices(_valuesbDLVpV)
		const _returnValueCAAx8GL = await _Option7fTxji.attributeName()
		const _returnValueuQXSM3P = 4.629449901068433;
		const _valuecNi5YYR = () => { return _returnValueuQXSM3P };
		const _arrayValue1YvDel = "IiSN5u8dLQAwXZfWrxVTv5ptGICrjvkKbbJnxnjrbKa";
		const _previousul3P98i = [_arrayValue1YvDel]
		const _returnValue5vS90t = await _Option7fTxji._concatValue(_valuecNi5YYR, _previousul3P98i)
		const _returnValueZnKpHPV = await _Option7fTxji.attributeName()
	});

	it('test for Option', async () => {
		const _flagsAkB6GU = "xP2HRZ";
		const _descriptionXYf2aSj = null;
		const _OptionZU9DeP = new Option(_flagsAkB6GU, _descriptionXYf2aSj)
		const _mandatorydEOX4gL = false;
		const _returnValuerdtSohE = await _OptionZU9DeP.makeOptionMandatory(_mandatorydEOX4gL)
		const _valueqabpbD9 = true;
		const _returnValuec3EyOh0 = null;
		const _previousVcYojAP = () => { return _returnValuec3EyOh0 };
		const _returnValued6nGmAV = await _OptionZU9DeP._concatValue(_valueqabpbD9, _previousVcYojAP)
		const _mandatoryG4mTA2I = true;
		const _returnValueCWfDS9Y = await _OptionZU9DeP.makeOptionMandatory(_mandatoryG4mTA2I)
	});

	it('test for Option', async () => {
		const _flagsvaC1Rht = "9dMFhDnFwcIqAtcL5khWERUSSP9EIUnyKeC9um5wmSnMkzDqJpUlTCX8cS4Tn3W7l8umUeCcXLGFV0SmnVaVInibK";
		const _descriptioni5R3t6n = false;
		const _OptioneeK9FEf = new Option(_flagsvaC1Rht, _descriptioni5R3t6n)
		const _returnValuezqmXOta = await _OptioneeK9FEf.attributeName()
		const _hideL0DscGD = false;
		const _returnValueMRe3ka0 = await _OptioneeK9FEf.hideHelp(_hideL0DscGD)
		const _returnValueck4ar1z = undefined;
		const _valuesWqT5cwh = () => { return _returnValueck4ar1z };
		const _returnValuebwXtpEH = await _OptioneeK9FEf.choices(_valuesWqT5cwh)
	});

	it('test for Option', async () => {
		const _flagsyxd3YXD = "so94VGcj89EM2LVCdw976L4Yr";
		const _descriptiongxWEZFo = false;
		const _OptionEJuz7A = new Option(_flagsyxd3YXD, _descriptiongxWEZFo)
		const _valuesxk59mQL = null;
		const _returnValuewJgej2d = await _OptionEJuz7A.choices(_valuesxk59mQL)
		const _returnValueuUOImK = await _OptionEJuz7A.attributeName()
		const _fnXmTBCVP = undefined;
		const _returnValueGifGTll = await _OptionEJuz7A.argParser(_fnXmTBCVP)
		const _mandatoryaKTZmS = true;
		const _returnValueKan1pgL = await _OptionEJuz7A.makeOptionMandatory(_mandatoryaKTZmS)
	});

	it('test for Option', async () => {
		const _flagsIidciQn = "9kPOJ";
		const _arrayValueE56KYsu = true;
		const _arrayValuePQAdrun = {
		
	}
		const _arrayValues4F5QYG = true;
		const _descriptionqEstls1 = [_arrayValueE56KYsu, _arrayValuePQAdrun, _arrayValues4F5QYG]
		const _OptionCFTG4UY = new Option(_flagsIidciQn, _descriptionqEstls1)
		const _hideqgPAb8x = false;
		const _returnValuedbu39sm = await _OptionCFTG4UY.hideHelp(_hideqgPAb8x)
		const _valueoUKwZ7E = undefined;
		const _arrayValueLBPgkX0 = -5.199628642856203;
		const _arrayValueqKlTr3e = {
		
	}
		const _descriptionnomgMuM = [_arrayValueLBPgkX0, _arrayValueqKlTr3e]
		const _returnValue7OHoP5 = await _OptionCFTG4UY.default(_valueoUKwZ7E, _descriptionnomgMuM)
		const _nameTaulaEK = undefined;
		const _returnValuez5pNmI0 = await _OptionCFTG4UY.env(_nameTaulaEK)
	});

	it('test for Option', async () => {
		const _flagsH87OAUr = "rSG63zG7kC3A577EDBJwyJ5o75DW3lzRbU73dPNMYAMiuJnvrcfJY";
		const _returnValueqUhJLEM = undefined;
		const _descriptionPC6uSlH = () => { return _returnValueqUhJLEM };
		const _OptionRKEELYa = new Option(_flagsH87OAUr, _descriptionPC6uSlH)
		const _argbG02R81 = {
		
	}
		const _returnValueiDnnW33 = await _OptionRKEELYa.is(_argbG02R81)
		const _valueV39anmc = "KcdT8";
		const _arrayValueCtF8WUV = {
		
	}
		const _previousEQ3Q3Js = [_arrayValueCtF8WUV]
		const _returnValueU0WI9oM = await _OptionRKEELYa._concatValue(_valueV39anmc, _previousEQ3Q3Js)
	});
})