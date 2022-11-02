export {}
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Option', () => {
	it('test for Option', async () => {
		const _flagsRl3tFUW = null;
		const _descriptionuqw7Qmz = {
		
	}
		const _OptionOKa0jOh = new Option(_flagsRl3tFUW, _descriptionuqw7Qmz)
		const _valueBUR3Ut = "qr1tERDVYdhg8MhoROgl8G9PHIRcGFHFrPT";
		const _arrayValueW6GvSm2 = "B5qktDtthlKBBXTFdqwF";
		const _arrayValueMMIrVLw = {
		
	}
		const _arrayValueZJjXcnX = null;
		const _previousJjGMwq = [_arrayValueW6GvSm2, _arrayValueMMIrVLw, _arrayValueZJjXcnX]
		const _returnValuegkQauUI = await _OptionOKa0jOh._concatValue(_valueBUR3Ut, _previousJjGMwq)
		const _arrayValuewWBIO26 = true;
		const _arrayValuenLTZKuz = 8.993964516938938;
		const _arrayValueP8MhyMU = "4JVHnkTZqvpbaFTkiStY4XWKOWaRwGvqn76ovgYrUVgqnkAc32bjhVb";
		const _arrayValuePoxgESd = true;
		const _arrayValueCFL9Y1 = [_arrayValuenLTZKuz, _arrayValueP8MhyMU, _arrayValuePoxgESd]
		const _arrayValuem47MaXm = null;
		const _valuesZPlz2O = [_arrayValuewWBIO26, _arrayValueCFL9Y1, _arrayValuem47MaXm]
		const _returnValues4OkKmv = await _OptionOKa0jOh.choices(_valuesZPlz2O)
		const _returnValueiG0jhOp = -4.81237566333479;
		const _argVwqRp05 = () => { return _returnValueiG0jhOp };
		const _returnValueF4YeGc = await _OptionOKa0jOh.is(_argVwqRp05)
	});

	it('test for Option', async () => {
		const _flagswSr8Ysq = []
		const _arrayValueKqdgQiA = 7.629921544233934;
		const _descriptionNgN4lCp = [_arrayValueKqdgQiA]
		const _OptionRsLjzf5 = new Option(_flagswSr8Ysq, _descriptionNgN4lCp)
		const _hidevt9EhNN = false;
		const _returnValuexuq954V = await _OptionRsLjzf5.hideHelp(_hidevt9EhNN)
	});

	it('test for Option', async () => {
		const _flagsrTrluc6 = "mGxfUeCNwb8qd66BRNoJbtXzSB9uilun0wULmjUYwjdaS5iym8dKeWjxNPlt4eRkdW5RdBAP8NrdY";
		const _arrayValuezID2LC8 = null;
		const _arrayValuee5yTN5t = 3.451362356898379;
		const _arrayValueN6z3bVP = -9.910565449723869;
		const _descriptionBgexQJ1 = [_arrayValuezID2LC8, _arrayValuee5yTN5t, _arrayValueN6z3bVP]
		const _OptionPuzIun = new Option(_flagsrTrluc6, _descriptionBgexQJ1)
		const _mandatoryN11h3cV = true;
		const _returnValuexdByWRF = await _OptionPuzIun.makeOptionMandatory(_mandatoryN11h3cV)
		const _valueqXhuy2I = false;
		const _previousfXshA0m = {
		
	}
		const _returnValueyXcc5RL = await _OptionPuzIun._concatValue(_valueqXhuy2I, _previousfXshA0m)
		const _valueslzUCIRX = "VazTbZPI9q4gad6KiojRKHn";
		const _returnValuee9r64vw = await _OptionPuzIun.choices(_valueslzUCIRX)
	});

	it('test for Option', async () => {
		const _flagsJ4Vnf2Y = "JioUe78SvUbFTWEMTjPE7XjU7t7WG68VSp0FdxV63jSU6QgmHATgC95p0nMAG8kOkvELxwTWljxyg1SPTOA9MkI9Yye6A";
		const _returnValuekJz9gpJ = null;
		const _descriptionbsDM0hz = () => { return _returnValuekJz9gpJ };
		const _OptionS34vKN0 = new Option(_flagsJ4Vnf2Y, _descriptionbsDM0hz)
		const _valueRacv873 = -8.075213902814317;
		const _descriptionUHWJhWQ = false;
		const _returnValuebyJy1Hx = await _OptionS34vKN0.default(_valueRacv873, _descriptionUHWJhWQ)
		const _fnhcZ6tRw = "QUIV";
		const _returnValueHAO9pBf = await _OptionS34vKN0.argParser(_fnhcZ6tRw)
		const _arrayValueEgEj4aJ = {
		
	}
		const _arrayValuechum0Hz = [_arrayValueEgEj4aJ]
		const _hideCI7vqkV = [_arrayValuechum0Hz]
		const _returnValuetxCdz7P = await _OptionS34vKN0.hideHelp(_hideCI7vqkV)
		const _valueAxe3mxd = 2.2679553928724605;
		const _descriptionloPRpIG = -5.107421418089098;
		const _returnValuexPzFNfa = await _OptionS34vKN0.default(_valueAxe3mxd, _descriptionloPRpIG)
	});

	it('test for Option', async () => {
		const _flagsHHJYEBy = "DC4uCiJQ7vsObGTOtSUqN2TW";
		const _arrayValueWVyAAay = false;
		const _arrayValuezGtaztz = [_arrayValueWVyAAay]
		const _descriptionOJl2Hud = [_arrayValuezGtaztz]
		const _OptionwOPH9h0 = new Option(_flagsHHJYEBy, _descriptionOJl2Hud)
		const _valueL3Sm3Vv = "NeYrWHv6l73K";
		const _previousOmrVUFp = null;
		const _returnValueVV9v4oi = await _OptionwOPH9h0._concatValue(_valueL3Sm3Vv, _previousOmrVUFp)
		const _returnValuefGwlwW0 = await _OptionwOPH9h0.name()
	});

	it('test for Option', async () => {
		const _flagsUmwPaYD = "B1lNMzrptAyvuqw3b8TGGB4tTaV53T7cjd9UWv3tn4UlClHP";
		const _descriptionOPc3sw = 0.8075221862709281;
		const _Optioni7D29N = new Option(_flagsUmwPaYD, _descriptionOPc3sw)
		const _valuesklW3h4j = "uk1PuD7Q";
		const _returnValuegkXILsf = await _Optioni7D29N.choices(_valuesklW3h4j)
		const _mandatoryIS5WZHl = undefined;
		const _returnValuePS0ncGX = await _Optioni7D29N.makeOptionMandatory(_mandatoryIS5WZHl)
		const _valuejN4OdG = 9.878917252521543;
		const _arrayValuewalOTAv = -4.512149049783414;
		const _previousIZxZ55y = [_arrayValuewalOTAv]
		const _returnValueXmYj1Tc = await _Optioni7D29N._concatValue(_valuejN4OdG, _previousIZxZ55y)
	});

	it('test for Option', async () => {
		const _flagsAhatrIb = "kGl7ibf9bt5Xrohr5o2ta39THmNfmSbuX";
		const _descriptionv0lUK3U = undefined;
		const _OptionumSTlSH = new Option(_flagsAhatrIb, _descriptionv0lUK3U)
		const _returnValuesFNrIJ7 = undefined;
		const _mandatorya7VqxkY = () => { return _returnValuesFNrIJ7 };
		const _returnValueQFHNZej = await _OptionumSTlSH.makeOptionMandatory(_mandatorya7VqxkY)
		const _returnValueqyxyiC5 = true;
		const _valuesPnMJOwr = () => { return _returnValueqyxyiC5 };
		const _returnValueIju82C = await _OptionumSTlSH.choices(_valuesPnMJOwr)
		const _argdFbcYtr = "DiVagqbJfK21cxODiAf4MqaEfIPn0W12";
		const _returnValueNoXxawV = await _OptionumSTlSH.is(_argdFbcYtr)
	});

	it('test for Option', async () => {
		const _flagsO0zyxE = "QSuRiDUh";
		const _returnValueYasuQhV = null;
		const _arrayValueOnHFp0p = () => { return _returnValueYasuQhV };
		const _returnValuefchltZO = null;
		const _arrayValues06v3W9 = () => { return _returnValuefchltZO };
		const _arrayValueNceRB5v = true;
		const _descriptionSbajhB4 = [_arrayValueOnHFp0p, _arrayValues06v3W9, _arrayValueNceRB5v]
		const _OptionI6XmqPQ = new Option(_flagsO0zyxE, _descriptionSbajhB4)
		const _fny2sY4Ii = false;
		const _returnValuevhfLJA1 = await _OptionI6XmqPQ.argParser(_fny2sY4Ii)
		const _nameqzcCBf = []
		const _returnValueKOAmUIZ = await _OptionI6XmqPQ.env(_nameqzcCBf)
	});

	it('test for Option', async () => {
		const _flagscE2al1z = "avAZ4YU3npNxczxsKvbCVtvzh8iylFWKAsD0xyJZB7jbBTkNTI0";
		const _descriptione9kP0bE = -5.496559150477215;
		const _OptionNuEhj5H = new Option(_flagscE2al1z, _descriptione9kP0bE)
		const _valueJayei74 = 8.8903736947888;
		const _previousepkEdS0 = undefined;
		const _returnValue0gwx0a = await _OptionNuEhj5H._concatValue(_valueJayei74, _previousepkEdS0)
		const _returnValueV4Ykd5h = await _OptionNuEhj5H.attributeName()
		const _returnValuedep15XN = await _OptionNuEhj5H.attributeName()
	});
})