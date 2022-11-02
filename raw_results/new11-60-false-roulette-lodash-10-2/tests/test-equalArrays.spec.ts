export {}
import MapCache from "../../benchmark/top10npm/lodash/.internal/MapCache.js";
import equalArrays from "../../.syntest/instrumented/benchmark/top10npm/lodash/.internal/equalArrays.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Stack from "../../benchmark/top10npm/lodash/.internal/Stack.js";
import Hash from "../../benchmark/top10npm/lodash/.internal/Hash.js";

describe('equalArrays', () => {
	it('test for equalArrays', async () => {
		const _arrayIiESVoq = "7";
		const _lengthrYyWEcJ = 5.767471625803587;
		const _other84jhC7 = {
			"length": _lengthrYyWEcJ
	}
		const _bitmaskdrvCOfb = -1.1603995418740052;
		const _customizerlyssWIj = true;
		const _returnValueZia5ttQ = undefined;
		const _arrayValueNns0GQa = () => { return _returnValueZia5ttQ };
		const _arrayValueQfLFKjL = -9.00178899456502;
		const _arrayValueaGwlysG = -5.747059933433171;
		const _returnValuetpp9Rxt = [_arrayValueNns0GQa, _arrayValueQfLFKjL, _arrayValueaGwlysG]
		const _equalFuncRZIm8qP = () => { return _returnValuetpp9Rxt };
		const _returnValueabJgOUm = "";
		const _entriesADWb7Qh = () => { return _returnValueabJgOUm };
		const _stackcA5IztU = new MapCache(_entriesADWb7Qh)
		const _keyQuhQw42 = true;
		const _valuezQEmSab = -1.3672151763223948;
		const _returnValue35G16P = await _stackcA5IztU.set(_keyQuhQw42, _valuezQEmSab)
		const _keyz8kn8H = undefined;
		const _returnValueGjMqBPc = await _stackcA5IztU.get(_keyz8kn8H)
		const _arrayValuemhM0E5h = false;
		const _keyexz8lOo = [_arrayValuemhM0E5h]
		const _returnValueDlRLzqK = await _stackcA5IztU.get(_keyexz8lOo)
		const _returnValueiWNYU68 = await equalArrays(_arrayIiESVoq, _other84jhC7, _bitmaskdrvCOfb, _customizerlyssWIj, _equalFuncRZIm8qP, _stackcA5IztU)
	});

	it('test for equalArrays', async () => {
		const _arrayYE1CuE = "DpOTCQL7WknBPIiELnhCAKMd3lpSvqSiCvvTeKSFHfrA9fHSdU6sB31iRnxhvcXyego3EygOpFKem2segWOX4vKlfLXmfX2S9";
		const _arrayValueRr6p1Ks = null;
		const _otheriEefvXH = [_arrayValueRr6p1Ks]
		const _bitmaskoGB3QMs = -1.0942945724070725;
		const _returnValueIGBQGDn = 0.1180034311277538;
		const _customizerwgLBXx = () => { return _returnValueIGBQGDn };
		const _returnValueozcvjSE = "0DImYvjsejqIXRMeScnJKwhPvwPZBvhdbuHbT6tQeOJ0MBlcY";
		const _equalFuncKLGg4fG = () => { return _returnValueozcvjSE };
		const _entriesTpZVVd = null;
		const _stacks8NXhDS = new Stack(_entriesTpZVVd)
		const _returnValueY9W6EvW = await _stacks8NXhDS.clear()
		const _keygYgZNuV = undefined;
		const _returnValuebfTMizj = await _stacks8NXhDS.delete(_keygYgZNuV)
		const _keydNEXAhD = -0.23140063083350704;
		const _returnValued2mhnlU = await _stacks8NXhDS.get(_keydNEXAhD)
		const _returnValueWS1Y3H9 = true;
		const _keydH87pA = () => { return _returnValueWS1Y3H9 };
		const _returnValueGpuFnfl = await _stacks8NXhDS.get(_keydH87pA)
		const _returnValuekQszeuD = await equalArrays(_arrayYE1CuE, _otheriEefvXH, _bitmaskoGB3QMs, _customizerwgLBXx, _equalFuncKLGg4fG, _stacks8NXhDS)
	});

	it('test for equalArrays', async () => {
		const _returnValue632sVA = false;
		const _arraydHTVQuW = () => { return _returnValue632sVA };
		const _otherT1hGaat = "tSoBbKab6UwFjEXY5pBSk6yykUkPNtNWJeSSt0TQZNFJEmxQrdBwdW8jKZ6";
		const _bitmaskyHb825 = 9.622054123088596;
		const _returnValuedF6owY2 = "RIQqdGzdjvIR5eCTrPsRwGEbEUP3SWjWB";
		const _returnValueWTIP03d = () => { return _returnValuedF6owY2 };
		const _customizerO9kaaH = () => { return _returnValueWTIP03d };
		const _arrayValuePOBXTe7 = "9jOC4xvkPyoMaHUR7XD2wRCcQUy6rkgkOuFDzWY8BXmvm0oC";
		const _arrayValuelN7nSvY = null;
		const _returnValueRPGoTrJ = [_arrayValuePOBXTe7, _arrayValuelN7nSvY]
		const _equalFunckqYzzRJ = () => { return _returnValueRPGoTrJ };
		const _entriesFwjHwEg = true;
		const _stackycYLR1R = new MapCache(_entriesFwjHwEg)
		const _keyDlZFnbZ = null;
		const _returnValueY7HZ7BQ = await _stackycYLR1R.delete(_keyDlZFnbZ)
		const _keycIBk3Cb = "KbXxn3X";
		const _returnValuemqaI2Sm = await _stackycYLR1R.get(_keycIBk3Cb)
		const _keyY5koktb = null;
		const _returnValueRyFIuFL = await _stackycYLR1R.has(_keyY5koktb)
		const _returnValueuBCGhAj = await equalArrays(_arraydHTVQuW, _otherT1hGaat, _bitmaskyHb825, _customizerO9kaaH, _equalFunckqYzzRJ, _stackycYLR1R)
	});

	it('test for equalArrays', async () => {
		const _arrayIDS8tEQ = []
		const _lengthwbAwHxW = 1.0286960961793703;
		const _otherK6zaMvN = {
			"length": _lengthwbAwHxW
	}
		const _bitmaskDltNdel = -3.4429065534742653;
		const _returnValueZqxYhHx = undefined;
		const _returnValuey2tVfrT = () => { return _returnValueZqxYhHx };
		const _customizerU6kKRUb = () => { return _returnValuey2tVfrT };
		const _returnValueX8tNpHM = 7.798589700319841;
		const _equalFuncIO3jie4 = () => { return _returnValueX8tNpHM };
		const _arrayValueAAOkNJr = "GXB3qLxxJbJD9uaQsQznSv8ckX5BrHdUJ9dTId";
		const _returnValuecHJa7E0 = 5.492179940597019;
		const _arrayValuePkK8lko = () => { return _returnValuecHJa7E0 };
		const _arrayValueDiliA2K = {
		
	}
		const _arrayValueqywCSZp = [_arrayValueDiliA2K]
		const _arrayValueFUzmr5g = [_arrayValueAAOkNJr, _arrayValuePkK8lko, _arrayValueqywCSZp]
		const _arrayValueDurOsAV = null;
		const _arrayValueZ1QYY9V = [_arrayValueFUzmr5g, _arrayValueDurOsAV]
		const _returnValueXmGnFCb = [_arrayValueZ1QYY9V]
		const _getuamZeIS = () => { return _returnValueXmGnFCb };
		const _returnValueTjQzCXZ = -5.51481611862019;
		const _setWEABfl7 = () => { return _returnValueTjQzCXZ };
		const _stackH98Z1wV = {
			"get": _getuamZeIS,
		"set": _setWEABfl7
	}
		const _returnValuehEfBVnY = await equalArrays(_arrayIDS8tEQ, _otherK6zaMvN, _bitmaskDltNdel, _customizerU6kKRUb, _equalFuncIO3jie4, _stackH98Z1wV)
	});

	it('test for equalArrays', async () => {
		const _arrayValueE3EsoR = undefined;
		const _arrayWvoPIgb = [_arrayValueE3EsoR]
		const _arrayValueZNGiBH = "m4jE0cAvJbwwcP9GtgLweLoE4bt9ibgM0MQbcYfgFmP1RRSIugQar";
		const _otherjWkxIoJ = [_arrayValueZNGiBH]
		const _bitmaskGmzgsgx = -7.78847872777096;
		const _arrayValueLcxOfci = undefined;
		const _returnValueAlbNsiF = [_arrayValueLcxOfci]
		const _customizerJOosK8 = () => { return _returnValueAlbNsiF };
		const _returnValueOld9Dpj = null;
		const _equalFuncsOIbQgG = () => { return _returnValueOld9Dpj };
		const _returnValueo5L3rIy = undefined;
		const _getp1s03p9 = () => { return _returnValueo5L3rIy };
		const _returnValueKoZVoG9 = undefined;
		const _setgF3oiS = () => { return _returnValueKoZVoG9 };
		const _stackZPq2qol = {
			"get": _getp1s03p9,
		"set": _setgF3oiS
	}
		const _returnValueFXDzRji = await equalArrays(_arrayWvoPIgb, _otherjWkxIoJ, _bitmaskGmzgsgx, _customizerJOosK8, _equalFuncsOIbQgG, _stackZPq2qol)
	});

	it('test for equalArrays', async () => {
		const _arrayaMq5iIM = "58qaypMBb6Zci5HqyYqzPXT";
		const _otherprqkTB = "ynd1GW3xOybT41ppGrSjwH1KBORzCDOsjobEfHUjrL5uN4NK45YC";
		const _bitmaskuVp7IgV = 1.3379543001678922;
		const _customizerY1ryIs9 = undefined;
		const _arrayValuebHbI7q9 = 6.510689242395202;
		const _arrayValueanX1nr4 = 0.9823684068632073;
		const _arrayValueECKBLyv = null;
		const _returnValuezRcgNw = [_arrayValuebHbI7q9, _arrayValueanX1nr4, _arrayValueECKBLyv]
		const _equalFuncVtkXhHP = () => { return _returnValuezRcgNw };
		const _arrayValueNKwcSNN = {
		
	}
		const _returnValueZKyCqr7 = [_arrayValueNKwcSNN]
		const _entriesw6gPqaS = () => { return _returnValueZKyCqr7 };
		const _stackM03Q0Fp = new Hash(_entriesw6gPqaS)
		const _keycUpJZ92 = "gRnbIEzBt6DJIJ9kjonySn3hz4gcb2MItb79TNRSEcB7lmVVr46w7AaE26of6LdS6234XflfmShGe9";
		const _returnValueEI4YtWo = await _stackM03Q0Fp.delete(_keycUpJZ92)
		const _arrayValueVYBIprO = false;
		const _returnValueEPDF7dr = 7.281390159956555;
		const _arrayValuewOQq66m = () => { return _returnValueEPDF7dr };
		const _arrayValueqTw0zYq = false;
		const _keyxqEP3h9 = [_arrayValueVYBIprO, _arrayValuewOQq66m, _arrayValueqTw0zYq]
		const _returnValueabIAtCg = await _stackM03Q0Fp.delete(_keyxqEP3h9)
		const _keyoPXFyfB = undefined;
		const _returnValuexuE4mW7 = await _stackM03Q0Fp.delete(_keyoPXFyfB)
		const _returnValueqJfmHft = await equalArrays(_arrayaMq5iIM, _otherprqkTB, _bitmaskuVp7IgV, _customizerY1ryIs9, _equalFuncVtkXhHP, _stackM03Q0Fp)
	});

	it('test for equalArrays', async () => {
		const _arrayValuetzLXl9K = []
		const _arrayValueSJPGzi = "WgYu6Pp1v1N3OSfConUhL94pZqoERgTH";
		const _arrayValueKRxx1Ji = null;
		const _arrayO4T6kMh = [_arrayValuetzLXl9K, _arrayValueSJPGzi, _arrayValueKRxx1Ji]
		const _arrayValueGNVVSud = null;
		const _arrayValuesqkNQXn = 3.252158319137262;
		const _arrayValuerHlpePb = {
		
	}
		const _arrayValueTRaMxhK = [_arrayValuesqkNQXn, _arrayValuerHlpePb]
		const _arrayValueKUfH5Jy = true;
		const _otherZu5HBpz = [_arrayValueGNVVSud, _arrayValueTRaMxhK, _arrayValueKUfH5Jy]
		const _bitmaskLadmRP = -6.422849395395099;
		const _customizeruCKDOWj = null;
		const _returnValuec4ZZ9HS = true;
		const _equalFuncAMJL0xt = () => { return _returnValuec4ZZ9HS };
		const _entriesa9hLhe4 = true;
		const _stack4Fbbwn = new Hash(_entriesa9hLhe4)
		const _keywIrqfBy = true;
		const _returnValuedsZ6h6N = await _stack4Fbbwn.delete(_keywIrqfBy)
		const _keyBPtlj8 = null;
		const _arrayValueEpNIghU = null;
		const _arrayValuewKfzoj3 = 1.407918401546107;
		const _valueNnCondU = [_arrayValueEpNIghU, _arrayValuewKfzoj3]
		const _returnValueIULhq8 = await _stack4Fbbwn.set(_keyBPtlj8, _valueNnCondU)
		const _arrayValueg8UxLfz = null;
		const _keyb9bqrVE = [_arrayValueg8UxLfz]
		const _returnValuec8tX1v = await _stack4Fbbwn.delete(_keyb9bqrVE)
		const _keyZMqMJ4Z = null;
		const _returnValuemcTzpIR = await _stack4Fbbwn.get(_keyZMqMJ4Z)
		const _keylm54VW4 = null;
		const _returnValuenofPDtv = await _stack4Fbbwn.get(_keylm54VW4)
		const _returnValuejUxTw1a = await equalArrays(_arrayO4T6kMh, _otherZu5HBpz, _bitmaskLadmRP, _customizeruCKDOWj, _equalFuncAMJL0xt, _stack4Fbbwn)
	});

	it('test for equalArrays', async () => {
		const _arrayValueOa5EUeg = -2.3699008466798723;
		const _arrayDFrm36 = [_arrayValueOa5EUeg]
		const _arrayValueUCKJJNL = false;
		const _arrayValueN2ULvj3 = undefined;
		const _arrayValued5ZKcrD = "R3";
		const _arrayValueYpePmY = "q2cOXVa7pCwQ47A2ByEL4kiHocGVkhLhsGvr74hL2KLzImAIITSvIJ4gvZ6mBD6HXhflVn3";
		const _arrayValueqIggwqa = [_arrayValueN2ULvj3, _arrayValued5ZKcrD, _arrayValueYpePmY]
		const _otherqjILXJP = [_arrayValueUCKJJNL, _arrayValueqIggwqa]
		const _bitmasknDO866 = -7.604112391919125;
		const _returnValueMf8HwWb = undefined;
		const _customizerd3EeE4F = () => { return _returnValueMf8HwWb };
		const _returnValueIobdd00 = undefined;
		const _equalFuncCWopgrj = () => { return _returnValueIobdd00 };
		const _returnValuePcHg5y = undefined;
		const _getD5GO4oV = () => { return _returnValuePcHg5y };
		const _returnValueg7dDkLd = "OjmGZVqmETonBYxceTpk5C2uYkqawBnXqQPEBPr4wTvGAtqjiuDwKnV9QykmzWyjniTRoV";
		const _setFGCerUv = () => { return _returnValueg7dDkLd };
		const _stackpcTeXU1 = {
			"get": _getD5GO4oV,
		"set": _setFGCerUv
	}
		const _returnValueXzqTS7 = await equalArrays(_arrayDFrm36, _otherqjILXJP, _bitmasknDO866, _customizerd3EeE4F, _equalFuncCWopgrj, _stackpcTeXU1)
	});
})