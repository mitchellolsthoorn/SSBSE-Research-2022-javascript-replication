export {}
import result from "../../.syntest/instrumented/benchmark/top10npm/lodash/result.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('result', () => {
	it('test for result', async () => {
		const _objectZRb5o9 = undefined;
		const _lengthyZ4WLIu = -0.8262732041646839;
		const _pathWVQPIC = {
			"length": _lengthyZ4WLIu
	}
		const _defaultValueeHjFSy = {
		
	}
		const _returnValuedWgB92q = await result(_objectZRb5o9, _pathWVQPIC, _defaultValueeHjFSy)
	});

	it('test for result', async () => {
		const _objectcVzdo4s = undefined;
		const _pathl8XSTew = false;
		const _defaultValuez724h9 = {
		
	}
		const _returnValueoYQhOUT = await result(_objectcVzdo4s, _pathl8XSTew, _defaultValuez724h9)
	});

	it('test for result', async () => {
		const _objectDVGzGR1 = undefined;
		const _pathUPcPQkz = []
		const _defaultValueJWhDnYW = {
		
	}
		const _returnValueMxJhEqV = await result(_objectDVGzGR1, _pathUPcPQkz, _defaultValueJWhDnYW)
	});

	it('test for result', async () => {
		const _objectjz1k6Fd = undefined;
		const _pathF7ltrk = null;
		const _returnValuejT4r0DZ = null;
		const _defaultValueRmrGBdr = () => { return _returnValuejT4r0DZ };
		const _returnValueM15Cc7z = await result(_objectjz1k6Fd, _pathF7ltrk, _defaultValueRmrGBdr)
	});
})