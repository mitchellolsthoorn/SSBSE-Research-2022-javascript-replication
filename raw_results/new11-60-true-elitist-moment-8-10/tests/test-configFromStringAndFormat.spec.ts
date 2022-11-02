export {}
import {configFromStringAndFormat} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-string-and-format.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromStringAndFormat', () => {
	it('test for configFromStringAndFormat', async () => {
		const _inputxjO6CHx = 1.73119190653318;
		const _format2RjRdM = 0.4491508981997292;
		const _localepnrrht = undefined;
		const _isUTCiU2nUIh = {
		
	}
		const _strictYcsURgo = {
		
	}
		const __imDpuYOH = 7.920046468759519;
		const __fHqREgFi = null;
		const __localetK0P2qA = {
		
	}
		const __isUTCsLqJT6w = -9.282455408980011;
		const __strictfWcDAHi = {
		
	}
		const _configUlSEvm = {
			"input": _inputxjO6CHx,
		"format": _format2RjRdM,
		"locale": _localepnrrht,
		"isUTC": _isUTCiU2nUIh,
		"strict": _strictYcsURgo,
		"_i": __imDpuYOH,
		"_f": __fHqREgFi,
		"_locale": __localetK0P2qA,
		"_isUTC": __isUTCsLqJT6w,
		"_strict": __strictfWcDAHi
	}
		const _returnValueGt8rISX = await configFromStringAndFormat(_configUlSEvm)
	});

	it('test for configFromStringAndFormat', async () => {
		const _inputkcRxyS3 = null;
		const _formatFhEiKE9 = -5.005790566057538;
		const _localeVcPg9eN = undefined;
		const _isUTCuBaaQFT = undefined;
		const _strictchcpH5M = false;
		const __iZ4wnd8R = -7.272065328612889;
		const __fNIbVHEZ = "sDK2aYtbBkosPacBNff7SbRCkAswUh";
		const __localegAfS0kH = {
		
	}
		const __isUTChlBWjO = undefined;
		const __strictLjMVKOP = "Ngq9DR1q6SlmWtYxfad7kqhd8TOazsUEDAAwM6QNNDYqOXlbEfOegKwi4Tus";
		const _configgsY1pu = {
			"input": _inputkcRxyS3,
		"format": _formatFhEiKE9,
		"locale": _localeVcPg9eN,
		"isUTC": _isUTCuBaaQFT,
		"strict": _strictchcpH5M,
		"_i": __iZ4wnd8R,
		"_f": __fNIbVHEZ,
		"_locale": __localegAfS0kH,
		"_isUTC": __isUTChlBWjO,
		"_strict": __strictLjMVKOP
	}
		const _returnValueHeNYQDP = await configFromStringAndFormat(_configgsY1pu)
	});
})