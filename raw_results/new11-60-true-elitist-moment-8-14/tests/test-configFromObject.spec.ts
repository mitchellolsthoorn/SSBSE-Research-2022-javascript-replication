export {}
import {configFromObject} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-object.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromObject', () => {
	it('test for configFromObject', async () => {
		const _input1HYWGT = 4.757296965889548;
		const _formatLWRpspk = undefined;
		const _localeH5H3iMF = null;
		const _isUTCtvzsNJJ = -5.145231579435799;
		const _strictQ1AoZLU = -4.0441582257979505;
		const _arrayValueNtuCB6l = null;
		const __isDUGMos = [_arrayValueNtuCB6l]
		const __fElBFRJm = true;
		const __localeb3Kp0St = undefined;
		const __isUTCjdB4xos = "POeoe";
		const __strictOx3Altx = 8.702393596024372;
		const _configEhYpopa = {
			"input": _input1HYWGT,
		"format": _formatLWRpspk,
		"locale": _localeH5H3iMF,
		"isUTC": _isUTCtvzsNJJ,
		"strict": _strictQ1AoZLU,
		"_i": __isDUGMos,
		"_f": __fElBFRJm,
		"_locale": __localeb3Kp0St,
		"_isUTC": __isUTCjdB4xos,
		"_strict": __strictOx3Altx
	}
		const _returnValuevREdwri = await configFromObject(_configEhYpopa)
	});
})