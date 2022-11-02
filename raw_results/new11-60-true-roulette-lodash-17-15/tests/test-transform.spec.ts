export {}
import transform from "../../.syntest/instrumented/benchmark/top10npm/lodash/transform.js";
import SetCache from "../../benchmark/top10npm/lodash/.internal/SetCache.js";

describe('transform', () => {
	it('test for transform', async () => {
		const _constructorRGf1xh = "FVUNmnKt7ko3jy4xcW8IDgLlzxUCAgArWiKFrTdN8Ft37tSu51bArEu8KfCU39JAP";
		const _objectfjNkUgy = {
			"constructor": _constructorRGf1xh
	}
		const _returnValueVH8tEfA = false;
		const _iterateevYGrul = () => { return _returnValueVH8tEfA };
		const _accumulatorAqWgjE2 = null;
		const _returnValuegbKo0g = await transform(_objectfjNkUgy, _iterateevYGrul, _accumulatorAqWgjE2)
	});

	it('test for transform', async () => {
		const _constructorLwV9Mc9 = {
		
	}
		const _objectLubZkuU = {
			"constructor": _constructorLwV9Mc9
	}
		const _returnValuewkWkjX4 = true;
		const _iterateeYLqtJSE = () => { return _returnValuewkWkjX4 };
		const _accumulatordLQeFVH = {
		
	}
		const _returnValueDGUSoXO = await transform(_objectLubZkuU, _iterateeYLqtJSE, _accumulatordLQeFVH)
	});

	it('test for transform', async () => {
		const _arrayValueUPgbIAc = "4AMaeTxcgszN0vUMfXSGMRAhY7ErQ2y2rcgEXt4LkfnwHJhYHDM1xqHMuULMDdMnYQCFBlftlXYbveCpY9DKJZseJpHPoXMM";
		const _arrayValuev81O1i = "3Eg6D82TaDpaIGz3MzzwVeCf9TuhEyNMCAodXIV5FPLUoeBhhRKyk6hUmiyqT";
		const _arrayValueHFAJaD = [_arrayValuev81O1i]
		const _arrayValueorbCeA = [_arrayValueUPgbIAc, _arrayValueHFAJaD]
		const _arrayValuePEpmB7Y = "UOQOQt2W1GVc4a1LBFOZ7C2TWTNeWB5UEASxmms7fpqn9s8Micmac4aincO2Quc";
		const _objectBraSRii = [_arrayValueorbCeA, _arrayValuePEpmB7Y]
		const _returnValueK1WNzIc = true;
		const _iterateeZ5t8BrD = () => { return _returnValueK1WNzIc };
		const _accumulatorrJ7v0iB = null;
		const _returnValue0MnpZc = await transform(_objectBraSRii, _iterateeZ5t8BrD, _accumulatorrJ7v0iB)
	});

	it('test for transform', async () => {
		const _returnValuefHXyHU = {
		
	}
		const _valuespgYqI03 = () => { return _returnValuefHXyHU };
		const _objectdOf8bXr = new SetCache(_valuespgYqI03)
		const _valueRFc7aO = false;
		const _returnValueDm198ff = await _objectdOf8bXr.add(_valueRFc7aO)
		const _valueZElsPp = undefined;
		const _returnValueyxsZp8v = await _objectdOf8bXr.has(_valueZElsPp)
		const _arrayValuegQKONmv = true;
		const _returnValueSC0SNBL = [_arrayValuegQKONmv]
		const _iterateeGU51xip = () => { return _returnValueSC0SNBL };
		const _accumulatorb4lXC9K = null;
		const _returnValuesRMkex = await transform(_objectdOf8bXr, _iterateeGU51xip, _accumulatorb4lXC9K)
	});
})