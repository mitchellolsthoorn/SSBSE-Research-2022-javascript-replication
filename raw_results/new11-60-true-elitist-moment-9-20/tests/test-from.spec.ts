export {}
import {from} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('from', () => {
	it('test for from', async () => {
		const _arrayValuedqUmiHm = "mpngBlW";
		const _arrayValueg4Ry1i2 = undefined;
		const _arrayValueDI6RiDd = null;
		const _arrayValuek7XRqcc = false;
		const _returnValueOEpKtwC = [_arrayValuedqUmiHm, _arrayValueg4Ry1i2, _arrayValueDI6RiDd, _arrayValuek7XRqcc]
		const _isValidoe2zbZS = () => { return _returnValueOEpKtwC };
		const _timeWvmXSYi = {
			"isValid": _isValidoe2zbZS
	}
		const _withoutSuffixziDgw5 = undefined;
		const _returnValueQdYz5bU = await from(_timeWvmXSYi, _withoutSuffixziDgw5)
	});
})