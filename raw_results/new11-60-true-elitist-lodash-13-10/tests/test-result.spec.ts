export {}
import result from "../../.syntest/instrumented/benchmark/top10npm/lodash/result.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('result', () => {
	it('test for result', async () => {
		const _objectqbUcAqx = undefined;
		const _lengthYVSshDA = 3.090011112326124;
		const _pathsbijHRb = {
			"length": _lengthYVSshDA
	}
		const _defaultValuesjN4tWV = {
		
	}
		const _returnValueTAgKAAJ = await result(_objectqbUcAqx, _pathsbijHRb, _defaultValuesjN4tWV)
	});

	it('test for result', async () => {
		const _objectdJbRMY0 = undefined;
		const _pathVEHWY4T = true;
		const _defaultValuehr5v68P = {
		
	}
		const _returnValueXNcpdU0 = await result(_objectdJbRMY0, _pathVEHWY4T, _defaultValuehr5v68P)
	});

	it('test for result', async () => {
		const _objectZ356eEF = undefined;
		const _pathlazvTe = []
		const _defaultValueg383nMM = {
		
	}
		const _returnValueCy4C6hF = await result(_objectZ356eEF, _pathlazvTe, _defaultValueg383nMM)
	});

	it('test for result', async () => {
		const _objectxigrBGI = undefined;
		const _arrayValuegnsNquP = false;
		const _pathIyYWcAc = [_arrayValuegnsNquP]
		const _returnValueqvLmef6 = 1.1068654526906485;
		const _defaultValuezxlAYvF = () => { return _returnValueqvLmef6 };
		const _returnValuexuaQn7w = await result(_objectxigrBGI, _pathIyYWcAc, _defaultValuezxlAYvF)
	});
})