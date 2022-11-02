export {}
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Option', () => {
	it('test for Option', async () => {
		const _returnValueV6eUJ98 = "DgszX8E7m4ACLgjSebMZb9YO9o1kVlkrRf4PX9G5CU0Rl8f6CV2DLKCo31zvfzQz41QZNLgN3YPXaBeMG8HHQiIF";
		const _includesGuB3zVD = () => { return _returnValueV6eUJ98 };
		const _flagsPhGcINo = {
			"includes": _includesGuB3zVD
	}
		const _descriptioniqVFnmy = {
		
	}
		const _OptiontBOQkH7 = new Option(_flagsPhGcINo, _descriptioniqVFnmy)
		const _valuenlLsbcQ = -6.695506582059123;
		const _returnValueJUzfX4r = {
		
	}
		const _concatvRUPsID = () => { return _returnValueJUzfX4r };
		const _previouse9fPUkF = {
			"concat": _concatvRUPsID
	}
		const _returnValueCvmnLIC = await _OptiontBOQkH7._concatValue(_valuenlLsbcQ, _previouse9fPUkF)
		const _valueUjPLjTO = {
		
	}
		const _returnValueOvbus4k = false;
		const _concatl6z0sBZ = () => { return _returnValueOvbus4k };
		const _previouscBNtVx9 = {
			"concat": _concatl6z0sBZ
	}
		const _returnValuemxGy1U = await _OptiontBOQkH7._concatValue(_valueUjPLjTO, _previouscBNtVx9)
		const _arrayValuekKNsofo = undefined;
		const _returnValueWBZqOVD = [_arrayValuekKNsofo]
		const _includesMo8t8kh = () => { return _returnValueWBZqOVD };
		const _joinZ15sL0J = undefined;
		const _valuescJFhiZl = {
			"includes": _includesMo8t8kh,
		"join": _joinZ15sL0J
	}
		const _returnValuedGYYwBR = await _OptiontBOQkH7.choices(_valuescJFhiZl)
	});

	it('test for Option', async () => {
		const _flagskO8jLoa = "daIbRKMqgTQMhkGoHaBEZoFf43l4JltY";
		const _descriptionxYWnc7R = null;
		const _OptionecZ07f4 = new Option(_flagskO8jLoa, _descriptionxYWnc7R)
		const _mandatoryU96Yyj = true;
		const _returnValueLtTmCZX = await _OptionecZ07f4.makeOptionMandatory(_mandatoryU96Yyj)
		const _returnValueyod3so = await _OptionecZ07f4.name()
		const _fnlT8Wak2 = undefined;
		const _returnValue6TmLlO = await _OptionecZ07f4.argParser(_fnlT8Wak2)
		const _hideOu8y3c = true;
		const _returnValueXmLsPaZ = await _OptionecZ07f4.hideHelp(_hideOu8y3c)
	});

	it('test for Option', async () => {
		const _flagsdm2OiVE = "XkVe5Ja41ynI02qF3DL2upx2LTw1RQnQS71BDNNL24cx3o2xmTAIc28kaBE9pRcQj98FeJ63ur6g3O5lSfNygbdiHoM3";
		const _descriptionRf9KSj = undefined;
		const _OptionPZMDytg = new Option(_flagsdm2OiVE, _descriptionRf9KSj)
		const _hideSGDx6Nf = false;
		const _returnValueewLjA80 = await _OptionPZMDytg.hideHelp(_hideSGDx6Nf)
		const _returnValueYH1A6Hl = "pQxstx4kubPEsTdiX6HFp36hMOeQtzdgPpI5voxPRJCKdF9MBuEoOX";
		const _includesWIy6rys = () => { return _returnValueYH1A6Hl };
		const _returnValuev2bVZdy = "0df5NEoLAjjxmokxKlSDlO4Wu8uvlFmgAXCkXs8fgMxMYi8kbjKx8VGqkrw2tyyEnFxC1RI1RM";
		const _joinyMVaSIN = () => { return _returnValuev2bVZdy };
		const _valuesceoGQKl = {
			"includes": _includesWIy6rys,
		"join": _joinyMVaSIN
	}
		const _returnValuevOS07T = await _OptionPZMDytg.choices(_valuesceoGQKl)
		const _argiCq23fg = {
		
	}
		const _returnValuewZesvQ2 = await _OptionPZMDytg.is(_argiCq23fg)
		const _returnValueuLywTmR = await _OptionPZMDytg.attributeName()
	});

	it('test for Option', async () => {
		const _flagsyOvyrA = "iB1xlQ";
		const _descriptioneEqBW77 = null;
		const _OptionQZGVxfn = new Option(_flagsyOvyrA, _descriptioneEqBW77)
		const _valuej73fFdh = undefined;
		const _descriptionIRssEl = undefined;
		const _returnValueYS03FP = await _OptionQZGVxfn.default(_valuej73fFdh, _descriptionIRssEl)
		const _returnValueraNgAkH = "nXB3pCpFuECkILhAx1XEpCzZzLHTrIzGmBl6te9xcDv8LFjH8JQV6VH0UCYvRMakzxvfpBmLUarL6C";
		const _includesaUMvl95 = () => { return _returnValueraNgAkH };
		const _returnValueXzI4972 = {
		
	}
		const _joincKPTXqt = () => { return _returnValueXzI4972 };
		const _valuesAxJE67x = {
			"includes": _includesaUMvl95,
		"join": _joincKPTXqt
	}
		const _returnValueZIw7oiZ = await _OptionQZGVxfn.choices(_valuesAxJE67x)
		const _returnValue0I3vyz = await _OptionQZGVxfn.attributeName()
		const _returnValueoBSGcfl = null;
		const _includesiWmW0rg = () => { return _returnValueoBSGcfl };
		const _returnValuekFB4lQg = "XnErdHrXJaokZoWqAMD7FTSjHOxPKvcXCm6ShJ8BpHKD1UAqErl3DHDjZyKCpSt297OujkNEcKcJSuroqwAL1a";
		const _joinODo69n0 = () => { return _returnValuekFB4lQg };
		const _valuesUv6aUIU = {
			"includes": _includesiWmW0rg,
		"join": _joinODo69n0
	}
		const _returnValueGVRKU89 = await _OptionQZGVxfn.choices(_valuesUv6aUIU)
	});

	it('test for Option', async () => {
		const _flagslOUT29 = "AqJvATnhfB6PqImL3s8SsmYLrWoYYUKJyffuIfMBN3gLv67dGGJ6dlseIbtaS3WQ";
		const _descriptioncg4xNtC = undefined;
		const _OptionQusoUzO = new Option(_flagslOUT29, _descriptioncg4xNtC)
		const _argU6L6uc = {
		
	}
		const _returnValueSrx3Y4K = await _OptionQusoUzO.is(_argU6L6uc)
		const _nameAYkjG8w = undefined;
		const _returnValueqTM5lsm = await _OptionQusoUzO.env(_nameAYkjG8w)
		const _returnValuetjvsiGK = "tWa5MERXOqBxNP7wBTdyQ3DZoHzhqGmQ5oEvh6f9i6IO94EBOrdSDWEKmMmnYCeuuLggIy50wAT2FomqhqOJf";
		const _includesCiXZlf = () => { return _returnValuetjvsiGK };
		const _arrayValuenQPcmzV = undefined;
		const _arrayValueSsTjmvL = 4.50707090905224;
		const _arrayValueOyugnZz = true;
		const _returnValuepE0jRRB = [_arrayValuenQPcmzV, _arrayValueSsTjmvL, _arrayValueOyugnZz]
		const _joinkHOdzGn = () => { return _returnValuepE0jRRB };
		const _valueszXZjw8Q = {
			"includes": _includesCiXZlf,
		"join": _joinkHOdzGn
	}
		const _returnValueUHnrNMv = await _OptionQusoUzO.choices(_valueszXZjw8Q)
		const _arrayValuebxBzL1z = null;
		const _arrayValuePTYKVR = -5.836443032477526;
		const _valuedrJFjoQ = [_arrayValuebxBzL1z, _arrayValuePTYKVR]
		const _previousy7AU7vg = undefined;
		const _returnValueR5Nak8b = await _OptionQusoUzO._concatValue(_valuedrJFjoQ, _previousy7AU7vg)
	});
})