export {}
import {from} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('from', () => {
	it('test for from', async () => {
		const _returnValuefpWlYes = null;
		const _isValidW1Tt4U0 = () => { return _returnValuefpWlYes };
		const _timeSrIECsf = {
			"isValid": _isValidW1Tt4U0
	}
		const _arrayValueRLiwWMA = 0.7376024372486008;
		const _arrayValueN6lTfDy = true;
		const _arrayValueihZmCk3 = undefined;
		const _arrayValuenRhvo8t = [_arrayValueRLiwWMA, _arrayValueN6lTfDy, _arrayValueihZmCk3]
		const _arrayValuevRZ3W1M = null;
		const _withoutSuffixE5BotB = [_arrayValuenRhvo8t, _arrayValuevRZ3W1M]
		const _returnValuekwOq02m = await from(_timeSrIECsf, _withoutSuffixE5BotB)
	});
})