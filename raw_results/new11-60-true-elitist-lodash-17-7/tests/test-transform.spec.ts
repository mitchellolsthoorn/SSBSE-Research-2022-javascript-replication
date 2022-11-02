export {}
import transform from "../../.syntest/instrumented/benchmark/top10npm/lodash/transform.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('transform', () => {
	it('test for transform', async () => {
		const _constructorZAYijQU = "zZLmfWIuL";
		const _objectHGx7Py = {
			"constructor": _constructorZAYijQU
	}
		const _returnValueWasJ7dk = undefined;
		const _returnValueBMRponp = () => { return _returnValueWasJ7dk };
		const _returnValueYj8tux6 = () => { return _returnValueBMRponp };
		const _iterateeoarInLM = () => { return _returnValueYj8tux6 };
		const _returnValuexuNKiq3 = false;
		const _accumulatorWXVkjGL = () => { return _returnValuexuNKiq3 };
		const _returnValuexIwQRHU = await transform(_objectHGx7Py, _iterateeoarInLM, _accumulatorWXVkjGL)
	});

	it('test for transform', async () => {
		const _arrayValueQ9K8cv = 5.921943020563582;
		const _arrayValueT0iVMVj = "A";
		const _arrayValueQ8C4wO4 = [_arrayValueQ9K8cv, _arrayValueT0iVMVj]
		const _constructorISWUZby = [_arrayValueQ8C4wO4]
		const _objectOY2qDi = {
			"constructor": _constructorISWUZby
	}
		const _returnValueHaRRrA = "xaAfk63wixmeL4LiLBMOayCnRx8PlP6xQVImQ4n3OI3UM1XHVp6zy6l8ggzKOsJ6vfrgZu86Ps";
		const _iterateeseoYhkY = () => { return _returnValueHaRRrA };
		const _accumulatorRapo9ow = null;
		const _returnValueQ2qo25 = await transform(_objectOY2qDi, _iterateeseoYhkY, _accumulatorRapo9ow)
	});

	it('test for transform', async () => {
		const _returnValueRC5hvM = undefined;
		const _objectWIklJX = () => { return _returnValueRC5hvM };
		const _returnValueCCTcAY0 = -3.09084761065934;
		const _iterateeXcccDV3 = () => { return _returnValueCCTcAY0 };
		const _accumulatorGu00LyU = undefined;
		const _returnValueLjOkHE = await transform(_objectWIklJX, _iterateeXcccDV3, _accumulatorGu00LyU)
	});
})