export {}
import transform from "../../.syntest/instrumented/benchmark/top10npm/lodash/transform.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('transform', () => {
	it('test for transform', async () => {
		const _constructorAfDcaiv = -1.228333497744451;
		const _objectsjcXnv0 = {
			"constructor": _constructorAfDcaiv
	}
		const _returnValueZdDpyx3 = 9.921679093404173;
		const _iterateeojGE34c = () => { return _returnValueZdDpyx3 };
		const _accumulatorSZmkVcU = {
		
	}
		const _returnValueSh4zCO = await transform(_objectsjcXnv0, _iterateeojGE34c, _accumulatorSZmkVcU)
	});

	it('test for transform', async () => {
		const _constructorTkgizS = true;
		const _objecthWU51Sm = {
			"constructor": _constructorTkgizS
	}
		const _returnValuex1k9OCi = 2.1995962183196234;
		const _iterateepWGwnC8 = () => { return _returnValuex1k9OCi };
		const _accumulatorkLfEaRZ = undefined;
		const _returnValuepARXeJ6 = await transform(_objecthWU51Sm, _iterateepWGwnC8, _accumulatorkLfEaRZ)
	});

	it('test for transform', async () => {
		const _returnValueHzGiOn8 = true;
		const _objectcM6f1uB = () => { return _returnValueHzGiOn8 };
		const _arrayValueKfBJn8 = undefined;
		const _arrayValueWwCUxJZ = null;
		const _arrayValuefprsXVM = [_arrayValueKfBJn8, _arrayValueWwCUxJZ]
		const _arrayValueOn4PZeC = null;
		const _returnValueDcubmc = [_arrayValuefprsXVM, _arrayValueOn4PZeC]
		const _iterateeqMO0eua = () => { return _returnValueDcubmc };
		const _accumulatortwMm4rB = null;
		const _returnValuePsqVoz = await transform(_objectcM6f1uB, _iterateeqMO0eua, _accumulatortwMm4rB)
	});

	it('test for transform', async () => {
		const _arrayValuezuYVEaR = {
		
	}
		const _arrayValuejXs5Muh = [_arrayValuezuYVEaR]
		const _objectjr4Zs09 = [_arrayValuejXs5Muh]
		const _returnValuekJp8LhP = undefined;
		const _iterateeVW6h2xz = () => { return _returnValuekJp8LhP };
		const _accumulatorda5K0hg = null;
		const _returnValueCfw5oO = await transform(_objectjr4Zs09, _iterateeVW6h2xz, _accumulatorda5K0hg)
	});
})