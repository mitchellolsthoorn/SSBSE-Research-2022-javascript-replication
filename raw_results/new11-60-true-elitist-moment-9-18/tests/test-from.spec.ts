export {}
import {from} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('from', () => {
	it('test for from', async () => {
		const _returnValueHlCZtt8 = null;
		const _isValidL2yMlB9 = () => { return _returnValueHlCZtt8 };
		const _timeF5N1lvs = {
			"isValid": _isValidL2yMlB9
	}
		const _arrayValuesprV1N7 = "HiE5bWHPp94C";
		const _withoutSuffixkH5WHFt = [_arrayValuesprV1N7]
		const _returnValueaDMRHT7 = await from(_timeF5N1lvs, _withoutSuffixkH5WHFt)
	});
})