export {}
import transform from "../../.syntest/instrumented/benchmark/top10npm/lodash/transform.js";
import SetCache from "../../benchmark/top10npm/lodash/.internal/SetCache.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('transform', () => {
	it('test for transform', async () => {
		const _returnValueWEkGlHW = undefined;
		const _objectj9ZNNAi = () => { return _returnValueWEkGlHW };
		const _returnValuesLhWZq7 = false;
		const _iterateeywNFsjJ = () => { return _returnValuesLhWZq7 };
		const _accumulatorbekpeBr = {
		
	}
		const _returnValueflf1Jlk = await transform(_objectj9ZNNAi, _iterateeywNFsjJ, _accumulatorbekpeBr)
	});

	it('test for transform', async () => {
		const _valuesePnUIAU = "pFKMk7IFAfRs";
		const _objectMsG9ne1 = new SetCache(_valuesePnUIAU)
		const _valueWB0gs5c = true;
		const _returnValuekTQo7OE = await _objectMsG9ne1.has(_valueWB0gs5c)
		const _returnValuee8E7gWw = []
		const _value13rSQP = () => { return _returnValuee8E7gWw };
		const _returnValueRsQhqM7 = await _objectMsG9ne1.add(_value13rSQP)
		const _valuemjON20X = null;
		const _returnValuew2uNZb4 = await _objectMsG9ne1.add(_valuemjON20X)
		const _iterateemh4MPnn = null;
		const _accumulatorFMFILh = undefined;
		const _returnValuegbOM54h = await transform(_objectMsG9ne1, _iterateemh4MPnn, _accumulatorFMFILh)
	});

	it('test for transform', async () => {
		const _constructorWoyiunv = null;
		const _objectY6Ht4b0 = {
			"constructor": _constructorWoyiunv
	}
		const _returnValueOGj8HTY = null;
		const _iterateeHyuc9yq = () => { return _returnValueOGj8HTY };
		const _accumulatorebJzh02 = null;
		const _returnValuedRhtsIX = await transform(_objectY6Ht4b0, _iterateeHyuc9yq, _accumulatorebJzh02)
	});

	it('test for transform', async () => {
		const _arrayValueUXQT62 = null;
		const _arrayValueJie9dF3 = "tFgC6P7xoWispYFiOuufo9f3gfQuBiQDQiHnw8RDBWoDYdw9KXILkjjqjMPcRQ6gShlLxzR38Dz3JqVjKYX3cYVhHBVAkW";
		const _arrayValueJ5v0Rtn = true;
		const _arrayValuefLz6e9 = [_arrayValueJie9dF3, _arrayValueJ5v0Rtn]
		const _arrayValueCaTpOGy = null;
		const _objectRgzQSC = [_arrayValueUXQT62, _arrayValuefLz6e9, _arrayValueCaTpOGy]
		const _returnValuen7OAvCO = undefined;
		const _iterateewh2zV8 = () => { return _returnValuen7OAvCO };
		const _accumulatorKpFkgaT = null;
		const _returnValueHTltkvp = await transform(_objectRgzQSC, _iterateewh2zV8, _accumulatorKpFkgaT)
	});
})