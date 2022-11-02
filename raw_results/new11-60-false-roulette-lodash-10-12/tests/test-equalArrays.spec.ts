export {}
import equalArrays from "../../.syntest/instrumented/benchmark/top10npm/lodash/.internal/equalArrays.js";
import ListCache from "../../benchmark/top10npm/lodash/.internal/ListCache.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Stack from "../../benchmark/top10npm/lodash/.internal/Stack.js";

describe('equalArrays', () => {
	it('test for equalArrays', async () => {
		const _arrayValueeeYeibI = undefined;
		const _arrayccSe7u0 = [_arrayValueeeYeibI]
		const _lengthWTnUKRH = -5.577473959532268;
		const _otherIJQzLBe = {
			"length": _lengthWTnUKRH
	}
		const _bitmaskQnIyWsB = 8.61982928215562;
		const _returnValuevuQLDed = false;
		const _customizerw990GSO = () => { return _returnValuevuQLDed };
		const _returnValue1Xh1mH = -6.190377101362776;
		const _equalFuncBGnLzO2 = () => { return _returnValue1Xh1mH };
		const _arrayValueoPcEse = true;
		const _arrayValueBwCvzMj = false;
		const _arrayValueJeF35Do = "boUFM6R21v7kr4DFTeYfGNWOfJ6zeiO592R7Xi7zw2NV2wczqalnJML5MQQf7vhDQpAB1UxDlBppjfWrhVpkVlmGwTXtwS";
		const _returnValuevJVdKKM = [_arrayValueoPcEse, _arrayValueBwCvzMj, _arrayValueJeF35Do]
		const _getM7N1ydF = () => { return _returnValuevJVdKKM };
		const _returnValueoJom8c6 = undefined;
		const _setbZQrRMg = () => { return _returnValueoJom8c6 };
		const _stackRwodpIe = {
			"get": _getM7N1ydF,
		"set": _setbZQrRMg
	}
		const _returnValueNxnnxc1 = await equalArrays(_arrayccSe7u0, _otherIJQzLBe, _bitmaskQnIyWsB, _customizerw990GSO, _equalFuncBGnLzO2, _stackRwodpIe)
	});

	it('test for equalArrays', async () => {
		const _arrayValueAINUtCw = undefined;
		const _arrayValueDGZfT7i = 5.1884585362798425;
		const _arrayMuyEcJ = [_arrayValueAINUtCw, _arrayValueDGZfT7i]
		const _othervtt6OHP = "Eq9r48djAY63scTGlxSjJJixWKwSK2UD6wgfoSabuUZf4bGQV1yhZu6fqOhmdWIemCiRE6QuuSMvxJXA8u";
		const _bitmaskXBAPs9z = -7.933860061857953;
		const _arrayValueMcHGl66 = undefined;
		const _arrayValueZTep1zV = undefined;
		const _arrayValuem6AFuAn = false;
		const _returnValuenoXp8oF = [_arrayValueMcHGl66, _arrayValueZTep1zV, _arrayValuem6AFuAn]
		const _customizerUgbqbdy = () => { return _returnValuenoXp8oF };
		const _equalFunctxlIuUg = null;
		const _returnValueowcypCR = true;
		const _returnValuejDaztme = () => { return _returnValueowcypCR };
		const _getmlE9V9o = () => { return _returnValuejDaztme };
		const _returnValuef66XqML = undefined;
		const _arrayValue0lwqVg = () => { return _returnValuef66XqML };
		const _arrayValueiOw6hjs = -2.3710982019556504;
		const _returnValueH5gHdD = [_arrayValue0lwqVg, _arrayValueiOw6hjs]
		const _setZSBvSfA = () => { return _returnValueH5gHdD };
		const _stacke3gxRt = {
			"get": _getmlE9V9o,
		"set": _setZSBvSfA
	}
		const _returnValueIcXyTQ = await equalArrays(_arrayMuyEcJ, _othervtt6OHP, _bitmaskXBAPs9z, _customizerUgbqbdy, _equalFunctxlIuUg, _stacke3gxRt)
	});

	it('test for equalArrays', async () => {
		const _returnValueiUa5chv = 2.8100811293588084;
		const _arrayDnS52cA = () => { return _returnValueiUa5chv };
		const _arrayValueT9dTIYu = []
		const _returnValueb7cyFyD = [_arrayValueT9dTIYu]
		const _otherdAzRHzq = () => { return _returnValueb7cyFyD };
		const _bitmaskmgGk6yr = -8.043198176540532;
		const _returnValuefhFcHPN = "whH4iWb9dvDHoHivqbzqdteg5nA4asX255bXhtNpnCfw";
		const _customizerOTPfgAp = () => { return _returnValuefhFcHPN };
		const _returnValueSY9PLoz = undefined;
		const _equalFuncdD0yHGe = () => { return _returnValueSY9PLoz };
		const _arrayValuem9QjCTZ = {
		
	}
		const _arrayValueALSSbe = {
		
	}
		const _arrayValueuQGQGXt = false;
		const _arrayValueigYgSMO = 1.0986158920735694;
		const _arrayValueOcip4rf = undefined;
		const _arrayValuepU8uogF = [_arrayValueuQGQGXt, _arrayValueigYgSMO, _arrayValueOcip4rf]
		const _entriesCN5gksx = [_arrayValuem9QjCTZ, _arrayValueALSSbe, _arrayValuepU8uogF]
		const _stackfgoYXWa = new ListCache(_entriesCN5gksx)
		const _keyG7vl1FX = "taF4FpGck5PVb3CIWR2GOXfQ7J5kwIW7BJbeuNveCv2zXP3Gz5mwBTsHuOVhiOxykpke8F1gMabXwlW";
		const _returnValueEB87qx4 = await _stackfgoYXWa.has(_keyG7vl1FX)
		const _keycUo1ZXW = null;
		const _returnValueIL7MyeW = await _stackfgoYXWa.delete(_keycUo1ZXW)
		const _keyotoAXQb = {
		
	}
		const _returnValueluNYdom = await _stackfgoYXWa.get(_keyotoAXQb)
		const _returnValuepjrF7SO = await equalArrays(_arrayDnS52cA, _otherdAzRHzq, _bitmaskmgGk6yr, _customizerOTPfgAp, _equalFuncdD0yHGe, _stackfgoYXWa)
	});

	it('test for equalArrays', async () => {
		const _arrayJuXX15k = false;
		const _otherAC3xIsG = false;
		const _bitmaskZ9a4Za2 = 3.50436164095672;
		const _returnValuetca702n = null;
		const _customizerFslrequ = () => { return _returnValuetca702n };
		const _returnValueWaFOaA = "Xmglas4X3cY3kLmnndXylI3kZV";
		const _equalFunczJ28tiu = () => { return _returnValueWaFOaA };
		const _returnValuezVjp3uq = false;
		const _getBkB0FIo = () => { return _returnValuezVjp3uq };
		const _setrGUJsCN = "PeN";
		const _stackkjDjHhK = {
			"get": _getBkB0FIo,
		"set": _setrGUJsCN
	}
		const _returnValueOinC3ja = await equalArrays(_arrayJuXX15k, _otherAC3xIsG, _bitmaskZ9a4Za2, _customizerFslrequ, _equalFunczJ28tiu, _stackkjDjHhK)
	});

	it('test for equalArrays', async () => {
		const _lengthMF3F6KZ = 1.3483181040611907;
		const _arrayTppOzMR = {
			"length": _lengthMF3F6KZ
	}
		const _arrayValuetClwtbk = true;
		const _arrayValuesM3UdTY = -3.6138292391357556;
		const _otherssl8V78 = [_arrayValuetClwtbk, _arrayValuesM3UdTY]
		const _bitmasku4koX9g = 7.728629715106937;
		const _returnValueJz3UXMJ = "gR59W8";
		const _customizerjMRR5Hy = () => { return _returnValueJz3UXMJ };
		const _returnValueJsSys9i = undefined;
		const _equalFuncn8kqxOQ = () => { return _returnValueJsSys9i };
		const _entriesul6yzAk = null;
		const _stackr7HoGVz = new Stack(_entriesul6yzAk)
		const _keytaQgNGP = true;
		const _returnValuehog19F3 = await _stackr7HoGVz.delete(_keytaQgNGP)
		const _returnValueF30Hubr = await equalArrays(_arrayTppOzMR, _otherssl8V78, _bitmasku4koX9g, _customizerjMRR5Hy, _equalFuncn8kqxOQ, _stackr7HoGVz)
	});

	it('test for equalArrays', async () => {
		const _arrayValueYmtPMyP = undefined;
		const _arrayValueiWQVHLy = false;
		const _arrayQvw1La = [_arrayValueYmtPMyP, _arrayValueiWQVHLy]
		const _otherrMJqXDs = "ah9HGtag7QU9HqBy090PzqQD2PgHUJK4RkbNA9zRNaoO1JdeNCtxwPVvyFPCvUOKM";
		const _bitmaskoePGV7 = -5.905969633285263;
		const _returnValuePkPKtak = undefined;
		const _customizerW3USo2w = () => { return _returnValuePkPKtak };
		const _returnValueOfYrpen = null;
		const _equalFuncFxlQUf9 = () => { return _returnValueOfYrpen };
		const _returnValueDi5UH3y = null;
		const _getBUiWn1j = () => { return _returnValueDi5UH3y };
		const _returnValuer1D9ng = 9.751022061634703;
		const _setOBLt2f = () => { return _returnValuer1D9ng };
		const _stackLc35PpW = {
			"get": _getBUiWn1j,
		"set": _setOBLt2f
	}
		const _returnValuetUPPwk4 = await equalArrays(_arrayQvw1La, _otherrMJqXDs, _bitmaskoePGV7, _customizerW3USo2w, _equalFuncFxlQUf9, _stackLc35PpW)
	});

	it('test for equalArrays', async () => {
		const _arrayValues4gEXro = null;
		const _arrayValueik3t8DI = undefined;
		const _arrayValueelg7Mt6 = undefined;
		const _arrayH0pTg9o = [_arrayValues4gEXro, _arrayValueik3t8DI, _arrayValueelg7Mt6]
		const _other65fhXJ = "eBB3";
		const _bitmaskTPL23nj = 1.4839508966732495;
		const _returnValueWylAocr = undefined;
		const _customizerrad8v6D = () => { return _returnValueWylAocr };
		const _returnValueo0nVSr = 1.4749568033356635;
		const _equalFuncmhn2Ysk = () => { return _returnValueo0nVSr };
		const _returnValueNDsZG20 = undefined;
		const _getyKNH9cV = () => { return _returnValueNDsZG20 };
		const _returnValueFyiKlj4 = undefined;
		const _setxZ0FRfh = () => { return _returnValueFyiKlj4 };
		const _stackl4cU4EA = {
			"get": _getyKNH9cV,
		"set": _setxZ0FRfh
	}
		const _returnValuens8pGuR = await equalArrays(_arrayH0pTg9o, _other65fhXJ, _bitmaskTPL23nj, _customizerrad8v6D, _equalFuncmhn2Ysk, _stackl4cU4EA)
	});

	it('test for equalArrays', async () => {
		const _arrayValuekPf8O1t = "Flujwa6aeJXomQUvpD2ImAbHM1ZQktL2mTBNrMVsiafZXoOzyDpnNnXCuGsS";
		const _arrayValueNiTBfx6 = 1.8044558950644358;
		const _arrayValueircehTV = "nuNThj3XVOALrP2SgafrfzdminduiSN1ELeBYaTIJjKt";
		const _arrayPtPAIK4 = [_arrayValuekPf8O1t, _arrayValueNiTBfx6, _arrayValueircehTV]
		const _arrayValueLrtamLJ = -2.5479633762752254;
		const _arrayValuewwIU1Bj = -4.158588173967796;
		const _arrayValuehLo9tB = false;
		const _othertoCoQ5C = [_arrayValueLrtamLJ, _arrayValuewwIU1Bj, _arrayValuehLo9tB]
		const _bitmaskiJoFOV7 = 0.819854343007238;
		const _returnValueP80ZvuL = undefined;
		const _customizervvqTiXi = () => { return _returnValueP80ZvuL };
		const _returnValueTYE8jYT = null;
		const _equalFuncLxjVESz = () => { return _returnValueTYE8jYT };
		const _lengthVcgO5t0 = undefined;
		const _entriesyfP6U7 = {
			"length": _lengthVcgO5t0
	}
		const _stackJtjtyhz = new ListCache(_entriesyfP6U7)
		const _keyLQ1lKuA = 2.60144783673298;
		const _valueX5ta1KK = 9.035411969209754;
		const _returnValuebse1m3E = await _stackJtjtyhz.set(_keyLQ1lKuA, _valueX5ta1KK)
		const _keyLfBmzxt = true;
		const _returnValueZM2wpDQ = await _stackJtjtyhz.has(_keyLfBmzxt)
		const _keyajg9Wlr = {
		
	}
		const _returnValuec47s8bT = await _stackJtjtyhz.delete(_keyajg9Wlr)
		const _returnValueVdth4c8 = await equalArrays(_arrayPtPAIK4, _othertoCoQ5C, _bitmaskiJoFOV7, _customizervvqTiXi, _equalFuncLxjVESz, _stackJtjtyhz)
	});
})