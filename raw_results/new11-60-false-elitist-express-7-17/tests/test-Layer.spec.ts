export {}
const Layer = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/router/layer.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Layer', () => {
	it('test for Layer', async () => {
		const _path3PJ6pR = "COhwFbOR3zgdeUtBxlxo6mO3wjGZxyN1VwSO2tH86UcXBbXtvbv2Tb";
		const _arrayValueE7DIMmh = "DVjoEJ9QmU8GoBxXUg9CjwCFeoyAH3r7MquGg";
		const _arrayValueamkXqRY = "5NbNxd9m2M8u9cyvn8zJxeqRRjjT7y8Wb34rWOobK9DANkHpPho8ZRpiMyXM9l3fVELLpsncwxLMtRqHId3wztW2HyKZG8c94mE";
		const _optionsKWXeVSz = [_arrayValueE7DIMmh, _arrayValueamkXqRY]
		const _nameMLfM2EM = {
		
	}
		const _urltyHrd1v = "CWzjWDviAQYuAGujJnLGrfy7ArOaD5eHx3ueWkjL9C";
		const _fnVfR0nP0 = {
			"name": _nameMLfM2EM,
		"url": _urltyHrd1v
	}
		const _LayermAI1e4X = new Layer(_path3PJ6pR, _optionsKWXeVSz, _fnVfR0nP0)
		const _pathZIc36YE = null;
		const _returnValueMKWSfS = await _LayermAI1e4X.match(_pathZIc36YE)
		const _reqm1bY8Rn = {
		
	}
		const _resdND2Z5M = null;
		const _returnValuea4fj6vC = 5.245522705926701;
		const _nextiqTVYF7 = () => { return _returnValuea4fj6vC };
		const _returnValueUWJ6RjR = await _LayermAI1e4X.handle_request(_reqm1bY8Rn, _resdND2Z5M, _nextiqTVYF7)
	});

	it('test for Layer', async () => {
		const _pathB2tWON8 = "qhXBmvvSwt9CAUxYhRPUE4R0INEIEYyhmNrYvPwl58KXlWFgSVf677jjhpWvFa4182GIrfx5dU9Y98zvfobi6mCRL7iE52uf";
		const _arrayValueGQ7EMYx = undefined;
		const _arrayValueuQBHwHh = undefined;
		const _arrayValuetiSdwlg = false;
		const _optionsCZCQBN1 = [_arrayValueGQ7EMYx, _arrayValueuQBHwHh, _arrayValuetiSdwlg]
		const _nametZJnnHH = {
		
	}
		const _urlyrCtukq = true;
		const _fnBwbHeTB = {
			"name": _nametZJnnHH,
		"url": _urlyrCtukq
	}
		const _LayerEQXE818 = new Layer(_pathB2tWON8, _optionsCZCQBN1, _fnBwbHeTB)
		const _reqMu7jknA = null;
		const _reszxCDl3 = 0.4151198762352841;
		const _returnValueVM1X2o5 = 7.190447580292517;
		const _nextokrduW = () => { return _returnValueVM1X2o5 };
		const _returnValueM4nI3yY = await _LayerEQXE818.handle_request(_reqMu7jknA, _reszxCDl3, _nextokrduW)
		const _returnValueElJPWck = undefined;
		const _reqRniuANZ = () => { return _returnValueElJPWck };
		const _resgcs1EWG = undefined;
		const _returnValuegHhKK2W = 5.3200193010738985;
		const _returnValueNzTUrSg = () => { return _returnValuegHhKK2W };
		const _nextTkWuP7W = () => { return _returnValueNzTUrSg };
		const _returnValuenjstlls = await _LayerEQXE818.handle_request(_reqRniuANZ, _resgcs1EWG, _nextTkWuP7W)
		const _reqUpNZZAE = true;
		const _resGEeWmm8 = 9.20066962125761;
		const _returnValueKTo5Afq = undefined;
		const _nextCthQSoP = () => { return _returnValueKTo5Afq };
		const _returnValueVWsJHip = await _LayerEQXE818.handle_request(_reqUpNZZAE, _resGEeWmm8, _nextCthQSoP)
		const _errorgcuFhAW = "bj8Q7VIqajPMrWPikofRERMokbu4angyaIRHdzCDIWMS48IasnVUaM1JmARI";
		const _arrayValueTvVQJTD = undefined;
		const _arrayValueS0pS5a = undefined;
		const _arrayValuehqxLy6v = {
		
	}
		const _reqgjPY70 = [_arrayValueTvVQJTD, _arrayValueS0pS5a, _arrayValuehqxLy6v]
		const _resmgpch2e = 1.6195047826360351;
		const _returnValueM7DWExs = undefined;
		const _nextA0RtNJ7 = () => { return _returnValueM7DWExs };
		const _returnValueo0uQAS = await _LayerEQXE818.handle_error(_errorgcuFhAW, _reqgjPY70, _resmgpch2e, _nextA0RtNJ7)
		const _errorKLNJZAu = 7.617579760881952;
		const _reqzF8D0wx = null;
		const _resn9sl8as = false;
		const _arrayValueXjlPS0R = -9.084086866144494;
		const _returnValuerGJ1bzF = true;
		const _arrayValuekdOnjyL = () => { return _returnValuerGJ1bzF };
		const _arrayValueH7f56vh = "BOmDj5blc9s1UxV23k4tecC1Bca77jdxaPT5Ga28J4M0AGDRAAoHG6VjE4fdtBgpfiRJcnAirWMWySnEGW2Qd0BN";
		const _returnValueTjMZIPK = [_arrayValueXjlPS0R, _arrayValuekdOnjyL, _arrayValueH7f56vh]
		const _nextm9rlBDG = () => { return _returnValueTjMZIPK };
		const _returnValue0cVyWS = await _LayerEQXE818.handle_error(_errorKLNJZAu, _reqzF8D0wx, _resn9sl8as, _nextm9rlBDG)
	});

	it('test for Layer', async () => {
		const _pathpsLOyty = "66FI4ivVvH3s9HWomrsKgtmq5IHSuIJMm0QIUGXBW918LkGYuF1WblvzOPz1gfl";
		const _returnValue9bETbX = -4.066123314293952;
		const _arrayValuesiNOeVb = () => { return _returnValue9bETbX };
		const _returnValueAzlDKi = [_arrayValuesiNOeVb]
		const _arrayValueLXEzC2m = () => { return _returnValueAzlDKi };
		const _arrayValueX5qImPS = undefined;
		const _arrayValuekjsjFD4 = [_arrayValueX5qImPS]
		const _arrayValuecCGtvcG = false;
		const _optionsgSaixjr = [_arrayValueLXEzC2m, _arrayValuekjsjFD4, _arrayValuecCGtvcG]
		const _namemVJwyld = {
		
	}
		const _arrayValueSIQjeYD = undefined;
		const _returnValueYBCPWY9 = [_arrayValueSIQjeYD]
		const _urlABciRfO = () => { return _returnValueYBCPWY9 };
		const _fnT0J282c = {
			"name": _namemVJwyld,
		"url": _urlABciRfO
	}
		const _LayeruLYKq0D = new Layer(_pathpsLOyty, _optionsgSaixjr, _fnT0J282c)
		const _reqcdNUUiH = null;
		const _reshElO4r = "th6Flle97jEpxwFKAQvWVxAw6kGVYrQHbdbUSuPi6kNwyfHrOngkSaqWOao7hmAevRRJEvrXMm3Cr6z3JaS17FXEE3a";
		const _returnValuexu9A7vo = "frwYMUGoIErSefkjRkREzPj4vRIFMNW1kgrPZ2tj5SQ7EjzzEuopjc7zXqZ9Moj3bads";
		const _nextMs1t6ER = () => { return _returnValuexu9A7vo };
		const _returnValueAbWTZU = await _LayeruLYKq0D.handle_request(_reqcdNUUiH, _reshElO4r, _nextMs1t6ER)
		const _pathFavq2Qz = true;
		const _returnValuelkrVbLm = await _LayeruLYKq0D.match(_pathFavq2Qz)
		const _returnValuefsZxTp9 = {
		
	}
		const _error5HqiDI = () => { return _returnValuefsZxTp9 };
		const _reqCo1YvSL = null;
		const _resaZGI8in = undefined;
		const _nextAdF6jNB = {
		
	}
		const _returnValueE5RoLf1 = await _LayeruLYKq0D.handle_error(_error5HqiDI, _reqCo1YvSL, _resaZGI8in, _nextAdF6jNB)
	});

	it('test for Layer', async () => {
		const _pathfIHrbT0 = "PBpERxOBobNt6HyfE7wNoKnglgtouMhQNYX";
		const _optionslaXXuYd = {
		
	}
		const _fnGxlad3G = "3SsvLRBA7LnACPeC102KM6wn1DclP3iJGhmc6z67UnjyTY8cYPrKwh99TbqrON";
		const _LayerfJyrUDM = new Layer(_pathfIHrbT0, _optionslaXXuYd, _fnGxlad3G)
		const _pathcdB3UwX = null;
		const _returnValueT0WX5xh = await _LayerfJyrUDM.match(_pathcdB3UwX)
		const _arrayValueKqn3Ezu = 1.2876805460459053;
		const _arrayValuepGnvJO = 6.224531116075628;
		const _arrayValueipe17YJ = null;
		const _errorVsbQuLp = [_arrayValueKqn3Ezu, _arrayValuepGnvJO, _arrayValueipe17YJ]
		const _reqJ6lDZ8W = true;
		const _resgIZxEMW = "gzzoQdrqiyq9oTcVtJntz6ilrX56hoqHabXps2Q5XFOP3vIrNe2CCPvpezzrDofFY1l";
		const _returnValueJzJ35ZH = "iuqmvuVje3iG83J6YemkpVYv53aEBPmf";
		const _nextPzq3bZf = () => { return _returnValueJzJ35ZH };
		const _returnValuelVDQBf4 = await _LayerfJyrUDM.handle_error(_errorVsbQuLp, _reqJ6lDZ8W, _resgIZxEMW, _nextPzq3bZf)
		const _reqRgvuQRO = "MYdJ1QPO8xMm7pDlD1CIWGhBUU";
		const _resdCECsOO = "pFB0oGGQ6jJUZNpPY8LKPthzCgKIChgpnaok";
		const _returnValuerIs2rJa = null;
		const _nextJfSIA1Y = () => { return _returnValuerIs2rJa };
		const _returnValueKH5ZlDU = await _LayerfJyrUDM.handle_request(_reqRgvuQRO, _resdCECsOO, _nextJfSIA1Y)
		const _arrayValueNLzOrq3 = undefined;
		const _arrayValueEiPzlP = undefined;
		const _arrayValueArVM4ak = undefined;
		const _arrayValuezKDLIdf = [_arrayValueEiPzlP, _arrayValueArVM4ak]
		const _arrayValuemCD1pRA = undefined;
		const _reqb4JOF46 = [_arrayValueNLzOrq3, _arrayValuezKDLIdf, _arrayValuemCD1pRA]
		const _reszvYwptM = 8.028543479964675;
		const _returnValueSKhbXYK = -2.0481037606976704;
		const _nextmCwozWC = () => { return _returnValueSKhbXYK };
		const _returnValueyR4SqNS = await _LayerfJyrUDM.handle_request(_reqb4JOF46, _reszvYwptM, _nextmCwozWC)
		const _errorXrPiEWd = null;
		const _reqIuyWx3I = null;
		const _resXupQzUv = {
		
	}
		const _returnValueR4G3xMm = "c4iz6avNfwcA3qJxjOvAGCp91AHZHo3fAxIGybbPm5RGwhJgDKSeRsTDK8nnkjJmQqsMdGVjjckFCnO1tJTUxGH9jdtj";
		const _nexthLnycZd = () => { return _returnValueR4G3xMm };
		const _returnValuegLWbTJq = await _LayerfJyrUDM.handle_error(_errorXrPiEWd, _reqIuyWx3I, _resXupQzUv, _nexthLnycZd)
	});

	it('test for Layer', async () => {
		const _pathm09lxXA = true;
		const _optionsvPLGgwB = null;
		const _namekSrgYnX = {
		
	}
		const _arrayValueTOTKzKT = 0.8828618515366333;
		const _arrayValuePfBMRtH = true;
		const _arrayValueuPZSMUH = -9.023662189493274;
		const _arrayValuex0mIkAK = [_arrayValueTOTKzKT, _arrayValuePfBMRtH, _arrayValueuPZSMUH]
		const _arrayValuekWfNZu = true;
		const _urlq7UWk65 = [_arrayValuex0mIkAK, _arrayValuekWfNZu]
		const _fnvcjaF3f = {
			"name": _namekSrgYnX,
		"url": _urlq7UWk65
	}
		const _LayermpkaYGH = new Layer(_pathm09lxXA, _optionsvPLGgwB, _fnvcjaF3f)
		const _reqAmrDdGN = null;
		const _reswqEWDmM = undefined;
		const _returnValueoUhbO5U = undefined;
		const _returnValueBaEBnFl = () => { return _returnValueoUhbO5U };
		const _nextHbzlew = () => { return _returnValueBaEBnFl };
		const _returnValuexycb6Dl = await _LayermpkaYGH.handle_request(_reqAmrDdGN, _reswqEWDmM, _nextHbzlew)
		const _reqYxnZvzY = true;
		const _reseGoy7nT = false;
		const _returnValueyy2IzJ = -4.649191675056149;
		const _nextcWTcW3G = () => { return _returnValueyy2IzJ };
		const _returnValueR4Q6zHv = await _LayermpkaYGH.handle_request(_reqYxnZvzY, _reseGoy7nT, _nextcWTcW3G)
		const _pathpQKl1h = true;
		const _returnValuek6wJQs0 = await _LayermpkaYGH.match(_pathpQKl1h)
		const _arrayValuepWrhEpM = false;
		const _arrayValueS6mRUIo = undefined;
		const _arrayValueeMluOI4 = -9.538061753191629;
		const _arrayValuer4z6Pcr = [_arrayValueS6mRUIo, _arrayValueeMluOI4]
		const _errorcx22jQh = [_arrayValuepWrhEpM, _arrayValuer4z6Pcr]
		const _reqopQXn4z = {
		
	}
		const _resUYMgZed = undefined;
		const _returnValueVjB00Bm = {
		
	}
		const _nextJDbo4IM = () => { return _returnValueVjB00Bm };
		const _returnValueva6L0w1 = await _LayermpkaYGH.handle_error(_errorcx22jQh, _reqopQXn4z, _resUYMgZed, _nextJDbo4IM)
	});
})