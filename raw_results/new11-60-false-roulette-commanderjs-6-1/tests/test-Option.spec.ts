export {}
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Option', () => {
	it('test for Option', async () => {
		const _returnValuedAbO9c5 = true;
		const _includesRe7meN = () => { return _returnValuedAbO9c5 };
		const _flagsKfwZ4pR = {
			"includes": _includesRe7meN
	}
		const _descriptionDq4zu8u = false;
		const _OptionY5W6y9f = new Option(_flagsKfwZ4pR, _descriptionDq4zu8u)
		const _valueSeT4U8 = undefined;
		const _returnValueZIskcd = null;
		const _previousHwvbZou = () => { return _returnValueZIskcd };
		const _returnValueeO1cE8y = await _OptionY5W6y9f._concatValue(_valueSeT4U8, _previousHwvbZou)
		const _fnj9KeT3j = {
		
	}
		const _returnValueMvbDhSo = await _OptionY5W6y9f.argParser(_fnj9KeT3j)
		const _namezklOedf = undefined;
		const _returnValueCm5ZYPB = await _OptionY5W6y9f.env(_namezklOedf)
	});

	it('test for Option', async () => {
		const _flagsgXLBf6T = "HywLlWS4LGj1Wv7uOQSKcYq80f93fXMDVq1HoINRydcqGjOksreFhL5NikbEqjSKjJJAB5Bq";
		const _arrayValueeMfhd2m = {
		
	}
		const _arrayValuekPqcRkI = {
		
	}
		const _arrayValueQWdYOtb = [_arrayValuekPqcRkI]
		const _descriptionVXMBLn = [_arrayValueeMfhd2m, _arrayValueQWdYOtb]
		const _OptionsXpAEY8 = new Option(_flagsgXLBf6T, _descriptionVXMBLn)
		const _argZpyEc2 = "yQywxTxW9KFba1GitKxbNI8YvmI3NJpDNJ3CXsjx1rY0WS5ogdNDpHzF1L2nAG657Mgh0r4lTs4IikeEFQrsSx";
		const _returnValue04UTgZ = await _OptionsXpAEY8.is(_argZpyEc2)
		const _returnValuecPuA6T2 = await _OptionsXpAEY8.name()
	});

	it('test for Option', async () => {
		const _flagsQuZuk0T = "J9GuzcIXmojMy8J2bu2hzVzdnIt8rft";
		const _descriptionOYs5JL1 = undefined;
		const _OptioncTiQtmu = new Option(_flagsQuZuk0T, _descriptionOYs5JL1)
		const _valuePT3C6k8 = undefined;
		const _descriptionZC3sYzA = undefined;
		const _returnValuej79q18K = await _OptioncTiQtmu.default(_valuePT3C6k8, _descriptionZC3sYzA)
		const _returnValueHF3n9hP = undefined;
		const _includesrSq7wz8 = () => { return _returnValueHF3n9hP };
		const _returnValuetXv6SUw = null;
		const _joincHZQiC4 = () => { return _returnValuetXv6SUw };
		const _valuesZaVKUUH = {
			"includes": _includesrSq7wz8,
		"join": _joincHZQiC4
	}
		const _returnValuejt4XJj = await _OptioncTiQtmu.choices(_valuesZaVKUUH)
		const _valueyIlZUCR = -9.628391359346109;
		const _arrayValueiFfL5Ul = "1kik3ToClSWufTmFNSr23lJAYWRxmxfsIEpCTxjD6QzDP2JFRASverof3rP";
		const _arrayValueM29jIhj = "YUrBFHCl8E3dn5zPCjfawTilyWbzsSi3DYuhqb48VbWpfZtHGBPudUhA9";
		const _arrayValueh5D8BZ0 = undefined;
		const _arrayValuelaBlUQX = "GXA";
		const _arrayValueZdyYrwv = [_arrayValueiFfL5Ul, _arrayValueM29jIhj, _arrayValueh5D8BZ0, _arrayValuelaBlUQX]
		const _previousL155HhV = [_arrayValueZdyYrwv]
		const _returnValuePPxzS8q = await _OptioncTiQtmu._concatValue(_valueyIlZUCR, _previousL155HhV)
		const _valueXwmkPBG = "hazVmfL6OkknY1tIw2mhZcE2FKuMSDBj4YyuRR0fUOlRaFIEuxk2DsuHPftENSjfCJD0SmmlWMtqX6Al";
		const _returnValueFP74Oc = false;
		const _returnValueg9AV8Mz = () => { return _returnValueFP74Oc };
		const _concatnlAGBcb = () => { return _returnValueg9AV8Mz };
		const _previouspM95yL8 = {
			"concat": _concatnlAGBcb
	}
		const _returnValueObiPYu = await _OptioncTiQtmu._concatValue(_valueXwmkPBG, _previouspM95yL8)
	});

	it('test for Option', async () => {
		const _flagsI03C8d = "z8NsD9Sn6PJokgYhkvWjJ1aqmwRKQNetyViHaY6HUyVZ2piAnqFqrISDeIWYzjvIsbVbaanG7ka49QN7olU3jLuM3lXCL";
		const _descriptionbScEaN9 = undefined;
		const _OptionhHoGGNe = new Option(_flagsI03C8d, _descriptionbScEaN9)
		const _returnValueBUupZg = await _OptionhHoGGNe.attributeName()
		const _returnValueRG1IMNb = false;
		const _argB13acWg = () => { return _returnValueRG1IMNb };
		const _returnValueJPAJKXp = await _OptionhHoGGNe.is(_argB13acWg)
		const _returnValueSHYwfd = await _OptionhHoGGNe.attributeName()
		const _hideympDvK = true;
		const _returnValuepwvLZjp = await _OptionhHoGGNe.hideHelp(_hideympDvK)
	});

	it('test for Option', async () => {
		const _flagsccZvKdB = "liwppEInXNydfp4RaiIk2D844dWShzWqiXWRIp2a7U5m3E2Q3";
		const _descriptionKmbPSuf = false;
		const _Optionjwbt0OF = new Option(_flagsccZvKdB, _descriptionKmbPSuf)
		const _hideOWnnAVs = true;
		const _returnValuen07F5sG = await _Optionjwbt0OF.hideHelp(_hideOWnnAVs)
		const _arrayValueogb48NO = {
		
	}
		const _namelAe2EX5 = [_arrayValueogb48NO]
		const _returnValueZpKCGw6 = await _Optionjwbt0OF.env(_namelAe2EX5)
		const _valueKa44dFy = undefined;
		const _descriptioni8uu3S0 = undefined;
		const _returnValueUyPiHjN = await _Optionjwbt0OF.default(_valueKa44dFy, _descriptioni8uu3S0)
	});

	it('test for Option', async () => {
		const _flagsTNnM31y = "ndNArtAwICoPeXoXMGkVkmBh2gfSpUf7boiMs4h6pI7STBudefdfwy6pEd6sGbke39NC984lZ9keGqi29m";
		const _descriptionaNjdo2 = false;
		const _OptionSiLw1J = new Option(_flagsTNnM31y, _descriptionaNjdo2)
		const _mandatorydewbkMO = null;
		const _returnValueMNGQOMo = await _OptionSiLw1J.makeOptionMandatory(_mandatorydewbkMO)
		const _returnValuexSFYqNk = await _OptionSiLw1J.attributeName()
	});

	it('test for Option', async () => {
		const _flagsQGKdP6N = "dCKGcybGEdB1jDHVCXwrJrV4kmrrf3a9tjGF1h5vjh8XudH6D8nrYXyaHtYzCax5LFotGgxWfN9OL";
		const _descriptionxKz0Ws9 = "6jlxds9kJKU";
		const _OptionnRaBWya = new Option(_flagsQGKdP6N, _descriptionxKz0Ws9)
		const _returnValuebLMCqHS = await _OptionnRaBWya.name()
		const _returnValuehpJclB = -2.4302315630148;
		const _includesmJa1D56 = () => { return _returnValuehpJclB };
		const _returnValueBPgkwRd = -6.526053881025495;
		const _joinMw8GKKE = () => { return _returnValueBPgkwRd };
		const _valuesj96rSZP = {
			"includes": _includesmJa1D56,
		"join": _joinMw8GKKE
	}
		const _returnValuekQeLer9 = await _OptionnRaBWya.choices(_valuesj96rSZP)
		const _fnH5RAYFa = undefined;
		const _returnValuetK6gU6p = await _OptionnRaBWya.argParser(_fnH5RAYFa)
		const _namelF3F0S = undefined;
		const _returnValuenTq3DOK = await _OptionnRaBWya.env(_namelF3F0S)
	});
})