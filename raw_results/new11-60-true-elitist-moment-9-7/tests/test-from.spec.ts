export {}
import {from} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('from', () => {
	it('test for from', async () => {
		const _returnValueILFwsm = true;
		const _returnValueHSay6UV = () => { return _returnValueILFwsm };
		const _isValidLdfX2Li = () => { return _returnValueHSay6UV };
		const _timeZVuDzI = {
			"isValid": _isValidLdfX2Li
	}
		const _withoutSuffixvYcWAV0 = null;
		const _returnValuemLaqd2z = await from(_timeZVuDzI, _withoutSuffixvYcWAV0)
	});
})