export {}
import hasPath from "../../.syntest/instrumented/benchmark/top10npm/lodash/hasPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hasPath', () => {
	it('test for hasPath', async () => {
		const _objecteM6lQwJ = 9.480033030197703;
		const _pathuVTgYVl = {
		
	}
		const _returnValuejhsbA9z = await hasPath(_objecteM6lQwJ, _pathuVTgYVl)
	});

	it('test for hasPath', async () => {
		const _arrayValueyzdVS39 = false;
		const _returnValueaYA5r4 = [_arrayValueyzdVS39]
		const _lengthUUk9XN = () => { return _returnValueaYA5r4 };
		const _objectiJU5th0 = {
			"length": _lengthUUk9XN
	}
		const _pathbzxUHzj = 5.033555773037071;
		const _returnValueQYFkJw = await hasPath(_objectiJU5th0, _pathbzxUHzj)
	});

	it('test for hasPath', async () => {
		const _objectXYFnLsF = null;
		const _pathjhEbMq6 = true;
		const _returnValue2o9qm8 = await hasPath(_objectXYFnLsF, _pathjhEbMq6)
	});
})