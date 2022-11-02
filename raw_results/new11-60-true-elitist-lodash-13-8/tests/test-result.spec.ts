export {}
import result from "../../.syntest/instrumented/benchmark/top10npm/lodash/result.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('result', () => {
	it('test for result', async () => {
		const _objectfYcaJm6 = undefined;
		const _lengthCnG5Wm3 = -9.555714651546516;
		const _pathcnoQYtn = {
			"length": _lengthCnG5Wm3
	}
		const _defaultValueXtDSv6E = {
		
	}
		const _returnValuezqcQ941 = await result(_objectfYcaJm6, _pathcnoQYtn, _defaultValueXtDSv6E)
	});

	it('test for result', async () => {
		const _objectB7o2om = undefined;
		const _pathvqO71V = undefined;
		const _defaultValueKg4Kmpq = {
		
	}
		const _returnValueZ1w8Au8 = await result(_objectB7o2om, _pathvqO71V, _defaultValueKg4Kmpq)
	});

	it('test for result', async () => {
		const _objectEZqPgHS = undefined;
		const _pathmGqfzmN = []
		const _defaultValuemM8E5m8 = {
		
	}
		const _returnValueQ9Ubc1K = await result(_objectEZqPgHS, _pathmGqfzmN, _defaultValuemM8E5m8)
	});

	it('test for result', async () => {
		const _objectYQzDmM = null;
		const _pathVeliGYa = "EI6hf";
		const _returnValue0n0xs5 = undefined;
		const _defaultValuehG4bMDW = () => { return _returnValue0n0xs5 };
		const _returnValueTv0Yfnu = await result(_objectYQzDmM, _pathVeliGYa, _defaultValuehG4bMDW)
	});
})