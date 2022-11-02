export {}
import {configFromRFC2822} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-string.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromRFC2822', () => {
	it('test for configFromRFC2822', async () => {
		const _inputOUODcfw = "iJ7CBzJITCc";
		const _formatDGgjQjH = {
		
	}
		const _localeVsWa3K = {
		
	}
		const _isUTCqb0aPcQ = true;
		const _strictpNUjqCW = "5nWfbgg6hZboFdZuhvDCZrahA0jPWaA34STh4JuX1t3b9j24zgkMvOldq5Y6hlHE2FZy6ULh1FD6Vh2hIw2M3LYHouoTnf6";
		const __iS0IrP1o = 9.85137146177641;
		const __ftTVeCaw = 2.3566434808308827;
		const __localeREtyxzE = null;
		const __isUTCrhN63kK = null;
		const __strictTBz7tl = false;
		const _configStvzSHs = {
			"input": _inputOUODcfw,
		"format": _formatDGgjQjH,
		"locale": _localeVsWa3K,
		"isUTC": _isUTCqb0aPcQ,
		"strict": _strictpNUjqCW,
		"_i": __iS0IrP1o,
		"_f": __ftTVeCaw,
		"_locale": __localeREtyxzE,
		"_isUTC": __isUTCrhN63kK,
		"_strict": __strictTBz7tl
	}
		const _returnValueL3SJ16 = await configFromRFC2822(_configStvzSHs)
	});

	it('test for configFromRFC2822', async () => {
		const _inputnvWDS6H = null;
		const _formatRVOilE6 = "AVmongDJCCxYmkXE";
		const _returnValuelliLtmj = undefined;
		const _localedpYhmZ = () => { return _returnValuelliLtmj };
		const _isUTCZzVaY3 = undefined;
		const _strictQKhcwKa = {
		
	}
		const __ivVsiKf = "jvOyDevzDQ9uvwSYhJUyBkKWVldGuxHTEr5xlOazIcvVmHSA8gI6KHMcHQ6g8OJCALK23DvSH5jpC3hpv";
		const __fcAMPVdT = true;
		const _returnValueohf9PZv = 4.514589697229752;
		const __localeVa0hXiY = () => { return _returnValueohf9PZv };
		const __isUTCjkPl0t = 0.9469251430094605;
		const __stricttu7lzUI = "RkBYyhvWo2KgAx9Q";
		const _configitNuDto = {
			"input": _inputnvWDS6H,
		"format": _formatRVOilE6,
		"locale": _localedpYhmZ,
		"isUTC": _isUTCZzVaY3,
		"strict": _strictQKhcwKa,
		"_i": __ivVsiKf,
		"_f": __fcAMPVdT,
		"_locale": __localeVa0hXiY,
		"_isUTC": __isUTCjkPl0t,
		"_strict": __stricttu7lzUI
	}
		const _returnValuezINx92F = await configFromRFC2822(_configitNuDto)
	});
})