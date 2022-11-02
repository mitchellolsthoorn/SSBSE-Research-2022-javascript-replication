export {}
import hasPath from "../../.syntest/instrumented/benchmark/top10npm/lodash/hasPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hasPath', () => {
	it('test for hasPath', async () => {
		const _returnValueWMmXRxO = -8.491708182255174;
		const _objectnVEki56 = () => { return _returnValueWMmXRxO };
		const _pathqxfZxQe = {
		
	}
		const _returnValuec0SygOr = await hasPath(_objectnVEki56, _pathqxfZxQe)
	});

	it('test for hasPath', async () => {
		const _returnValuey93xm85 = null;
		const _lengthzhSPU3T = () => { return _returnValuey93xm85 };
		const _objectp9g4x4Z = {
			"length": _lengthzhSPU3T
	}
		const _pathSt0LPbB = "WMW7PlXfRcR66xUU2EOKz2V0fBcAQQEhHhd34RmZXlR8mJocdasnVmhTT6ajP7SPJrxtEQb1kKZ7NyT6FpEYzcvMb";
		const _returnValueLppAlcy = await hasPath(_objectp9g4x4Z, _pathSt0LPbB)
	});

	it('test for hasPath', async () => {
		const _objectBVuTLG6 = null;
		const _pathMLLb4CO = "CyppwhkkhQNT";
		const _returnValuenLijpnG = await hasPath(_objectBVuTLG6, _pathMLLb4CO)
	});
})