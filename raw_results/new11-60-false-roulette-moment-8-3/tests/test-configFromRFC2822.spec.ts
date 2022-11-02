export {}
import {configFromRFC2822} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-string.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromRFC2822', () => {
	it('test for configFromRFC2822', async () => {
		const _returnValuemsqUk7J = {
		
	}
		const _utcOffsetW08tsBC = () => { return _returnValuemsqUk7J };
		const __tzmKAUGyn8 = {
		
	}
		const __iNhxlt2f = -1.5451066745657691;
		const _configZA3apfU = {
			"utcOffset": _utcOffsetW08tsBC,
		"_tzm": __tzmKAUGyn8,
		"_i": __iNhxlt2f
	}
		const _returnValuejhxEkSj = await configFromRFC2822(_configZA3apfU)
	});

	it('test for configFromRFC2822', async () => {
		const _inputzAjDASN = -1.3511371668208643;
		const _formatFn9rjH7 = {
		
	}
		const _localemGtLRRx = "H5hIZqkKaYyj9URpseqU0KHXaOi";
		const _isUTCx4VdfhI = undefined;
		const _strictLadaeVM = "lNcj9WqsDgu7VEqDmNs3xKOSXF1jGsbI3u2uA9mWiDUJksu2OZ2GPuQpHXRUkxYLqJeG65xcE2W0k3h1Qdk8KR7YAYdbM";
		const __iHIZRZ2w = "eqIaS3jrE";
		const __flcOXUBB = null;
		const __localeLDulyqG = 8.409120673549893;
		const __isUTCa3Ap5H = 1.4157368438406852;
		const __strictzKShILh = {
		
	}
		const _configUhZoxCj = {
			"input": _inputzAjDASN,
		"format": _formatFn9rjH7,
		"locale": _localemGtLRRx,
		"isUTC": _isUTCx4VdfhI,
		"strict": _strictLadaeVM,
		"_i": __iHIZRZ2w,
		"_f": __flcOXUBB,
		"_locale": __localeLDulyqG,
		"_isUTC": __isUTCa3Ap5H,
		"_strict": __strictzKShILh
	}
		const _returnValuec1VfvKX = await configFromRFC2822(_configUhZoxCj)
	});
})