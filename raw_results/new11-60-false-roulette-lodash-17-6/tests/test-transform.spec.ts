export {}
import transform from "../../.syntest/instrumented/benchmark/top10npm/lodash/transform.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import ListCache from "../../benchmark/top10npm/lodash/.internal/ListCache.js";

describe('transform', () => {
	it('test for transform', async () => {
		const _constructorsRtSO09 = -7.894425907425156;
		const _objectMaVxYGq = {
			"constructor": _constructorsRtSO09
	}
		const _iterateepmAqUej = undefined;
		const _accumulatorYARPAm8 = {
		
	}
		const _returnValueM6uQW1r = await transform(_objectMaVxYGq, _iterateepmAqUej, _accumulatorYARPAm8)
	});

	it('test for transform', async () => {
		const _objectklzTdik = "wGXmQtIQ4jJSSveMJeuUnfayJ0KXQLGvRHMCqVr3sE47t8oQNsSIR3TEFP1OOX1XQgMaqZWxQoodVMQIFn5bYDRnK2JED";
		const _iterateeaDS1Hl5 = "tqrVonenkkmi1bMWLV38O6kOL11yWMWS4wAxscqI4oXSmhj";
		const _accumulatorXtVoMSU = null;
		const _returnValueFcEaXnF = await transform(_objectklzTdik, _iterateeaDS1Hl5, _accumulatorXtVoMSU)
	});

	it('test for transform', async () => {
		const _arrayValueaIhqR6r = 7.479578610336922;
		const _arrayValueCfPO4zW = [_arrayValueaIhqR6r]
		const _arrayValueOZptdC9 = -4.726634979984791;
		const _arrayValuesWfiGmV = [_arrayValueCfPO4zW, _arrayValueOZptdC9]
		const _arrayValues5BrRet = null;
		const _arrayValueVJHcK9 = null;
		const _objectO1AFWf = [_arrayValuesWfiGmV, _arrayValues5BrRet, _arrayValueVJHcK9]
		const _returnValueBR0RHf4 = false;
		const _iterateezuGXxyh = () => { return _returnValueBR0RHf4 };
		const _accumulatorKZmNvNU = null;
		const _returnValue0r5Aa3 = await transform(_objectO1AFWf, _iterateezuGXxyh, _accumulatorKZmNvNU)
	});

	it('test for transform', async () => {
		const _arrayValueUAmziaW = false;
		const _arrayValuecEMphUQ = undefined;
		const _arrayValuem5Poyy = null;
		const _lengthGIdKsAN = [_arrayValueUAmziaW, _arrayValuecEMphUQ, _arrayValuem5Poyy]
		const _entriesVtRjeWf = {
			"length": _lengthGIdKsAN
	}
		const _objectGwP8Lb = new ListCache(_entriesVtRjeWf)
		const _keyfceEFta = undefined;
		const _returnValueEWTngaW = await _objectGwP8Lb.delete(_keyfceEFta)
		const _keygnxIimr = undefined;
		const _valueieAhk0E = -0.9933439936652952;
		const _returnValuebqiC5YC = await _objectGwP8Lb.set(_keygnxIimr, _valueieAhk0E)
		const _arrayValuerc0K44z = "sTb2dnkyjJkjsbJRt4Zv14ltr4SccBX2jG1KwoPzE4";
		const _arrayValueDfR1ERq = 1.157039040298013;
		const _keycCMCoS = [_arrayValuerc0K44z, _arrayValueDfR1ERq]
		const _returnValuezK5FIPy = false;
		const _valuerLlUk9 = () => { return _returnValuezK5FIPy };
		const _returnValueTgZvbcP = await _objectGwP8Lb.set(_keycCMCoS, _valuerLlUk9)
		const _key1II3ED = undefined;
		const _returnValueU2lRR0B = await _objectGwP8Lb.get(_key1II3ED)
		const _returnValueKjbvdbn = 2.7820028410440383;
		const _iterateezKn0WP = () => { return _returnValueKjbvdbn };
		const _accumulatorZhoGADL = null;
		const _returnValuetUTnRgV = await transform(_objectGwP8Lb, _iterateezKn0WP, _accumulatorZhoGADL)
	});

	it('test for transform', async () => {
		const _arrayValueDYUR3FH = 0.7059037190955344;
		const _arrayValueRZn8EQK = -7.308903506201531;
		const _arrayValueTPhDdGU = true;
		const _arrayValueHRuaT6b = undefined;
		const _arrayValueHcxBXrr = [_arrayValueTPhDdGU, _arrayValueHRuaT6b]
		const _constructorr6zF9AM = [_arrayValueDYUR3FH, _arrayValueRZn8EQK, _arrayValueHcxBXrr]
		const _objectMLlJ5ip = {
			"constructor": _constructorr6zF9AM
	}
		const _iterateePboZxNe = null;
		const _accumulatorzct54Zd = null;
		const _returnValue6oaRzB = await transform(_objectMLlJ5ip, _iterateePboZxNe, _accumulatorzct54Zd)
	});
})