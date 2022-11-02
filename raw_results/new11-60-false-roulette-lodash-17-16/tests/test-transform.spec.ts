export {}
import transform from "../../.syntest/instrumented/benchmark/top10npm/lodash/transform.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('transform', () => {
	it('test for transform', async () => {
		const _returnValuevyQR5sl = {
		
	}
		const _objectNYKVth7 = () => { return _returnValuevyQR5sl };
		const _arrayValue9NxC0B = false;
		const _arrayValueolILKxz = "2jeXil9roL2YsEwlrYPdr2H7ugKUvY3iToQMFKF7sN";
		const _arrayValuekSyTynP = true;
		const _returnValuemcbinYE = true;
		const _returnValuekWwHf0 = () => { return _returnValuemcbinYE };
		const _arrayValueWBVHkhW = () => { return _returnValuekWwHf0 };
		const _returnValueVSPUZDT = [_arrayValue9NxC0B, _arrayValueolILKxz, _arrayValuekSyTynP, _arrayValueWBVHkhW]
		const _iterateeIjbUkva = () => { return _returnValueVSPUZDT };
		const _accumulatorK8QqPPY = null;
		const _returnValueMdq470Y = await transform(_objectNYKVth7, _iterateeIjbUkva, _accumulatorK8QqPPY)
	});

	it('test for transform', async () => {
		const _objectZ8t7359 = "Uz1aPpgW";
		const _returnValueQkYg74l = true;
		const _iterateeEn9jqUc = () => { return _returnValueQkYg74l };
		const _accumulatorQVlwAOR = {
		
	}
		const _returnValuegzJmqEt = await transform(_objectZ8t7359, _iterateeEn9jqUc, _accumulatorQVlwAOR)
	});

	it('test for transform', async () => {
		const _constructoraVgOkjc = undefined;
		const _object3P2MWE = {
			"constructor": _constructoraVgOkjc
	}
		const _returnValueaSV3Pig = undefined;
		const _iterateeYZgDfR9 = () => { return _returnValueaSV3Pig };
		const _accumulatorlH87A6h = null;
		const _returnValueZP1QKl = await transform(_object3P2MWE, _iterateeYZgDfR9, _accumulatorlH87A6h)
	});

	it('test for transform', async () => {
		const _arrayValueddwnZag = -9.234856819186525;
		const _arrayValueZfry9yx = "Kw";
		const _arrayValuefLeLhAw = null;
		const _objectN7v86k3 = [_arrayValueddwnZag, _arrayValueZfry9yx, _arrayValuefLeLhAw]
		const _returnValueOcimbnx = "yzsZscahs442oqPuH82tD4bAdPnVhkuXK94ZvK9MJMHu8SuvOgTiYEZ8gypNGrusQyrbwIxKg7QmirQBaGqEgroWllkvHMNp";
		const _iteratee54dQru = () => { return _returnValueOcimbnx };
		const _accumulatorzm4zJpd = null;
		const _returnValuemSxPXSV = await transform(_objectN7v86k3, _iteratee54dQru, _accumulatorzm4zJpd)
	});
})