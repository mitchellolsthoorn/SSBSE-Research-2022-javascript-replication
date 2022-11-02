export {}
import result from "../../.syntest/instrumented/benchmark/top10npm/lodash/result.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('result', () => {
	it('test for result', async () => {
		const _objectdOQz35s = undefined;
		const _lengthWEf0TZ6 = -9.999570242115006;
		const _pathMgyhzL = {
			"length": _lengthWEf0TZ6
	}
		const _defaultValueTkRqR6O = {
		
	}
		const _returnValuezZawhuE = await result(_objectdOQz35s, _pathMgyhzL, _defaultValueTkRqR6O)
	});

	it('test for result', async () => {
		const _objectTdyFLn = undefined;
		const _pathGmYpbdA = null;
		const _defaultValue047hYL = {
		
	}
		const _returnValueeeLN0sh = await result(_objectTdyFLn, _pathGmYpbdA, _defaultValue047hYL)
	});

	it('test for result', async () => {
		const _objectZgredCr = undefined;
		const _pathMk99Jyj = undefined;
		const _returnValuestMZnh2 = null;
		const _defaultValueqnN0HZi = () => { return _returnValuestMZnh2 };
		const _returnValuelVpROF = await result(_objectZgredCr, _pathMk99Jyj, _defaultValueqnN0HZi)
	});

	it('test for result', async () => {
		const _objectHlkpjwZ = undefined;
		const _pathyZfS7SH = []
		const _defaultValueNXjCTva = {
		
	}
		const _returnValuesreEhRN = await result(_objectHlkpjwZ, _pathyZfS7SH, _defaultValueNXjCTva)
	});
})