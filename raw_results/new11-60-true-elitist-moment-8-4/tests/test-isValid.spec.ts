export {}
import {isValid} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/valid.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isValid', () => {
	it('test for isValid', async () => {
		const _arrayValuelBAcmM7 = "i3qh6Jo0N3MF7O4QL7J1FfnoH";
		const _inputN07fVH = [_arrayValuelBAcmM7]
		const _formatvHtfgNq = "28F3XcRdGqsy9KMpIYT";
		const _localeJqTMjFU = true;
		const _isUTCI4Slw63 = true;
		const _strictMzILM3v = "kAZsVsjnkW15XpUMQSyJ7aNbAgj6bFOl8oW0JSz5OyrDX";
		const __iWF3GONA = false;
		const __ftB65NYQ = null;
		const __localeUufDsoi = undefined;
		const __isUTCTR0ohce = "4gZTeardUEwxm28r7jzytehhMJxgF97pcwQEiyI6OQDBrwriWDf6suBU0YSQ31mYD4";
		const _arrayValues1Vy4Dz = undefined;
		const __strictfSA7o41 = [_arrayValues1Vy4Dz]
		const _mE37LNlX = {
			"input": _inputN07fVH,
		"format": _formatvHtfgNq,
		"locale": _localeJqTMjFU,
		"isUTC": _isUTCI4Slw63,
		"strict": _strictMzILM3v,
		"_i": __iWF3GONA,
		"_f": __ftB65NYQ,
		"_locale": __localeUufDsoi,
		"_isUTC": __isUTCTR0ohce,
		"_strict": __strictfSA7o41
	}
		const _returnValueSPiOuYW = await isValid(_mE37LNlX)
	});
})