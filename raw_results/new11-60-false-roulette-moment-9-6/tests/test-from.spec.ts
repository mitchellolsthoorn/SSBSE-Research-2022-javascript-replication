export {}
import {from} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('from', () => {
	it('test for from', async () => {
		const __isUTCN6Plzwc = null;
		const _arrayValuemkKbPxQ = -4.00538334521713;
		const __offsetVFGI7ZS = [_arrayValuemkKbPxQ]
		const _arrayValueudip10r = null;
		const _returnValuerGbHZLH = null;
		const _arrayValueYQkSmZ8 = () => { return _returnValuerGbHZLH };
		const _returnValuefOxoGq = [_arrayValueudip10r, _arrayValueYQkSmZ8]
		const _isValidDZ8U1bH = () => { return _returnValuefOxoGq };
		const _timeP9bBZ72 = {
			"_isUTC": __isUTCN6Plzwc,
		"_offset": __offsetVFGI7ZS,
		"isValid": _isValidDZ8U1bH
	}
		const _withoutSuffixm6wkc1Q = -7.783401929569562;
		const _returnValueqZVHPci = await from(_timeP9bBZ72, _withoutSuffixm6wkc1Q)
	});
})