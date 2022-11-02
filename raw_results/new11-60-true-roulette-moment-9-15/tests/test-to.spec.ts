export {}
import {to} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/to.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('to', () => {
	it('test for to', async () => {
		const _returnValueuFAt8hT = null;
		const __isDSTShiftedhBoo8cq = () => { return _returnValueuFAt8hT };
		const _returnValueTkMQrMs = undefined;
		const _isValiddsI4N8W = () => { return _returnValueTkMQrMs };
		const _timeMscaZAg = {
			"_isDSTShifted": __isDSTShiftedhBoo8cq,
		"isValid": _isValiddsI4N8W
	}
		const _withoutSuffixWxJBxdA = -0.06061995170561829;
		const _returnValuemOzm8CC = await to(_timeMscaZAg, _withoutSuffixWxJBxdA)
	});
})