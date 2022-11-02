export {}
import {from} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('from', () => {
	it('test for from', async () => {
		const _isValidu0hVDkc = "8gA5F9Fris3eLIejiC1bELKxEzkvp8qFEr55RQCqz";
		const _returnValueyWR01Ox = undefined;
		const _cloneMfllGXe = () => { return _returnValueyWR01Ox };
		const _returnValuesjZWfp = null;
		const _toDatepU9hu20 = () => { return _returnValuesjZWfp };
		const _returnValuekeUTKpO = 8.676022856780278;
		const _arrayValueyFXbM4R = () => { return _returnValuekeUTKpO };
		const _returnValueMK5740A = [_arrayValueyFXbM4R]
		const _valueOfjMovOTb = () => { return _returnValueMK5740A };
		const _returnValuelmymziD = null;
		const _utcOffsetVKzkp4J = () => { return _returnValuelmymziD };
		const _timedPPEEw = {
			"isValid": _isValidu0hVDkc,
		"clone": _cloneMfllGXe,
		"toDate": _toDatepU9hu20,
		"valueOf": _valueOfjMovOTb,
		"utcOffset": _utcOffsetVKzkp4J
	}
		const _withoutSuffixlQgf53Q = undefined;
		const _returnValueq9NY9OC = await from(_timedPPEEw, _withoutSuffixlQgf53Q)
	});
})