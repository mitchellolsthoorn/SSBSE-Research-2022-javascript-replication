export {}
import result from "../../.syntest/instrumented/benchmark/top10npm/lodash/result.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('result', () => {
	it('test for result', async () => {
		const _objectvc8A5x2 = undefined;
		const _lengthYT13q8y = 0.9646656357855399;
		const _pathXwTeGWx = {
			"length": _lengthYT13q8y
	}
		const _defaultValueYJZs82f = {
		
	}
		const _returnValueCLrlj5x = await result(_objectvc8A5x2, _pathXwTeGWx, _defaultValueYJZs82f)
	});

	it('test for result', async () => {
		const _objectPYhX5zP = undefined;
		const _pathsKIQ2M2 = 5.804858357610856;
		const _defaultValueYr2S78 = undefined;
		const _returnValue7t3Unq = await result(_objectPYhX5zP, _pathsKIQ2M2, _defaultValueYr2S78)
	});

	it('test for result', async () => {
		const _objectqhy5Njv = undefined;
		const _arrayValuei6CoAeK = undefined;
		const _arrayValuePdjyQF4 = "TEZXElOuMvT9HsCGxOaZNSYU2oM7dpbfmacflyYfk7gyTWNZxXj25T653G";
		const _arrayValueVwjhArM = {
		
	}
		const _returnValuetWNKgeZ = [_arrayValuei6CoAeK, _arrayValuePdjyQF4, _arrayValueVwjhArM]
		const _pathf1cpN4x = () => { return _returnValuetWNKgeZ };
		const _returnValueCvDtOPd = null;
		const _defaultValuebQICdK = () => { return _returnValueCvDtOPd };
		const _returnValue7jIy15 = await result(_objectqhy5Njv, _pathf1cpN4x, _defaultValuebQICdK)
	});

	it('test for result', async () => {
		const _objectBg2Lqm = undefined;
		const _pathFwCFqOl = []
		const _defaultValueUsIIENI = {
		
	}
		const _returnValuerjqEVmR = await result(_objectBg2Lqm, _pathFwCFqOl, _defaultValueUsIIENI)
	});
})