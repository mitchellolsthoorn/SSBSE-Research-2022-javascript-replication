export {}
import transform from "../../.syntest/instrumented/benchmark/top10npm/lodash/transform.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('transform', () => {
	it('test for transform', async () => {
		const _returnValuemXR6tQ2 = false;
		const _constructorUp2sNk7 = () => { return _returnValuemXR6tQ2 };
		const _objectWf9xOSd = {
			"constructor": _constructorUp2sNk7
	}
		const _returnValuectfIv0 = 1.4188572790786242;
		const _iterateeIOUsAJP = () => { return _returnValuectfIv0 };
		const _returnValueVvxQNgL = null;
		const _accumulatorodphBDa = () => { return _returnValueVvxQNgL };
		const _returnValuepEJRMM1 = await transform(_objectWf9xOSd, _iterateeIOUsAJP, _accumulatorodphBDa)
	});

	it('test for transform', async () => {
		const _returnValueBfPAxoU = null;
		const _objectoqkbRKN = () => { return _returnValueBfPAxoU };
		const _returnValueGYnhHOY = undefined;
		const _iterateeNVFVCiU = () => { return _returnValueGYnhHOY };
		const _accumulatorWNXexfH = null;
		const _returnValueMdutrO = await transform(_objectoqkbRKN, _iterateeNVFVCiU, _accumulatorWNXexfH)
	});

	it('test for transform', async () => {
		const _constructort6nFdlU = "7Yp2qyDlfTvU6sD60wX9IluTmRFi64rUaEBzD7TY";
		const _objectzeWo59k = {
			"constructor": _constructort6nFdlU
	}
		const _returnValueMqgSfDT = false;
		const _returnValueq8ARson = () => { return _returnValueMqgSfDT };
		const _iterateeAALmPkj = () => { return _returnValueq8ARson };
		const _accumulatorKcJbgfm = null;
		const _returnValueb25A1Qq = await transform(_objectzeWo59k, _iterateeAALmPkj, _accumulatorKcJbgfm)
	});

	it('test for transform', async () => {
		const _returnValueMksP5h = undefined;
		const _arrayValuen7EQQ3s = () => { return _returnValueMksP5h };
		const _arrayValueyGyZ7Gx = true;
		const _arrayValueWhwkBnb = undefined;
		const _arrayValuenTWxJCp = null;
		const _objectcosYWK2 = [_arrayValuen7EQQ3s, _arrayValueyGyZ7Gx, _arrayValueWhwkBnb, _arrayValuenTWxJCp]
		const _arrayValueLAHpGn6 = "u7pXmaqMU4R2vCUP4j5hm569dABMW9lQBE9jbmsiKCkP9VjhQhypKjYwW3XebebPbV6iXIU";
		const _arrayValueQ9TFL8G = null;
		const _arrayValueLRpNXp = [_arrayValueLAHpGn6, _arrayValueQ9TFL8G]
		const _arrayValueIS5qi7r = null;
		const _returnValueS5oG4G = [_arrayValueLRpNXp, _arrayValueIS5qi7r]
		const _iterateen7UrPz = () => { return _returnValueS5oG4G };
		const _accumulatorZGuHRae = null;
		const _returnValueE8VnRob = await transform(_objectcosYWK2, _iterateen7UrPz, _accumulatorZGuHRae)
	});
})