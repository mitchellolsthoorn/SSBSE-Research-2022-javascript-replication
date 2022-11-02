export {}
import {configFromObject} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-object.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromObject', () => {
	it('test for configFromObject', async () => {
		const _inputZUemFc = false;
		const _formatiydkXuL = false;
		const _localeebqsGk9 = 7.045856870401423;
		const _isUTCrrWf6u8 = undefined;
		const _strictFqzfhs8 = undefined;
		const __itsPwCws = 5.304719101963936;
		const __f30Z9V2 = -3.2420476234558073;
		const _arrayValueeC8q6FL = undefined;
		const _returnValueTT7oe1J = false;
		const _arrayValueqmXcqgO = () => { return _returnValueTT7oe1J };
		const _arrayValueyX0cxyy = {
		
	}
		const _arrayValuecasRqOp = -5.489481184538711;
		const __localeRFVLie = [_arrayValueeC8q6FL, _arrayValueqmXcqgO, _arrayValueyX0cxyy, _arrayValuecasRqOp]
		const __isUTCA1TImo = 3.9049005726296038;
		const __strictsjSqkA4 = -9.648677723556059;
		const _confige12HHIC = {
			"input": _inputZUemFc,
		"format": _formatiydkXuL,
		"locale": _localeebqsGk9,
		"isUTC": _isUTCrrWf6u8,
		"strict": _strictFqzfhs8,
		"_i": __itsPwCws,
		"_f": __f30Z9V2,
		"_locale": __localeRFVLie,
		"_isUTC": __isUTCA1TImo,
		"_strict": __strictsjSqkA4
	}
		const _returnValueegE6vo8 = await configFromObject(_confige12HHIC)
	});
})