export {}
import {isValid} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/valid.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isValid', () => {
	it('test for isValid', async () => {
		const _inputnGKcdly = "41nhFsS8a6G3XKfkAhkopng2fCS4e4";
		const _formatcuGPBac = true;
		const _localeUTuKSC0 = -6.048067382652026;
		const _isUTCkx0jNht = null;
		const _strictd53P05T = null;
		const __iiRTcbhp = undefined;
		const _returnValueUbFhnOD = -6.938525377431691;
		const __fUuPkzEL = () => { return _returnValueUbFhnOD };
		const __localev9EDg2 = 2.0342657261779014;
		const __isUTCQIuxSqv = false;
		const __strictDEXgG53 = -2.6932516007495746;
		const _mXOFuwmw = {
			"input": _inputnGKcdly,
		"format": _formatcuGPBac,
		"locale": _localeUTuKSC0,
		"isUTC": _isUTCkx0jNht,
		"strict": _strictd53P05T,
		"_i": __iiRTcbhp,
		"_f": __fUuPkzEL,
		"_locale": __localev9EDg2,
		"_isUTC": __isUTCQIuxSqv,
		"_strict": __strictDEXgG53
	}
		const _returnValueUQ6z5yU = await isValid(_mXOFuwmw)
	});
})