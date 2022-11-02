export {}
import Hash from "../../benchmark/top10npm/lodash/.internal/Hash.js";
import transform from "../../.syntest/instrumented/benchmark/top10npm/lodash/transform.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('transform', () => {
	it('test for transform', async () => {
		const _arrayValueZtwXPXq = 7.604655672778108;
		const _arrayValueyshxXva = "uzgdsHSlf76g6mJGFhNsh3Mpd";
		const _entriesL9k1Rd = [_arrayValueZtwXPXq, _arrayValueyshxXva]
		const _objectJpVnHXv = new Hash(_entriesL9k1Rd)
		const _keyckGZ0eT = "mUloDd";
		const _returnValueEFArwGO = await _objectJpVnHXv.has(_keyckGZ0eT)
		const _keybXRH3Re = undefined;
		const _valuegvSWxr9 = undefined;
		const _returnValuedqSpEto = await _objectJpVnHXv.set(_keybXRH3Re, _valuegvSWxr9)
		const _returnValueTEAnina = true;
		const _iterateeZcwIEP = () => { return _returnValueTEAnina };
		const _accumulatorFjwkvrF = {
		
	}
		const _returnValueXqZkKQ1 = await transform(_objectJpVnHXv, _iterateeZcwIEP, _accumulatorFjwkvrF)
	});

	it('test for transform', async () => {
		const _arrayValuejbj3YMR = null;
		const _arrayValueIP2wJGe = {
		
	}
		const _arrayValuexd8XTq = true;
		const _arrayValueBgPfg4 = undefined;
		const _arrayValueaouPNND = [_arrayValuejbj3YMR, _arrayValueIP2wJGe, _arrayValuexd8XTq, _arrayValueBgPfg4]
		const _arrayValuelseePBr = "RkhG4VhH54KfNhEP4udMeuoy";
		const _constructorSBQILb0 = [_arrayValueaouPNND, _arrayValuelseePBr]
		const _objectjcZhCZC = {
			"constructor": _constructorSBQILb0
	}
		const _returnValueqpFt4Ra = false;
		const _returnValuePdYYHt = () => { return _returnValueqpFt4Ra };
		const _iterateeiyVw2L5 = () => { return _returnValuePdYYHt };
		const _accumulatorVhw5iu = null;
		const _returnValuelO5dAtE = await transform(_objectjcZhCZC, _iterateeiyVw2L5, _accumulatorVhw5iu)
	});

	it('test for transform', async () => {
		const _arrayValuedFY6tst = -0.9316153833107652;
		const _arrayValuerm3wRAL = undefined;
		const _arrayValueNLCNqjN = true;
		const _objectNmmnlgl = [_arrayValuedFY6tst, _arrayValuerm3wRAL, _arrayValueNLCNqjN]
		const _iterateeD7Xjl2d = true;
		const _accumulatorw6GeXY6 = null;
		const _returnValueUFa5UO = await transform(_objectNmmnlgl, _iterateeD7Xjl2d, _accumulatorw6GeXY6)
	});

	it('test for transform', async () => {
		const _arrayValueUE3WbDR = true;
		const _arrayValueY7odCtI = false;
		const _arrayValueH4zjf7n = "FVSI485ksYNCLdeLlb2fsybDYW9Ei8LUOApxefSDrghrLIJkaST6SlkpdQGGB5bGF4vs5aia42";
		const _arrayValueG4viAlj = "86QSed3b4mCR7BftqrhTjmWx0PbU76GHmucwavCyC7COOL3bcttMFTh20XbtQqNaLJIRUOCYqVQpQpJKqB7";
		const _returnValuecuNzqiC = [_arrayValueUE3WbDR, _arrayValueY7odCtI, _arrayValueH4zjf7n, _arrayValueG4viAlj]
		const _objectbzLIuX3 = () => { return _returnValuecuNzqiC };
		const _returnValuenwlnyeJ = null;
		const _iterateeHA5wnj5 = () => { return _returnValuenwlnyeJ };
		const _accumulatorpdhkIpw = null;
		const _returnValueG62dBOq = await transform(_objectbzLIuX3, _iterateeHA5wnj5, _accumulatorpdhkIpw)
	});
})