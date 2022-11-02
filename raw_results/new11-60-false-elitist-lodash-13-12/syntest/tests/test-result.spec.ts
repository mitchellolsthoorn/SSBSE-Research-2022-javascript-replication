export {}
import result from "../../.syntest/instrumented/benchmark/top10npm/lodash/result.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('result', () => {
	it('test for result', async () => {
		const _objectCU0CUfR = undefined;
		const _lengthC6w8Khs = 9.86786550832415;
		const _pathxrVgmh6 = {
			"length": _lengthC6w8Khs
	}
		const _defaultValuePjLxw0L = {
		
	}
		const _returnValuemtEZ1oG = await result(_objectCU0CUfR, _pathxrVgmh6, _defaultValuePjLxw0L)
	});

	it('test for result', async () => {
		const _objectIQhCkDk = undefined;
		const _pathd48Xtus = true;
		const _defaultValueJlSiqjc = "T";
		const _returnValueaJLv9dL = await result(_objectIQhCkDk, _pathd48Xtus, _defaultValueJlSiqjc)
	});

	it('test for result', async () => {
		const _objectlCmykox = undefined;
		const _pathmbhn3UB = []
		const _defaultValuevbiNBH = {
		
	}
		const _returnValuedPkhmmT = await result(_objectlCmykox, _pathmbhn3UB, _defaultValuevbiNBH)
	});

	it('test for result', async () => {
		const _objectahPB0jp = undefined;
		const _pathGWJM9Lg = "OwtTFeKDGhWXCzmtqRkRNORxuASB";
		const _returnValuexZdACMR = null;
		const _defaultValuer46wfDx = () => { return _returnValuexZdACMR };
		const _returnValuem1Ist3V = await result(_objectahPB0jp, _pathGWJM9Lg, _defaultValuer46wfDx)
	});
})