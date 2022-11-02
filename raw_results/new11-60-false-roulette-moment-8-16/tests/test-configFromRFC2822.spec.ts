export {}
import {configFromRFC2822} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-string.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromRFC2822', () => {
	it('test for configFromRFC2822', async () => {
		const _arrayValueCkvn9EU = null;
		const _returnValueTT5Ls5m = [_arrayValueCkvn9EU]
		const _configqoVVc9k = () => { return _returnValueTT5Ls5m };
		const _returnValueUBWZfta = await configFromRFC2822(_configqoVVc9k)
	});

	it('test for configFromRFC2822', async () => {
		const __ik3Soz8l = "wAkPfKgvZHtNsupcECnun30hMksbyxOm1cZe2MemqWtI1Eenq3";
		const _arrayValueGde595G = "HBj5l2qWoxRWTLB5iCXRG4EA436hkuu5Y1QJmeNxgrynUyi6WrVRoJc";
		const _returnValueIuh4i5y = [_arrayValueGde595G]
		const _isValidHkeXwSs = () => { return _returnValueIuh4i5y };
		const _returnValueXQzxjH5 = 9.35897746300807;
		const _isLocalsvPcerj = () => { return _returnValueXQzxjH5 };
		const _returnValuecPvF4ae = null;
		const _utcOffsetq3pOwUD = () => { return _returnValuecPvF4ae };
		const _returnValueQ4Jol5N = false;
		const _year0vF6vr = () => { return _returnValueQ4Jol5N };
		const _returnValueKh2NV1h = null;
		const _formatNP7uWjg = () => { return _returnValueKh2NV1h };
		const _confige250HHb = {
			"_i": __ik3Soz8l,
		"isValid": _isValidHkeXwSs,
		"isLocal": _isLocalsvPcerj,
		"utcOffset": _utcOffsetq3pOwUD,
		"year": _year0vF6vr,
		"format": _formatNP7uWjg
	}
		const _returnValueyyGgnu = await configFromRFC2822(_confige250HHb)
	});
})