export {}
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Option', () => {
	it('test for Option', async () => {
		const _returnValuefqjR2o = null;
		const _includesJSVKPyU = () => { return _returnValuefqjR2o };
		const _flagspAkRa7X = {
			"includes": _includesJSVKPyU
	}
		const _descriptionwMh3vqN = "WVptLbHIs1Vs918D88RWfYgA1I2cxpbbE8vEIHvOcv26kgqs773RgJBuUGVKIVpWhbhYfcvvOsyLwy";
		const _OptionMLPolr = new Option(_flagspAkRa7X, _descriptionwMh3vqN)
		const _returnValuejqislvf = await _OptionMLPolr.attributeName()
		const _hideUUDjZB = true;
		const _returnValuefvx6pIT = await _OptionMLPolr.hideHelp(_hideUUDjZB)
		const _mandatoryDYvwnNQ = false;
		const _returnValuebsn4jFc = await _OptionMLPolr.makeOptionMandatory(_mandatoryDYvwnNQ)
		const _hideUonPY5m = true;
		const _returnValueIza5YK = await _OptionMLPolr.hideHelp(_hideUonPY5m)
		const _fnHgSszo = {
		
	}
		const _returnValueoX0kJlA = await _OptionMLPolr.argParser(_fnHgSszo)
	});

	it('test for Option', async () => {
		const _flagsrSEdMnS = "JOZUpGsbij8E";
		const _descriptionazbci4u = true;
		const _OptionyqvM1cV = new Option(_flagsrSEdMnS, _descriptionazbci4u)
		const _fnmswxpiU = {
		
	}
		const _returnValueIaxNWbd = await _OptionyqvM1cV.argParser(_fnmswxpiU)
	});

	it('test for Option', async () => {
		const _flagsmJjNMsr = "uptF4KqvHeQtDjUa5zrwgt";
		const _arrayValuePgKmdOT = null;
		const _descriptionrfMlFa3 = [_arrayValuePgKmdOT]
		const _OptionNxAj42e = new Option(_flagsmJjNMsr, _descriptionrfMlFa3)
		const _returnValuef03DOWC = await _OptionNxAj42e.attributeName()
		const _mandatoryvLpoTNE = true;
		const _returnValuewce921v = await _OptionNxAj42e.makeOptionMandatory(_mandatoryvLpoTNE)
		const _includesDnHNSxz = undefined;
		const _returnValueDlJAetS = -7.428815886021878;
		const _joinAVswW9H = () => { return _returnValueDlJAetS };
		const _values85kNhz = {
			"includes": _includesDnHNSxz,
		"join": _joinAVswW9H
	}
		const _returnValuedJ4xg3s = await _OptionNxAj42e.choices(_values85kNhz)
	});

	it('test for Option', async () => {
		const _flagsPnr1sHi = "mh3qcvGzKLVzNxhcM10yyNqGqXkOPYGoL8pj6d4cw8J";
		const _descriptionMPXMg0K = true;
		const _OptionjTOGNNC = new Option(_flagsPnr1sHi, _descriptionMPXMg0K)
		const _namea6Cbi5V = undefined;
		const _returnValueBQ0eK0 = await _OptionjTOGNNC.env(_namea6Cbi5V)
		const _returnValuetelBcrD = undefined;
		const _includesU7ao0iV = () => { return _returnValuetelBcrD };
		const _joinMo4W7tJ = undefined;
		const _valuesXlUDvbq = {
			"includes": _includesU7ao0iV,
		"join": _joinMo4W7tJ
	}
		const _returnValuecOZ7JWQ = await _OptionjTOGNNC.choices(_valuesXlUDvbq)
		const _namen7bDh4L = undefined;
		const _returnValuehZg1jOQ = await _OptionjTOGNNC.env(_namen7bDh4L)
	});

	it('test for Option', async () => {
		const _flagspcHskKQ = "5Q6Bk6swmi9ZU4qNVUxIOSpHuldFaxfBXdxMezUFTh8n1if5yqI0JaY9lThHxyFsh7WIC19C2pH";
		const _descriptionZmBbdwh = null;
		const _OptionkaMZ96q = new Option(_flagspcHskKQ, _descriptionZmBbdwh)
		const _returnValuem6PCgCM = undefined;
		const _returnValueYLHfuuk = () => { return _returnValuem6PCgCM };
		const _includeszAQyr6A = () => { return _returnValueYLHfuuk };
		const _returnValue3pPXfQ = undefined;
		const _joinlGC6xlv = () => { return _returnValue3pPXfQ };
		const _valueshrj4vgV = {
			"includes": _includeszAQyr6A,
		"join": _joinlGC6xlv
	}
		const _returnValueXHVcwsE = await _OptionkaMZ96q.choices(_valueshrj4vgV)
		const _namelULoMO8 = undefined;
		const _returnValueS5mRjvw = await _OptionkaMZ96q.env(_namelULoMO8)
		const _hideB0vGHk3 = false;
		const _returnValueyimiC69 = await _OptionkaMZ96q.hideHelp(_hideB0vGHk3)
	});

	it('test for Option', async () => {
		const _flagsqM8OFMq = "imtKvYFRHrZW";
		const _descriptionuZocrfK = "U1kJOCdS3bzxfJCEpOW9RBmyGSpal69W6hQ";
		const _OptioncZHRG9p = new Option(_flagsqM8OFMq, _descriptionuZocrfK)
		const _argOSNSQHJ = {
		
	}
		const _returnValuePNQ66ye = await _OptioncZHRG9p.is(_argOSNSQHJ)
		const _argSFPra47 = {
		
	}
		const _returnValueWRfqL1Z = await _OptioncZHRG9p.is(_argSFPra47)
		const _arrayValueUFg4iU7 = "7tf5nMmXRN1nAAVlpBO2tDognGaJ";
		const _arrayValueBn8IAXq = {
		
	}
		const _returnValueSdOydmZ = [_arrayValueUFg4iU7, _arrayValueBn8IAXq]
		const _returnValuetg6SO5p = () => { return _returnValueSdOydmZ };
		const _includesMCv3a3 = () => { return _returnValuetg6SO5p };
		const _arrayValueNPogZtx = undefined;
		const _arrayValueeQ0ZZLa = null;
		const _arrayValueHXdzilU = "iEhQvUoxoB8RHSGGeD1lZcb4lOrqtq3TgIFLcWrg7oPw5CJ7TjJkbt4WhSakGWD47z41MwbrW9Z0";
		const _arrayValuePnDrz6n = {
		
	}
		const _arrayValuep7KSYcb = undefined;
		const _arrayValueXgD13o1 = [_arrayValuePnDrz6n, _arrayValuep7KSYcb]
		const _joiny530hB = [_arrayValueNPogZtx, _arrayValueeQ0ZZLa, _arrayValueHXdzilU, _arrayValueXgD13o1]
		const _valuestv7vULr = {
			"includes": _includesMCv3a3,
		"join": _joiny530hB
	}
		const _returnValueuHFpSHK = await _OptioncZHRG9p.choices(_valuestv7vULr)
		const _nameGhAFRZk = undefined;
		const _returnValuea1Rc1Xy = await _OptioncZHRG9p.env(_nameGhAFRZk)
		const _hidef1MLzx = true;
		const _returnValuemJzMe6D = await _OptioncZHRG9p.hideHelp(_hidef1MLzx)
	});

	it('test for Option', async () => {
		const _flagsCKAXJC4 = "pb30KCo9Z8gFyCKAjGKchlPSGAw0wkMnwcBQKPzpxFBLsCeumiJl5Jb";
		const _descriptionHC0c78u = {
		
	}
		const _OptionNNAyVe3 = new Option(_flagsCKAXJC4, _descriptionHC0c78u)
		const _arrayValueFaECEA6 = undefined;
		const _arrayValuex3His9n = "Lqff5LCrxDCQMjhVJm1ua";
		const _valuepIp56js = [_arrayValueFaECEA6, _arrayValuex3His9n]
		const _descriptionWzTOwVI = undefined;
		const _returnValueKgH8RfB = await _OptionNNAyVe3.default(_valuepIp56js, _descriptionWzTOwVI)
		const _returnValueBtzIcsK = await _OptionNNAyVe3.name()
		const _hideQRUgFOp = "6bju6E9qKBdrWpug5jlwoXU11bBPoZ83M6NTxP0WA4C94uDI";
		const _returnValueg5CNIYd = await _OptionNNAyVe3.hideHelp(_hideQRUgFOp)
		const _mandatoryjzE7xS = false;
		const _returnValueSCjhHHE = await _OptionNNAyVe3.makeOptionMandatory(_mandatoryjzE7xS)
	});

	it('test for Option', async () => {
		const _flagskh3p9lv = "FoSkvVciohMpzdZUS2rWyy5jh1XrqllOf1l79lYHTa0StiFVjbBaGXVlTh4FtFD7dY1";
		const _descriptionHu6a4Hq = false;
		const _OptiontqPAJu2 = new Option(_flagskh3p9lv, _descriptionHu6a4Hq)
		const _fnIOSrsd1 = {
		
	}
		const _returnValueX2hjjyA = await _OptiontqPAJu2.argParser(_fnIOSrsd1)
		const _namerSqHStf = undefined;
		const _returnValuedMYMGGN = await _OptiontqPAJu2.env(_namerSqHStf)
		const _returnValuekzeFJwJ = null;
		const _valueKoEnbfm = () => { return _returnValuekzeFJwJ };
		const _returnValuePxN2Inl = true;
		const _concatJKua839 = () => { return _returnValuePxN2Inl };
		const _previousUD8bnPu = {
			"concat": _concatJKua839
	}
		const _returnValueSAMlaFm = await _OptiontqPAJu2._concatValue(_valueKoEnbfm, _previousUD8bnPu)
	});
})