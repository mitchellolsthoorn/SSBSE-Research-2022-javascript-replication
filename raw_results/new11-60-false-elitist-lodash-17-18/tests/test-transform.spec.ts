export {}
import transform from "../../.syntest/instrumented/benchmark/top10npm/lodash/transform.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('transform', () => {
	it('test for transform', async () => {
		const _constructorOGGd875 = null;
		const _objectWWMTuCP = {
			"constructor": _constructorOGGd875
	}
		const _iterateeJowdIF1 = null;
		const _accumulatorJ05rlRu = {
		
	}
		const _returnValueEEq9ZK3 = await transform(_objectWWMTuCP, _iterateeJowdIF1, _accumulatorJ05rlRu)
	});

	it('test for transform', async () => {
		const _arrayValueQGthPrk = null;
		const _constructorhk8qbP5 = [_arrayValueQGthPrk]
		const _objectUBNppa = {
			"constructor": _constructorhk8qbP5
	}
		const _returnValueyOJg0Rd = -6.3490245101713985;
		const _iterateeqRybzN = () => { return _returnValueyOJg0Rd };
		const _accumulatoraro6gvB = null;
		const _returnValuelFYTLN = await transform(_objectUBNppa, _iterateeqRybzN, _accumulatoraro6gvB)
	});

	it('test for transform', async () => {
		const _returnValuelfQkSpx = {
		
	}
		const _objectF1v5Tvm = () => { return _returnValuelfQkSpx };
		const _returnValuekMprsvC = 4.920500381976996;
		const _iterateeFJKJ6yJ = () => { return _returnValuekMprsvC };
		const _accumulatornjv8Y4L = null;
		const _returnValuedvdlcqJ = await transform(_objectF1v5Tvm, _iterateeFJKJ6yJ, _accumulatornjv8Y4L)
	});

	it('test for transform', async () => {
		const _arrayValueGI9yuw0 = 2.922336243503249;
		const _arrayValueuRlTSU6 = {
		
	}
		const _objectRdfm1G = [_arrayValueGI9yuw0, _arrayValueuRlTSU6]
		const _returnValuehr8G7XK = []
		const _iterateeiKMeHGh = () => { return _returnValuehr8G7XK };
		const _accumulatorAmfj0H = undefined;
		const _returnValueaqW2WjB = await transform(_objectRdfm1G, _iterateeiKMeHGh, _accumulatorAmfj0H)
	});
})