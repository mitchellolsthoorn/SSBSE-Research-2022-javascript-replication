export {}
import {configFromObject} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-object.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromObject', () => {
	it('test for configFromObject', async () => {
		const _inputJ6BO5wm = null;
		const _formatfqoqCEF = "y1tGvF9Aiks7JwGIEXqQqQPWm9NPfWIEdu9xsNyTGin2yAbGFqhQ";
		const _localepcUO5HP = true;
		const _isUTCmovbuFQ = -8.598222726864295;
		const _strictAxPtJ5n = undefined;
		const __iwGmvm9 = {
		
	}
		const __fwsYI1gS = undefined;
		const __localeywLhy47 = null;
		const __isUTCJl3dJA = 6.701181829561648;
		const __strictIzA8VlA = null;
		const _configANp9XDn = {
			"input": _inputJ6BO5wm,
		"format": _formatfqoqCEF,
		"locale": _localepcUO5HP,
		"isUTC": _isUTCmovbuFQ,
		"strict": _strictAxPtJ5n,
		"_i": __iwGmvm9,
		"_f": __fwsYI1gS,
		"_locale": __localeywLhy47,
		"_isUTC": __isUTCJl3dJA,
		"_strict": __strictIzA8VlA
	}
		const _returnValueMAZpTt1 = await configFromObject(_configANp9XDn)
	});
})