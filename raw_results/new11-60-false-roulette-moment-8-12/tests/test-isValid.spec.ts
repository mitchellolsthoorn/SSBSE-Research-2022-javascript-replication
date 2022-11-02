export {}
import {isValid} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/valid.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isValid', () => {
	it('test for isValid', async () => {
		const _inputRB6QF9S = true;
		const _formatfzyDmSs = "3pOhhrC3Ss";
		const _localeim45sdd = 8.189210646890778;
		const _isUTC5uTyIb = null;
		const _strictXniEN1H = []
		const _arrayValueueIELU = null;
		const _arrayValuercBEXm5 = null;
		const _arrayValueyvDEVkg = undefined;
		const _returnValueNgH0Bf5 = [_arrayValueueIELU, _arrayValuercBEXm5, _arrayValueyvDEVkg]
		const __iU9l9uEs = () => { return _returnValueNgH0Bf5 };
		const __fYZFR5pl = undefined;
		const __localelaxuBZL = null;
		const __isUTCpiGs8FR = {
		
	}
		const __strictVfBdrI4 = null;
		const _mO4NaDLa = {
			"input": _inputRB6QF9S,
		"format": _formatfzyDmSs,
		"locale": _localeim45sdd,
		"isUTC": _isUTC5uTyIb,
		"strict": _strictXniEN1H,
		"_i": __iU9l9uEs,
		"_f": __fYZFR5pl,
		"_locale": __localelaxuBZL,
		"_isUTC": __isUTCpiGs8FR,
		"_strict": __strictVfBdrI4
	}
		const _returnValuelvyqXx = await isValid(_mO4NaDLa)
	});
})