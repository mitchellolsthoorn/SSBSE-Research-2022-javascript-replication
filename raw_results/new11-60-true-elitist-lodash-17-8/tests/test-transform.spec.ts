export {}
import transform from "../../.syntest/instrumented/benchmark/top10npm/lodash/transform.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('transform', () => {
	it('test for transform', async () => {
		const _constructord8IylA = null;
		const _objectJeex5Ph = {
			"constructor": _constructord8IylA
	}
		const _returnValueSwCU0mS = -5.506130602932109;
		const _iterateeqYTjlR1 = () => { return _returnValueSwCU0mS };
		const _accumulator26IxBh = {
		
	}
		const _returnValuejsyXoIH = await transform(_objectJeex5Ph, _iterateeqYTjlR1, _accumulator26IxBh)
	});

	it('test for transform', async () => {
		const _constructorwCeoX5i = false;
		const _objectajKCBb = {
			"constructor": _constructorwCeoX5i
	}
		const _returnValueXVZKmp = {
		
	}
		const _iterateeRsz80ep = () => { return _returnValueXVZKmp };
		const _accumulatorA3TXKzS = null;
		const _returnValueSe7MwVV = await transform(_objectajKCBb, _iterateeRsz80ep, _accumulatorA3TXKzS)
	});

	it('test for transform', async () => {
		const _returnValueKykB6ln = 6.255015472148568;
		const _constructorZvZlVI0 = () => { return _returnValueKykB6ln };
		const _objectwj3KLtg = {
			"constructor": _constructorZvZlVI0
	}
		const _iterateeQDl1Fu3 = undefined;
		const _accumulatortXDiyLd = null;
		const _returnValuexoKGxHU = await transform(_objectwj3KLtg, _iterateeQDl1Fu3, _accumulatortXDiyLd)
	});

	it('test for transform', async () => {
		const _arrayValuexV1HvsF = "hYlWzVnJAlGpb5jefiTO";
		const _arrayValueo3OVxvW = 4.841813781724017;
		const _arrayValuePWVi4wC = [_arrayValueo3OVxvW]
		const _arrayValueyA0k3S = "3TX";
		const _arrayValuetbl2ggb = [_arrayValuexV1HvsF, _arrayValuePWVi4wC, _arrayValueyA0k3S]
		const _arrayValueMy6Ay8 = {
		
	}
		const _arrayValuetBGwFLd = []
		const _arrayValueCbpGZtH = null;
		const _arrayValueQlqKeS = 3.7946718194452203;
		const _arrayValueIB5ate4 = "5lobOjdDgKvdEoQmAII5qMfJKHgBC8C4tbo3fArcXtutqdOowXkpkQTWH";
		const _arrayValuemKbSwNL = {
		
	}
		const _arrayValuenE2oQoL = [_arrayValueQlqKeS, _arrayValueIB5ate4, _arrayValuemKbSwNL]
		const _arrayValueYywwXog = undefined;
		const _arrayValuecDmYRlx = [_arrayValuetBGwFLd, _arrayValueCbpGZtH, _arrayValuenE2oQoL, _arrayValueYywwXog]
		const _objectkI74BR = [_arrayValuetbl2ggb, _arrayValueMy6Ay8, _arrayValuecDmYRlx]
		const _returnValuerBDwVD = undefined;
		const _iterateeJU5qVwr = () => { return _returnValuerBDwVD };
		const _accumulatorLs9PMkq = null;
		const _returnValuekZtJ47w = await transform(_objectkI74BR, _iterateeJU5qVwr, _accumulatorLs9PMkq)
	});
})