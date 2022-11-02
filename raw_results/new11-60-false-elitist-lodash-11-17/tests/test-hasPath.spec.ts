export {}
import hasPath from "../../.syntest/instrumented/benchmark/top10npm/lodash/hasPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hasPath', () => {
	it('test for hasPath', async () => {
		const _objectP1kyLZL = true;
		const _pathhPGHCZv = {
		
	}
		const _returnValueC5d1Yl0 = await hasPath(_objectP1kyLZL, _pathhPGHCZv)
	});

	it('test for hasPath', async () => {
		const _lengthaVnZm1U = {
		
	}
		const _objectAZqPj3d = {
			"length": _lengthaVnZm1U
	}
		const _pathFx4mc7x = 6.058513675917624;
		const _returnValueZSqFTU6 = await hasPath(_objectAZqPj3d, _pathFx4mc7x)
	});

	it('test for hasPath', async () => {
		const _objectagYM6ec = null;
		const _pathqHvORkP = null;
		const _returnValueWVekvwe = await hasPath(_objectagYM6ec, _pathqHvORkP)
	});
})