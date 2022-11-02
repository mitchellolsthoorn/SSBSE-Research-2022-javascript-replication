export {}
import {configFromObject} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-object.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromObject', () => {
	it('test for configFromObject', async () => {
		const _inputF4269J = undefined;
		const _formatKGzdjD4 = null;
		const _localeJKyU3Ew = null;
		const _arrayValueuuknHCc = true;
		const _arrayValue34h4xT = 2.2083592546677373;
		const _arrayValueiolfbQc = "uPPnTNhHhKcmaaanI83Y35Tjsq4C7JuzUNrruyA4xogfQEBwlSUtvAsHFFjJ7G6rfOFa9uxIiTn8eC42oyrqh";
		const _isUTCp3IMuAi = [_arrayValueuuknHCc, _arrayValue34h4xT, _arrayValueiolfbQc]
		const _returnValuefG0Q4km = 2.289612764161264;
		const _arrayValuerOJOckW = () => { return _returnValuefG0Q4km };
		const _strictjqGdKt5 = [_arrayValuerOJOckW]
		const __icp5M6UK = "M3ydTX4ugaviJCKcj9jmv2UbmE68MqPS";
		const __fUy0QzyD = "U9LnxfYYBZ";
		const __localem3v9LED = undefined;
		const _arrayValueVBw4a6a = null;
		const _arrayValueeh036kL = {
		
	}
		const _arrayValueHUW3U7E = false;
		const _arrayValuefUE0Uhy = 6.707585485837786;
		const __isUTCRtn2wjw = [_arrayValueVBw4a6a, _arrayValueeh036kL, _arrayValueHUW3U7E, _arrayValuefUE0Uhy]
		const __strictJ5sizcP = null;
		const _configbl67Fvq = {
			"input": _inputF4269J,
		"format": _formatKGzdjD4,
		"locale": _localeJKyU3Ew,
		"isUTC": _isUTCp3IMuAi,
		"strict": _strictjqGdKt5,
		"_i": __icp5M6UK,
		"_f": __fUy0QzyD,
		"_locale": __localem3v9LED,
		"_isUTC": __isUTCRtn2wjw,
		"_strict": __strictJ5sizcP
	}
		const _returnValuem1ATJMS = await configFromObject(_configbl67Fvq)
	});
})