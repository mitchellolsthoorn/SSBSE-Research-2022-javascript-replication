export {}
const res = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/response.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('res', () => {
	it('test for res', async () => {
		const _resCXzVviq = res
		const _statusCodeacPFoQK = true;
		const _returnValueW0mKWHh = await _resCXzVviq.sendStatus(_statusCodeacPFoQK)
		const _urldmA2WgC = false;
		const _returnValueMzwDHx = await _resCXzVviq.redirect(_urldmA2WgC)
		const _urlC6eQQ4Z = "RhpqZ93nOfFIgouGezfLxHBjmrCl3mtiKlPMiTFE3PxNChJojMgY5CLzKTmMDGPrxwqFO5MS4AT1BOu0CvsfBwSvIIAZm";
		const _returnValueVAePYeO = await _resCXzVviq.location(_urlC6eQQ4Z)
	});

	it('test for res', async () => {
		const _resY5SvDPv = res
		const _objUdGgmm = "7rt";
		const _returnValueUvfJri8 = await _resY5SvDPv.json(_objUdGgmm)
		const _objQuvOoPe = false;
		const _returnValueKAqw8Bf = await _resY5SvDPv.jsonp(_objQuvOoPe)
		const _objS6LvWG = true;
		const _returnValueMbEPSn = await _resY5SvDPv.json(_objS6LvWG)
		const _fieldP7X7YY = 9.72624769729908;
		const _returnValueGtT4pnV = "uz7XVKS5SJAqwjGuCpjNsWgGUhXlXiHUuKhdWrI64ShVhmrxWHTxcBiHqMpyjt5f3K5Qvca";
		const _valUT0g4JE = () => { return _returnValueGtT4pnV };
		const _returnValues0dZmQy = await _resY5SvDPv.header(_fieldP7X7YY, _valUT0g4JE)
	});

	it('test for res', async () => {
		const _resRjWNF7X = res
		const _objj7kUUA = -8.955712521617752;
		const _returnValueyo4xnsq = await _resRjWNF7X.jsonp(_objj7kUUA)
		const _objsPVoUA0 = {
		
	}
		const _returnValuesVxj2us = await _resRjWNF7X.format(_objsPVoUA0)
		const _pathkW5gmt = "ilGVDFKukAyfcLXpqb9IIxCyn7LCGrq4GFuFLf4mtilJ2rcDfPkwu9wWTQfcPbh5HWRY8vAl";
		const _optionsoTdy027 = undefined;
		const _callbacklnQN7iA = undefined;
		const _returnValueyyvWyVT = await _resRjWNF7X.sendFile(_pathkW5gmt, _optionsoTdy027, _callbacklnQN7iA)
		const _returnValueg64OykY = null;
		const _statusCodeZzcwPWu = () => { return _returnValueg64OykY };
		const _returnValuez3Rac5l = await _resRjWNF7X.sendStatus(_statusCodeZzcwPWu)
		const _fieldCfGtTdZ = "p5y6GkwV2BjKaLAElB";
		const _returnValuefy1A6Mc = await _resRjWNF7X.vary(_fieldCfGtTdZ)
	});

	it('test for res', async () => {
		const _resGpCsR02 = res
		const _bodyQHpsB4o = undefined;
		const _returnValueZIFTEUg = await _resGpCsR02.send(_bodyQHpsB4o)
		const _nameHKicz11 = undefined;
		const _valuek5kCj2h = "9Rvo3du6IKWiKbdg24sFTLBFiF9WxfCHqgHRVwRDAk3WKnw";
		const _optionsZDwITjQ = false;
		const _returnValueG1DxRIf = await _resGpCsR02.cookie(_nameHKicz11, _valuek5kCj2h, _optionsZDwITjQ)
		const _linksg37vCvm = true;
		const _returnValueIPXJQ8X = await _resGpCsR02.links(_linksg37vCvm)
		const _fieldxu8KgQY = "gpW9mjcfVNjgOLL20ycywhzzTixWX9kjtbAt9zUE6Pt2GHWS7DjggY3E3KBpMQXrj7ZqpAgCdTaJsAirCe5bBzYlu";
		const _returnValueVAnOSIA = await _resGpCsR02.get(_fieldxu8KgQY)
		const _pathX8sHnt4 = 7.617282497744171;
		const _filenameIHtZlXy = 1.5456165255699066;
		const _optionsyWWmrlI = null;
		const _returnValueoHLL00b = "kWBdTugD";
		const _callbackZcsPh36 = () => { return _returnValueoHLL00b };
		const _returnValuetJxdPaG = await _resGpCsR02.download(_pathX8sHnt4, _filenameIHtZlXy, _optionsyWWmrlI, _callbackZcsPh36)
	});

	it('test for res', async () => {
		const _resBA93AlE = res
		const _arrayValueUBQM3K1 = "kvOrbee5zAiIa8jdfrZ";
		const _arrayValuewpQ9UbV = "hoVjMNwvCwVfCwRsmsRclcJz9wgXY4IHknxcDOS9QWeAyAKw";
		const _arrayValueAXZKCB7 = "1IGxQsTVlVgExhZ1nS4HJCQQGYoWdcHvagltqAwywHZjuJcfjeG7uiXkwTpScWlj8hFcpelfFhybBe7YSYt";
		const _filenameVAyEvlq = [_arrayValueUBQM3K1, _arrayValuewpQ9UbV, _arrayValueAXZKCB7]
		const _returnValueMXNA4Vn = await _resBA93AlE.attachment(_filenameVAyEvlq)
		const _urlmLUCWiB = {
		
	}
		const _returnValueiaoXm6F = await _resBA93AlE.redirect(_urlmLUCWiB)
		const _returnValueEzz6mHM = null;
		const _arrayValuekS8kbi9 = () => { return _returnValueEzz6mHM };
		const _arrayValueccmjzZX = undefined;
		const _arrayValueRSEuMWb = false;
		const _urlSJ7zKh6 = [_arrayValuekS8kbi9, _arrayValueccmjzZX, _arrayValueRSEuMWb]
		const _returnValuepvQ2CXg = await _resBA93AlE.location(_urlSJ7zKh6)
		const _objubmBMF4 = "7AbFDKv4BfYBqyl23IMIELkyMqSopE2rivJZW2QqcUjAIT";
		const _returnValueX1URZvQ = await _resBA93AlE.jsonp(_objubmBMF4)
	});

	it('test for res', async () => {
		const _resZB40Il7 = res
		const _urlOrI2cG = false;
		const _returnValuezG7T8L = await _resZB40Il7.location(_urlOrI2cG)
		const _path481e1r = false;
		const _optionsZq8ymBD = {
		
	}
		const _callbackudOFP5U = -4.216982513263118;
		const _returnValueVt55edH = await _resZB40Il7.sendFile(_path481e1r, _optionsZq8ymBD, _callbackudOFP5U)
	});

	it('test for res', async () => {
		const _resHgZZlLN = res
		const _pathWwwrTUI = {
		
	}
		const _filenameNhKWHg = "uyYQfFqmJrUJpwOWyUDAwngSj3QURDZLFXhihDCw3nIX6mhdrf3SPfFjUDOO1CNsWgRkaaoITnGUCe5cpnLw4lpp8MEw";
		const _arrayValueDHGPlyT = undefined;
		const _arrayValue9pxAxK = {
		
	}
		const _arrayValuegwF1EsR = undefined;
		const _arrayValueWNL8A92 = -2.570378344234606;
		const _arrayValuectcEpF = true;
		const _arrayValueMnCgQT2 = [_arrayValue9pxAxK, _arrayValuegwF1EsR, _arrayValueWNL8A92, _arrayValuectcEpF]
		const _arrayValueEigU3p = {
		
	}
		const _arrayValuevVlI1oN = null;
		const _optionsd3Qc6r = [_arrayValueDHGPlyT, _arrayValueMnCgQT2, _arrayValueEigU3p, _arrayValuevVlI1oN]
		const _callbackQj2oZZh = "dOYUm6ibS9TBsInmnm7KjyuIeex1cyr8Jk6pvD89nmnH";
		const _returnValueCiZa664 = await _resHgZZlLN.download(_pathWwwrTUI, _filenameNhKWHg, _optionsd3Qc6r, _callbackQj2oZZh)
		const _fieldbHyQyTx = undefined;
		const _valBLeFIN = true;
		const _returnValueTMgTJqR = await _resHgZZlLN.header(_fieldbHyQyTx, _valBLeFIN)
		const _fieldrROzyz3 = null;
		const _valUZWWGAP = undefined;
		const _returnValueBEmOQp = await _resHgZZlLN.append(_fieldrROzyz3, _valUZWWGAP)
	});

	it('test for res', async () => {
		const _resaXA85rQ = res
		const _returnValueUiJhDhn = null;
		const _fieldZImkZuv = () => { return _returnValueUiJhDhn };
		const _returnValue4KsZHD = await _resaXA85rQ.vary(_fieldZImkZuv)
	});

	it('test for res', async () => {
		const _resl14aeGl = res
		const _urlPOgm2iv = undefined;
		const _returnValueFzguLcj = await _resl14aeGl.redirect(_urlPOgm2iv)
		const _namee7U9bmp = null;
		const _arrayValuejg5PRF3 = "cBgJ41CbVMOsedrKRba0J77TiARyDrtNJH6dWhxcBW5N7Hxchy4T5GOrL4K8pfeZE3zJNZhMdrdIg";
		const _optionsxDjZvUC = [_arrayValuejg5PRF3]
		const _returnValueDrJtxRK = await _resl14aeGl.clearCookie(_namee7U9bmp, _optionsxDjZvUC)
		const _arrayValuegSg5hu = null;
		const _arrayValueXDv5Vxk = [_arrayValuegSg5hu]
		const _path0aW713 = [_arrayValueXDv5Vxk]
		const _optionsqAuAPnz = false;
		const _returnValueLuIykn = false;
		const _callbackVVZUoLp = () => { return _returnValueLuIykn };
		const _returnValuegDMVsve = await _resl14aeGl.sendFile(_path0aW713, _optionsqAuAPnz, _callbackVVZUoLp)
	});

	it('test for res', async () => {
		const _resUuSKgqJ = res
		const _arrayValueSv1HL9W = {
		
	}
		const _arrayValueaO2ppQ3 = null;
		const _arrayValueRD5dWi = undefined;
		const _arrayValuei0o2hHH = "U4xtlCVpuWNKT87UumdnYzz6mJPJ2itebTrSp8N2hlX9M5ZEGm0eRnK7WPYlkGbwyULK684ZdwDRaEvLLi4gK1OG4omwDd7cNJI";
		const _arrayValueRWvyRyI = [_arrayValueSv1HL9W, _arrayValueaO2ppQ3, _arrayValueRD5dWi, _arrayValuei0o2hHH]
		const _arrayValueWgDaxKk = "4VhYnwb1CyFzqoeew7CzxmPT1TN4E1iYs9c84DK";
		const _arrayValueK2FCKWs = 6.153112911275194;
		const _arrayValueGNhm6OJ = true;
		const _fieldLr97unU = [_arrayValueRWvyRyI, _arrayValueWgDaxKk, _arrayValueK2FCKWs, _arrayValueGNhm6OJ]
		const _arrayValueFoIzAHg = false;
		const _arrayValueQbfcFJm = undefined;
		const _arrayValuestrl8kY = true;
		const _arrayValuewZsnPOo = [_arrayValueFoIzAHg, _arrayValueQbfcFJm, _arrayValuestrl8kY]
		const _arrayValueQ0OKCop = {
		
	}
		const _valpePZJL = [_arrayValuewZsnPOo, _arrayValueQ0OKCop]
		const _returnValuesoS9VCU = await _resUuSKgqJ.header(_fieldLr97unU, _valpePZJL)
		const _fieldNVhe1UY = false;
		const _valiBNr2N7 = false;
		const _returnValueYvWVVSJ = await _resUuSKgqJ.append(_fieldNVhe1UY, _valiBNr2N7)
		const _bodySphoilS = false;
		const _returnValueRvvYo44 = await _resUuSKgqJ.send(_bodySphoilS)
	});

	it('test for res', async () => {
		const _resDn1RARF = res
		const _fieldwwTVBVO = null;
		const _returnValue2QL9pj = await _resDn1RARF.vary(_fieldwwTVBVO)
		const _pathN1FzXSA = undefined;
		const _optionsBvsBstI = {
		
	}
		const _callbackGUpDoF4 = -8.698607909793969;
		const _returnValueBg18vbw = await _resDn1RARF.sendfile(_pathN1FzXSA, _optionsBvsBstI, _callbackGUpDoF4)
		const _fieldN53EDkc = "rT54cw";
		const _returnValueMx9RWgm = await _resDn1RARF.vary(_fieldN53EDkc)
	});

	it('test for res', async () => {
		const _resdugjuzU = res
		const _pathlxptCS8 = undefined;
		const _filenamezHlmbt = 0.9690699882614435;
		const _returnValuemlbUvUr = -9.700213043482385;
		const _optionstQFsEPw = () => { return _returnValuemlbUvUr };
		const _callbackvvzr72r = undefined;
		const _returnValueV2FXm4 = await _resdugjuzU.download(_pathlxptCS8, _filenamezHlmbt, _optionstQFsEPw, _callbackvvzr72r)
		const _arrayValuewScjQy = 7.95308446296432;
		const _arrayValueG55a8h1 = {
		
	}
		const _arrayValuegKFHcNk = null;
		const _returnValuetvJwuH = 7.669197398994797;
		const _arrayValuevXWCsMx = () => { return _returnValuetvJwuH };
		const _arrayValuerXubVpD = "OlwHSO0VKcm3WbPt6ab8w77WV2uWmm3nvjYp9fGslbWeE78McJlxAVzvTyE9bs";
		const _arrayValueTouWtU = "PHIOPuGwcYBOmXVmQqj6jXEdHhw3qyUsqxqVnw4OvgNCSTfzy91iHNt8avmenTWYNqsdB8IB7mP33l7pO24rfOQF";
		const _arrayValue8qrVQf = [_arrayValuegKFHcNk, _arrayValuevXWCsMx, _arrayValuerXubVpD, _arrayValueTouWtU]
		const _arrayValuezqqF2FF = [_arrayValueG55a8h1, _arrayValue8qrVQf]
		const _arrayValuekbCshR = true;
		const _arrayValueCSC82uA = {
		
	}
		const _arrayValue6NxOrS = 3.179424190523555;
		const _fieldZ2k4y7 = [_arrayValuewScjQy, _arrayValuezqqF2FF, _arrayValuekbCshR, _arrayValueCSC82uA, _arrayValue6NxOrS]
		const _returnValueRfw8U0h = await _resdugjuzU.get(_fieldZ2k4y7)
	});
})