export {}
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");

describe('Option', () => {
	it('test for Option', async () => {
		const _flagsc3vsbtJ = "GUfzG2IO8rlNGrwgY7YCXLVcMSpig9YMxVbimX0AcHv6lWHiWe1FG4h5TDzLAPThINPquci1Zn8vUhJbegJMTISK";
		const _descriptionKCIm7a3 = false;
		const _OptionIerAM1b = new Option(_flagsc3vsbtJ, _descriptionKCIm7a3)
		const _valueUV6ObA2 = -8.550341579831741;
		const _arrayValueg28th7V = null;
		const _arrayValuesLsQnAW = "m0dTjJOz4Zi5fNBxCmlzetF7OP0TFJLUAPpLIyAXhzoIj8Fa81g19BIV1ePJs13xkgoRlAjJ11yxQih7";
		const _previousikEGfKs = [_arrayValueg28th7V, _arrayValuesLsQnAW]
		const _returnValueoPKTBU5 = await _OptionIerAM1b._concatValue(_valueUV6ObA2, _previousikEGfKs)
		const _arrayValueC6iwAr6 = null;
		const _arrayValuejncMjfz = false;
		const _arrayValueaFMXuZV = false;
		const _valuesyZeeJeh = [_arrayValueC6iwAr6, _arrayValuejncMjfz, _arrayValueaFMXuZV]
		const _returnValuergzu7Yu = await _OptionIerAM1b.choices(_valuesyZeeJeh)
	});

	it('test for Option', async () => {
		const _flagsd1mHbvW = "RvWouv";
		const _descriptionytuQBrH = null;
		const _OptionO1KZrhX = new Option(_flagsd1mHbvW, _descriptionytuQBrH)
		const _argB6BOqRk = "komgXKOe";
		const _returnValueMlhDoAq = await _OptionO1KZrhX.is(_argB6BOqRk)
		const _nameO6MiKye = {
		
	}
		const _returnValueAYAYhQd = await _OptionO1KZrhX.env(_nameO6MiKye)
		const _returnValueKyEdIT4 = await _OptionO1KZrhX.name()
		const _returnValueNBtJKzD = await _OptionO1KZrhX.attributeName()
	});

	it('test for Option', async () => {
		const _flagsQZFvgp7 = "E";
		const _descriptionDJZ3lJL = undefined;
		const _OptionWIWddvg = new Option(_flagsQZFvgp7, _descriptionDJZ3lJL)
		const _fnqn0ej6S = undefined;
		const _returnValue19hH8V = await _OptionWIWddvg.argParser(_fnqn0ej6S)
	});

	it('test for Option', async () => {
		const _flagsfKWyCab = "TjrHBwwIAyv1CUDYh81CyI5oDIg9WtjPls";
		const _descriptionSN0spsS = []
		const _Option3151dp = new Option(_flagsfKWyCab, _descriptionSN0spsS)
		const _namesvXBkfb = undefined;
		const _returnValuew960dvx = await _Option3151dp.env(_namesvXBkfb)
		const _fnVuz47FC = undefined;
		const _returnValuedyag05s = await _Option3151dp.argParser(_fnVuz47FC)
		const _returnValueeyqsQ51 = 2.4292217395254756;
		const _namegpsClTF = () => { return _returnValueeyqsQ51 };
		const _returnValuevQrB1U8 = await _Option3151dp.env(_namegpsClTF)
		const _valueeyzIYIn = undefined;
		const _descriptionuZ4es5b = {
		
	}
		const _returnValueKw82UlG = await _Option3151dp.default(_valueeyzIYIn, _descriptionuZ4es5b)
	});

	it('test for Option', async () => {
		const _flagsCAmLfbL = "ZqJumqH9fJoL0azKs3XTshizWXoSJTitrWN2T33IbqwREJjXwoxmssfakpTCcFaoeeiycI";
		const _descriptiongFppk7f = null;
		const _OptionF6AH6bx = new Option(_flagsCAmLfbL, _descriptiongFppk7f)
		const _hideYgTGKi = true;
		const _returnValueEJkFcVi = await _OptionF6AH6bx.hideHelp(_hideYgTGKi)
		const _hideUoped3N = false;
		const _returnValuecrhm4dV = await _OptionF6AH6bx.hideHelp(_hideUoped3N)
		const _argHJmxWPT = "ymA3PhBzaQ9Pc";
		const _returnValueQ14qvvD = await _OptionF6AH6bx.is(_argHJmxWPT)
		const _returnValue9fSWdV = await _OptionF6AH6bx.attributeName()
	});

	it('test for Option', async () => {
		const _flagstS6lrBP = "FV0rnTnPSZVy75nzNcp96j2OzafC9ufCuJ2mHTofry1DbijsSEc5NqHq";
		const _descriptioneX4RuM = -2.38509192049807;
		const _OptionSUjys9 = new Option(_flagstS6lrBP, _descriptioneX4RuM)
		const _nameSfdWrZf = "7SYuWIsd9QaKyJAP25np3orq91x58OSF5kRsqJwnIigJPmN2UcFei9SnknaoQbiw4uyMfwGcjg7YV1LwLhHdRFNGf";
		const _returnValuewvWhLhh = await _OptionSUjys9.env(_nameSfdWrZf)
		const _mandatoryJgNkZtn = false;
		const _returnValuenpzoIZ = await _OptionSUjys9.makeOptionMandatory(_mandatoryJgNkZtn)
		const _arrayValueohCyvBX = {
		
	}
		const _arrayValue6fFdrx = true;
		const _arrayValuekcdx0cB = undefined;
		const _arrayValueevpXoww = [_arrayValue6fFdrx, _arrayValuekcdx0cB]
		const _arrayValueNWNElMp = "xtV98d9Y7QnpcoJ7CfwQBcQNo8i8qhiSeUOsINWWMfQdi5lwPxvXtKs64osSUOjZpdFFHetn5";
		const _valuesx3I0OiM = [_arrayValueohCyvBX, _arrayValueevpXoww, _arrayValueNWNElMp]
		const _returnValuee6Vhwdt = await _OptionSUjys9.choices(_valuesx3I0OiM)
		const _returnValueTheJuhJ = undefined;
		const _valueWQRdHLg = () => { return _returnValueTheJuhJ };
		const _previouscQHBVrz = "mgXYXTwaVJ7JqUtPPacB4SCxm2QBqzvxgQX6lt6uLdBp1";
		const _returnValueC0x7fI4 = await _OptionSUjys9._concatValue(_valueWQRdHLg, _previouscQHBVrz)
	});
})