export {}
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");

describe('Option', () => {
	it('test for Option', async () => {
		const _flagsFtwHXVZ = "hr477osnqEeQ5bY0p9OiaKwwzmdmEla8ed";
		const _descriptionQyepDw1 = undefined;
		const _OptionoZu1rcl = new Option(_flagsFtwHXVZ, _descriptionQyepDw1)
		const _returnValuegNOcZr0 = -0.34369203872932275;
		const _arrayValueLwXrLwu = () => { return _returnValuegNOcZr0 };
		const _arrayValueL7atUxX = 4.4012809821316505;
		const _arrayValuercVRL8 = true;
		const _arrayValueN7VtMWM = true;
		const _arrayValuefoLRV7 = undefined;
		const _arrayValue3JwRCB = [_arrayValueL7atUxX, _arrayValuercVRL8, _arrayValueN7VtMWM, _arrayValuefoLRV7]
		const _valuesQHeDekA = [_arrayValueLwXrLwu, _arrayValue3JwRCB]
		const _returnValuebFyY0t8 = await _OptionoZu1rcl.choices(_valuesQHeDekA)
		const _namefBp1vdE = undefined;
		const _returnValueBgizMqo = await _OptionoZu1rcl.env(_namefBp1vdE)
	});

	it('test for Option', async () => {
		const _flagsXB07XSX = "lDaQUgOa8HNQpER2ecRdPfFIqblPHFD0ZRcKHiwbeO2HefI3lBYMmaBWD5DwiDMl";
		const _descriptioni0tDlKT = true;
		const _OptionbMqmDL7 = new Option(_flagsXB07XSX, _descriptioni0tDlKT)
		const _returnValuesDW4gao = null;
		const _returnValueOIxdlXX = () => { return _returnValuesDW4gao };
		const _valueghKLBb = () => { return _returnValueOIxdlXX };
		const _arrayValueTRvt0Is = null;
		const _arrayValueFhnYd7d = undefined;
		const _previousDluIPiS = [_arrayValueTRvt0Is, _arrayValueFhnYd7d]
		const _returnValuegjWjvw2 = await _OptionbMqmDL7._concatValue(_valueghKLBb, _previousDluIPiS)
		const _fnoE3L7kB = undefined;
		const _returnValueCjdv5Pe = await _OptionbMqmDL7.argParser(_fnoE3L7kB)
		const _mandatoryWFPel7W = true;
		const _returnValueMrnCktB = await _OptionbMqmDL7.makeOptionMandatory(_mandatoryWFPel7W)
	});

	it('test for Option', async () => {
		const _flagsoDcZWz9 = "cahwXYQ13gy2bbdKt3Iv4weu5AQ2TL4VW8EJDYMC5jMw5A4ctFFQdcADoiPnYpvBGHszIcyDvJvv1ijVn";
		const _returnValueEzAyvnZ = true;
		const _descriptionuNCl7W = () => { return _returnValueEzAyvnZ };
		const _Optiontyvjw5h = new Option(_flagsoDcZWz9, _descriptionuNCl7W)
		const _fnPENKZdS = false;
		const _returnValueyJhqtlA = await _Optiontyvjw5h.argParser(_fnPENKZdS)
		const _valueOYTI4ti = undefined;
		const _returnValueHVOxlTh = undefined;
		const _concatwfUQ9ah = () => { return _returnValueHVOxlTh };
		const _previousXcjk3go = {
			"concat": _concatwfUQ9ah
	}
		const _returnValueHmaJYYU = await _Optiontyvjw5h._concatValue(_valueOYTI4ti, _previousXcjk3go)
		const _argntGT6Ak = {
		
	}
		const _returnValueR2d2TWb = await _Optiontyvjw5h.is(_argntGT6Ak)
		const _arglUZo0Wz = "eSbJSUpalGFb3BpigRHcFbEN9sKaginbWOK4aBDBON0xuXD5l23LPtU1d";
		const _returnValueB6wOAXr = await _Optiontyvjw5h.is(_arglUZo0Wz)
	});

	it('test for Option', async () => {
		const _flagsIn0AWf9 = "zGUKO5OHalhULZpUoHdqEBb8UyxEDdegmdih6pUFsHts1v9";
		const _descriptionSvToG07 = "HmL25U8HpNsVrpxhaiISnTiPutrzWUUIPl";
		const _OptionEJc88N = new Option(_flagsIn0AWf9, _descriptionSvToG07)
		const _returnValueQygwKgV = await _OptionEJc88N.attributeName()
		const _hideureSQnP = true;
		const _returnValueMeVaX8L = await _OptionEJc88N.hideHelp(_hideureSQnP)
		const _returnValueFS9IdRE = await _OptionEJc88N.attributeName()
	});

	it('test for Option', async () => {
		const _flagsytQEyLy = "91gjj9TjlTJojkmSniPRSxcBzFX65oQWXvQROw6JE29v2a";
		const _descriptionYqDUpCQ = -8.720967507160676;
		const _OptionB4G4aBO = new Option(_flagsytQEyLy, _descriptionYqDUpCQ)
		const _valueuepNMeD = undefined;
		const _descriptionSRMtNzR = undefined;
		const _returnValueHlig6lD = await _OptionB4G4aBO.default(_valueuepNMeD, _descriptionSRMtNzR)
	});
})