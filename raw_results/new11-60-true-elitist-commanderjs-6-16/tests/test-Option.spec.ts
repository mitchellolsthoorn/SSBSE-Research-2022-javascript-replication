export {}
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Option', () => {
	it('test for Option', async () => {
		const _flagsq0xsMr = false;
		const _descriptionpf4fM7q = -1.8469210361761927;
		const _OptionHqhDyFY = new Option(_flagsq0xsMr, _descriptionpf4fM7q)
		const _namevQfhU9T = undefined;
		const _returnValuewaYQjtr = await _OptionHqhDyFY.env(_namevQfhU9T)
		const _fnwmEtopU = undefined;
		const _returnValue6caZsS = await _OptionHqhDyFY.argParser(_fnwmEtopU)
		const _returnValueO7nnzdY = "Cg0GHLd6NpgjgSGWtdsPzUhiU4UMxSN8BuvSqsQlq8CDqGhTtTy3ZFGvdKMftgTnGF7fJDgFC01nPLk";
		const _mandatory7dj1OI = () => { return _returnValueO7nnzdY };
		const _returnValueKzmlOex = await _OptionHqhDyFY.makeOptionMandatory(_mandatory7dj1OI)
	});

	it('test for Option', async () => {
		const _flagseE6xfpt = "TAIwKnqxerJJxHyBC8rkAyBnI1M5J8Il7QWcGcRscb";
		const _arrayValueNhAnMek = "p";
		const _arrayValueBEKRKEr = undefined;
		const _arrayValueIuiHNxH = undefined;
		const _arrayValueBmyjK53 = false;
		const _arrayValuefgcYkVJ = null;
		const _descriptionP21CRLp = [_arrayValueNhAnMek, _arrayValueBEKRKEr, _arrayValueIuiHNxH, _arrayValueBmyjK53, _arrayValuefgcYkVJ]
		const _OptionCOUPqEb = new Option(_flagseE6xfpt, _descriptionP21CRLp)
		const _mandatoryAgkaYeS = true;
		const _returnValueBuoD2kJ = await _OptionCOUPqEb.makeOptionMandatory(_mandatoryAgkaYeS)
		const _hideESTtI1 = true;
		const _returnValueDgCTN33 = await _OptionCOUPqEb.hideHelp(_hideESTtI1)
		const _hidesvE9s5S = true;
		const _returnValueP7eS7Qv = await _OptionCOUPqEb.hideHelp(_hidesvE9s5S)
	});

	it('test for Option', async () => {
		const _flagsIiuQkrA = "2feTglkqBYtdkCARTJ2ro59GEQDsqhRy6bub8yVoX0hdN";
		const _descriptionwpgkyFH = false;
		const _OptionqUQgJH0 = new Option(_flagsIiuQkrA, _descriptionwpgkyFH)
		const _valuesqgGbH = []
		const _returnValuedyFiycD = undefined;
		const _concatBwLmNOT = () => { return _returnValuedyFiycD };
		const _previousKApfcw8 = {
			"concat": _concatBwLmNOT
	}
		const _returnValueRzNCbuc = await _OptionqUQgJH0._concatValue(_valuesqgGbH, _previousKApfcw8)
		const _valueihCevt = false;
		const _returnValueLBvHgE9 = -6.096161021464175;
		const _returnValueyP8WsBh = () => { return _returnValueLBvHgE9 };
		const _concatQfhlrdK = () => { return _returnValueyP8WsBh };
		const _previouscIizvy = {
			"concat": _concatQfhlrdK
	}
		const _returnValueRM7h74 = await _OptionqUQgJH0._concatValue(_valueihCevt, _previouscIizvy)
		const _arguuYYIuT = "HLbWoHTxRgxwCaAznI3FYaq9kpHDtGP666F3rL1aobtsytJXlkFufGBNNEjllXfc";
		const _returnValueE5eGxoF = await _OptionqUQgJH0.is(_arguuYYIuT)
		const _mandatoryCWiLhKY = true;
		const _returnValueqjEMJxU = await _OptionqUQgJH0.makeOptionMandatory(_mandatoryCWiLhKY)
	});

	it('test for Option', async () => {
		const _flagsAnEqxmC = "JQ4iUAoUlVQf5BVxQgDhs6QDQOyrR5k3ej5LyTSOJ3uqd7zQk9Cc3u";
		const _descriptionf5qndyJ = {
		
	}
		const _OptionZMIadCz = new Option(_flagsAnEqxmC, _descriptionf5qndyJ)
		const _nameKTT6oHU = undefined;
		const _returnValuew8AjaZz = await _OptionZMIadCz.env(_nameKTT6oHU)
		const _mandatoryeF97IGA = false;
		const _returnValueHaeARJZ = await _OptionZMIadCz.makeOptionMandatory(_mandatoryeF97IGA)
		const _valueRlznqA6 = undefined;
		const _returnValueGdHm4TX = undefined;
		const _concatgKw5pV = () => { return _returnValueGdHm4TX };
		const _previouss1UoFR = {
			"concat": _concatgKw5pV
	}
		const _returnValueFfN6ZX = await _OptionZMIadCz._concatValue(_valueRlznqA6, _previouss1UoFR)
		const _returnValueI11z3uh = "FI3qMGh3jF9FFrqTpTEfoamVp3APfV9DNxWG9fN2EMiH2osZJkH74fcgPOLXiI4HzSdbgfi6E8SQRjbG";
		const _includesPyoK3Bd = () => { return _returnValueI11z3uh };
		const _joinPj8OSKH = null;
		const _valuesFlR8wFC = {
			"includes": _includesPyoK3Bd,
		"join": _joinPj8OSKH
	}
		const _returnValueyYsY9vF = await _OptionZMIadCz.choices(_valuesFlR8wFC)
	});

	it('test for Option', async () => {
		const _flagsM2oQKGp = "h8w89kYWFvXmbmaGutTmkNu8R9eTGllb5UX0kqzmeWzCfzQWyPH2tC9WJK8jFLDCPRnKHY8Zlf9aO";
		const _descriptionQkIexVn = "1AKO7X3bhAbrlb3NZvMqkWQAfG8ajeDMhC2ctd9rn";
		const _OptionmIRlEn2 = new Option(_flagsM2oQKGp, _descriptionQkIexVn)
		const _fnHTiBs5 = undefined;
		const _returnValuezPd6klk = await _OptionmIRlEn2.argParser(_fnHTiBs5)
		const _returnValueZcy1ebh = await _OptionmIRlEn2.name()
	});

	it('test for Option', async () => {
		const _flagsrEKyNab = "tIaUGj9nlYYq";
		const _descriptionCLCIMKv = true;
		const _OptionHodvJnM = new Option(_flagsrEKyNab, _descriptionCLCIMKv)
		const _valueNyiO7tR = null;
		const _returnValuekQUAaqp = true;
		const _returnValuepJSeun = () => { return _returnValuekQUAaqp };
		const _concatvgjF9I5 = () => { return _returnValuepJSeun };
		const _previous6BMts8 = {
			"concat": _concatvgjF9I5
	}
		const _returnValueYoKkXSR = await _OptionHodvJnM._concatValue(_valueNyiO7tR, _previous6BMts8)
		const _nameyPz9Mkb = undefined;
		const _returnValueZq0C4n7 = await _OptionHodvJnM.env(_nameyPz9Mkb)
		const _returnValuecbURl1O = await _OptionHodvJnM.name()
		const _valuebUN5VGn = undefined;
		const _descriptionOmGfdyU = "RiXpAcavFMKVLsv7XDhu";
		const _returnValueHIq7ptQ = await _OptionHodvJnM.default(_valuebUN5VGn, _descriptionOmGfdyU)
		const _returnValueZQmuOIs = false;
		const _includesHfdYE8A = () => { return _returnValueZQmuOIs };
		const _joinjvXIzp = {
		
	}
		const _values6MmdOH = {
			"includes": _includesHfdYE8A,
		"join": _joinjvXIzp
	}
		const _returnValueEGg6r7X = await _OptionHodvJnM.choices(_values6MmdOH)
	});

	it('test for Option', async () => {
		const _flagsK64hCZt = "MN1WTlBIrthwS44O3Cj1wAqAOCH";
		const _descriptionC4sJijm = true;
		const _OptionPDGbAGi = new Option(_flagsK64hCZt, _descriptionC4sJijm)
		const _fnCK5Cu8k = true;
		const _returnValuetN5BMgw = await _OptionPDGbAGi.argParser(_fnCK5Cu8k)
		const _returnValueSCgXIom = await _OptionPDGbAGi.name()
		const _returnValuelhLk8DQ = await _OptionPDGbAGi.attributeName()
		const _returnValueq8nSGkN = await _OptionPDGbAGi.attributeName()
		const _fnsmoJAQ = undefined;
		const _returnValueCrXJJbi = await _OptionPDGbAGi.argParser(_fnsmoJAQ)
	});

	it('test for Option', async () => {
		const _flagsgjUMuWG = "dzVNxVeKKoq";
		const _descriptionxrPATOd = undefined;
		const _OptionyuExpBu = new Option(_flagsgjUMuWG, _descriptionxrPATOd)
		const _returnValuecKa4SME = true;
		const _valuea7jYhcz = () => { return _returnValuecKa4SME };
		const _previousJ3GNPyZ = []
		const _returnValuelwGBExp = await _OptionyuExpBu._concatValue(_valuea7jYhcz, _previousJ3GNPyZ)
		const _nameH7DiYMj = undefined;
		const _returnValuenhcPK0j = await _OptionyuExpBu.env(_nameH7DiYMj)
		const _hidej0lHTcY = false;
		const _returnValueIh6s9ct = await _OptionyuExpBu.hideHelp(_hidej0lHTcY)
		const _fnJx0pXRZ = undefined;
		const _returnValueKvN6q0L = await _OptionyuExpBu.argParser(_fnJx0pXRZ)
	});
})