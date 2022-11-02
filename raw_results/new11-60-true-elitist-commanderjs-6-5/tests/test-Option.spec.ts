export {}
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");

describe('Option', () => {
	it('test for Option', async () => {
		const _flagssT0Ge4R = "sdEAwld3DFCe1u1Z6hXfUmJeoYpUXMEoI6l37nBvuFk5tCsIDGW";
		const _returnValueiXq20mk = false;
		const _descriptionanXyGiO = () => { return _returnValueiXq20mk };
		const _OptionG76lbpP = new Option(_flagssT0Ge4R, _descriptionanXyGiO)
		const _hidesCymmG7 = false;
		const _returnValueJWaVlme = await _OptionG76lbpP.hideHelp(_hidesCymmG7)
		const _returnValueH6gOb4 = await _OptionG76lbpP.name()
		const _valueniwJmB8 = undefined;
		const _descriptionYXbg8Zo = null;
		const _returnValueuQ5u8D4 = await _OptionG76lbpP.default(_valueniwJmB8, _descriptionYXbg8Zo)
		const _argJeYNUSZ = "qGxf0UbgEEYtFU3Askwhlw5vsiJ5X2wovR3WfZC2AScrkkGlA7RfTd3JBYWb7MUou1MIcnUiIAvGBLC2Xf1SGMb";
		const _returnValueix9PGvA = await _OptionG76lbpP.is(_argJeYNUSZ)
		const _arrayValuetaKHpt = undefined;
		const _arrayValue8uzcJ9 = true;
		const _arrayValueXcdbqO2 = undefined;
		const _returnValuewlu7cog = [_arrayValuetaKHpt, _arrayValue8uzcJ9, _arrayValueXcdbqO2]
		const _valuensF1DhT = () => { return _returnValuewlu7cog };
		const _arrayValuepFSnfKg = -1.2735171696063432;
		const _arrayValuehrCWN1r = "NUiv7sI5NpklPF2fcAGxMx945axNSVhFPifHy2w9HvCqKZnqirjOtwoMK1uod4SppoDO";
		const _returnValueITqtGuH = [_arrayValuepFSnfKg, _arrayValuehrCWN1r]
		const _returnValueZFWArBE = () => { return _returnValueITqtGuH };
		const _concatXY7Jgp = () => { return _returnValueZFWArBE };
		const _previousooArpVf = {
			"concat": _concatXY7Jgp
	}
		const _returnValueRnGhQER = await _OptionG76lbpP._concatValue(_valuensF1DhT, _previousooArpVf)
	});

	it('test for Option', async () => {
		const _flagsfUw3ipc = "5ByYFXNO5rvlNepvBRcchJ4LEWe19D27wiTBvpnljx";
		const _descriptiongybU2nT = undefined;
		const _OptionUj5iABF = new Option(_flagsfUw3ipc, _descriptiongybU2nT)
		const _returnValuezaN75xQ = null;
		const _arrayValueXOee6X = () => { return _returnValuezaN75xQ };
		const _arrayValuefYxTZzJ = {
		
	}
		const _arrayValueS7V7EM = null;
		const _nameTM2cZAb = [_arrayValueXOee6X, _arrayValuefYxTZzJ, _arrayValueS7V7EM]
		const _returnValueQt96fC3 = await _OptionUj5iABF.env(_nameTM2cZAb)
	});

	it('test for Option', async () => {
		const _flagsYMN4c5Y = "m7dJQOg1WBf3qTfv6wEvxItuwjK8z2Rk1bxi6gCZqR";
		const _descriptionSeuBgn = "hlX";
		const _OptionQepDoWh = new Option(_flagsYMN4c5Y, _descriptionSeuBgn)
		const _valuekcB73hQ = undefined;
		const _descriptionHqqqh1X = {
		
	}
		const _returnValueLM0Fpw1 = await _OptionQepDoWh.default(_valuekcB73hQ, _descriptionHqqqh1X)
		const _returnValueIprC5XC = await _OptionQepDoWh.name()
		const _arrayValuepUKCCtu = null;
		const _arrayValueOi1GQnB = true;
		const _arrayValueNOESogI = [_arrayValueOi1GQnB]
		const _includesPtbJF8g = [_arrayValuepUKCCtu, _arrayValueNOESogI]
		const _returnValuefG8rqqy = 7.233182611605372;
		const _joinmQk2PG2 = () => { return _returnValuefG8rqqy };
		const _valuesXhZY6Oa = {
			"includes": _includesPtbJF8g,
		"join": _joinmQk2PG2
	}
		const _returnValueUwNKf5 = await _OptionQepDoWh.choices(_valuesXhZY6Oa)
		const _valuedIsMzMC = undefined;
		const _descriptionlDcIB1T = {
		
	}
		const _returnValue1Iv1IK = await _OptionQepDoWh.default(_valuedIsMzMC, _descriptionlDcIB1T)
	});

	it('test for Option', async () => {
		const _flagsHYMEPXK = "e7etyF3AVTmeALVQPhb4KWmTWoKwKr2UKfwDOQA7YCV80n48vigAIRk6W69pZgOa8VpX9b8O2C8XCrWBzA4HXF";
		const _descriptiongVEE4cT = undefined;
		const _Optionitujqu = new Option(_flagsHYMEPXK, _descriptiongVEE4cT)
		const _argsZPXzDL = "bSJy3ETlFACksbhINWInYrJpob9OUW62njZ1PRu4D15ogyO4spHT";
		const _returnValuedRE8bHY = await _Optionitujqu.is(_argsZPXzDL)
		const _fnXjCExTa = undefined;
		const _returnValueCVMIIPx = await _Optionitujqu.argParser(_fnXjCExTa)
		const _returnValueIjtKhYS = -7.711538583329233;
		const _arrayValue8KDC8C = () => { return _returnValueIjtKhYS };
		const _nameZCmsp2n = [_arrayValue8KDC8C]
		const _returnValueUbQThD = await _Optionitujqu.env(_nameZCmsp2n)
		const _returnValuem461oy = await _Optionitujqu.name()
	});

	it('test for Option', async () => {
		const _flagsoxP0RG = "sLScpEUE3OIpuOcRy";
		const _descriptionH354YXh = -8.850793567196265;
		const _OptionDij5kOv = new Option(_flagsoxP0RG, _descriptionH354YXh)
		const _valuehQhwiHD = undefined;
		const _descriptionVrPR6Gm = {
		
	}
		const _returnValueR0yfS9 = await _OptionDij5kOv.default(_valuehQhwiHD, _descriptionVrPR6Gm)
		const _mandatoryJjnLdr = false;
		const _returnValuepHsrmNR = await _OptionDij5kOv.makeOptionMandatory(_mandatoryJjnLdr)
	});

	it('test for Option', async () => {
		const _flagsDpxGtPQ = "Po2kWQUI2yM72sCdvfokOyia8GKQJML3PFGNt7Xr9dJlQypW";
		const _arrayValueQM5kHn = false;
		const _arrayValueNiXUdLW = {
		
	}
		const _arrayValueFGz0ka = "5wPaLxLa6w";
		const _descriptionjZMWUte = [_arrayValueQM5kHn, _arrayValueNiXUdLW, _arrayValueFGz0ka]
		const _OptionD1SH1GF = new Option(_flagsDpxGtPQ, _descriptionjZMWUte)
		const _returnValueZcPBggu = await _OptionD1SH1GF.attributeName()
		const _hideivXpVS = false;
		const _returnValueAhm7Sy8 = await _OptionD1SH1GF.hideHelp(_hideivXpVS)
		const _returnValuewCoTHAn = await _OptionD1SH1GF.name()
	});

	it('test for Option', async () => {
		const _flagskuTlFzx = "OWUPsx3GyqKIxZM55N30RpJ6mMGLHKw";
		const _arrayValueZghMak4 = false;
		const _arrayValuefZD1h12 = false;
		const _arrayValuef4K2542 = "YU3dWynuAeiRvwWhHpKscgBhwIjfDanCsOTNJQQwyIZDRmETxpqUkkV";
		const _descriptionrmfXP8 = [_arrayValueZghMak4, _arrayValuefZD1h12, _arrayValuef4K2542]
		const _Optionb3I17za = new Option(_flagskuTlFzx, _descriptionrmfXP8)
		const _valuennug4Lt = "S1eOKSAU1Gh9w6wzxQpVWWpxRzcDNKx43bpqRMwqJR3nhkXd2jmkRZY3nXDEU0";
		const _arrayValuefobOtiC = -6.592059096327935;
		const _arrayValueDZ5sk2M = undefined;
		const _arrayValueyEGBY7F = "Uyghh6MaqPBW3A2tR54pX3cgoRUNLG7PVfcLZY78EROG7uai99gATQ9q24dGUv4DjXsQBHPIg2kKJtWNQg9MQ3HUup";
		const _returnValueDzlh5Di = [_arrayValuefobOtiC, _arrayValueDZ5sk2M, _arrayValueyEGBY7F]
		const _arrayValueqRPJeD1 = () => { return _returnValueDzlh5Di };
		const _arrayValueid4Af1Y = null;
		const _previouseCVUh7D = [_arrayValueqRPJeD1, _arrayValueid4Af1Y]
		const _returnValuet1Ur0qb = await _Optionb3I17za._concatValue(_valuennug4Lt, _previouseCVUh7D)
		const _valueocRWel = undefined;
		const _descriptionGvl3oNt = "l54TGEcrML4JZc6gepeLRAWdFZYXWQst9IUIElU8Rt7egLkrpze";
		const _returnValuevMGFzco = await _Optionb3I17za.default(_valueocRWel, _descriptionGvl3oNt)
		const _returnValueelIoTJE = "JQKkv7XJhHxUZn9Hy1U3MhSl";
		const _includesaCpKCo8 = () => { return _returnValueelIoTJE };
		const _arrayValueOhMIcf8 = null;
		const _arrayValueOebGjnq = undefined;
		const _arrayValueKgFHqGF = {
		
	}
		const _arrayValuegRuxyKL = null;
		const _returnValueWrUeVgF = [_arrayValueOhMIcf8, _arrayValueOebGjnq, _arrayValueKgFHqGF, _arrayValuegRuxyKL]
		const _joinu6xg6uC = () => { return _returnValueWrUeVgF };
		const _valuesOAcnxFA = {
			"includes": _includesaCpKCo8,
		"join": _joinu6xg6uC
	}
		const _returnValueXOzTlcT = await _Optionb3I17za.choices(_valuesOAcnxFA)
	});
})