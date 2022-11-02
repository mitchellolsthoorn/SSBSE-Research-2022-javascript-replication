export {}
import SetCache from "../../benchmark/top10npm/lodash/.internal/SetCache.js";
import transform from "../../.syntest/instrumented/benchmark/top10npm/lodash/transform.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('transform', () => {
	it('test for transform', async () => {
		const _arrayValuemoElDPU = undefined;
		const _arrayValuecXkueTq = undefined;
		const _arrayValueVhWUslU = "ldiP2j5GkwDZHxJYpJ5JkwnYwbRzqG9OiVsdL3luoDGpCTHHsXXg6Vu";
		const _valuesOIWgAJA = [_arrayValuemoElDPU, _arrayValuecXkueTq, _arrayValueVhWUslU]
		const _objectQgDKmX8 = new SetCache(_valuesOIWgAJA)
		const _valueYT8brrQ = undefined;
		const _returnValue80KB6K = await _objectQgDKmX8.has(_valueYT8brrQ)
		const _valueBQzkkuc = 8.966442550955708;
		const _returnValueUkemiM = await _objectQgDKmX8.add(_valueBQzkkuc)
		const _valueJokx04h = null;
		const _returnValueIuMNB3M = await _objectQgDKmX8.has(_valueJokx04h)
		const _iterateeQUvtj1s = {
		
	}
		const _accumulatorDjce79k = {
		
	}
		const _returnValueX4SChau = await transform(_objectQgDKmX8, _iterateeQUvtj1s, _accumulatorDjce79k)
	});

	it('test for transform', async () => {
		const _arrayValueWx9Vbnf = null;
		const _arrayValueVXk64b4 = "B6GOE2uNI3WHG52jAPFDvASW5jiiqawoep4vKqZtcLphdqmQjnhBEKCW83Vn9TAP";
		const _arrayValueThUA1tb = undefined;
		const _objectnKaTBa = [_arrayValueWx9Vbnf, _arrayValueVXk64b4, _arrayValueThUA1tb]
		const _returnValueFXfrdvu = undefined;
		const _iterateeLgyCCt = () => { return _returnValueFXfrdvu };
		const _accumulatorqrtvMRY = null;
		const _returnValuefKJbzs = await transform(_objectnKaTBa, _iterateeLgyCCt, _accumulatorqrtvMRY)
	});

	it('test for transform', async () => {
		const _returnValuetUlYtnt = 5.207164923580514;
		const _objectS5MrbWz = () => { return _returnValuetUlYtnt };
		const _returnValueBK0Hgna = null;
		const _iterateeYSXUHFi = () => { return _returnValueBK0Hgna };
		const _accumulatorFfLpeiW = null;
		const _returnValues7AAVHQ = await transform(_objectS5MrbWz, _iterateeYSXUHFi, _accumulatorFfLpeiW)
	});

	it('test for transform', async () => {
		const _constructorJSnhkbz = "mobyFpY09PjTzg3wcgUDm8tAWvjdIbitroUWE";
		const _objectRZF76yC = {
			"constructor": _constructorJSnhkbz
	}
		const _iterateenuwPwIL = false;
		const _accumulatorB8Qy3Sr = null;
		const _returnValueEZqJh8i = await transform(_objectRZF76yC, _iterateenuwPwIL, _accumulatorB8Qy3Sr)
	});
})