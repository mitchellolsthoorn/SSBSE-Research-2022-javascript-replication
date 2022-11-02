export {}
const {splitOptionFlags} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('splitOptionFlags', () => {
	it('test for splitOptionFlags', async () => {
		const _arrayValuehDar8qY = -6.223136381251651;
		const _arrayValuebxpMnq6 = [_arrayValuehDar8qY]
		const _arrayValueTe7AL9O = "B6QX7cAFQBhoSn4is52Su0nxq85EuBrvoCcM5eLNGgKhib85XC1LCQxdjWK7oFU2mF8tLlykk7jZD";
		const _arrayValuehpbw98m = null;
		const _flagsMxCW3Y = [_arrayValuebxpMnq6, _arrayValueTe7AL9O, _arrayValuehpbw98m]
		const _returnValuezKWSGGU = await splitOptionFlags(_flagsMxCW3Y)
	});

	it('test for splitOptionFlags', async () => {
		const _flagsGoSUFq6 = "OCVtz3zo1rwzebI";
		const _returnValueSZVOZ35 = await splitOptionFlags(_flagsGoSUFq6)
	});

	it('test for splitOptionFlags', async () => {
		const _arrayValueS2o8AHx = true;
		const _arrayValueZrRyiO = 0.8287623544631533;
		const _returnValueE82T1Ku = [_arrayValueS2o8AHx, _arrayValueZrRyiO]
		const _splitOQnR4ji = () => { return _returnValueE82T1Ku };
		const _flagsqdJt7jJ = {
			"split": _splitOQnR4ji
	}
		const _returnValuenMHtwKD = await splitOptionFlags(_flagsqdJt7jJ)
	});
})