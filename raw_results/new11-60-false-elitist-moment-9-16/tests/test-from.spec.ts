export {}
import {from} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('from', () => {
	it('test for from', async () => {
		const _returnValueQyVbSys = undefined;
		const _isValide07FFe0 = () => { return _returnValueQyVbSys };
		const _timefNhdOK = {
			"isValid": _isValide07FFe0
	}
		const _returnValueo5IdQ9r = "MccrPYbqSPLwD23qkkF3JYV51VQFXPED2MqQCR6JItA2eGmItk9FIUAod";
		const _withoutSuffixUpWsC1e = () => { return _returnValueo5IdQ9r };
		const _returnValueUH4jnSq = await from(_timefNhdOK, _withoutSuffixUpWsC1e)
	});
})