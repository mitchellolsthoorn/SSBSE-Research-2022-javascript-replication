export {}
import {configFromObject} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-object.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromObject', () => {
	it('test for configFromObject', async () => {
		const __isUTCQ1tjr0 = false;
		const _arrayValueJpW6Mq = -1.3578039391297665;
		const __dYpsYG9l = [_arrayValueJpW6Mq]
		const _returnValueSqNGXdm = undefined;
		const _isValiddKNBEvb = () => { return _returnValueSqNGXdm };
		const _returnValueRGaRB0y = false;
		const _yearg8Y8JT = () => { return _returnValueRGaRB0y };
		const _returnValueB0GhCZO = false;
		const _returnValueGQSdG1N = () => { return _returnValueB0GhCZO };
		const _monthJkYH8RB = () => { return _returnValueGQSdG1N };
		const _returnValueztzv3pL = null;
		const _datejoG2WM = () => { return _returnValueztzv3pL };
		const _returnValuekBKIUcv = 0.40655019224249855;
		const _returnValuepKuxRLa = () => { return _returnValuekBKIUcv };
		const _weekdayqp5irY = () => { return _returnValuepKuxRLa };
		const _returnValue3qXVk4 = 3.2798025982053574;
		const _isoWeekdayRigU07F = () => { return _returnValue3qXVk4 };
		const _returnValueaYp1bj8 = {
		
	}
		const _utcOffsetp8ZzL1K = () => { return _returnValueaYp1bj8 };
		const _configUVpsmI7 = {
			"_isUTC": __isUTCQ1tjr0,
		"_d": __dYpsYG9l,
		"isValid": _isValiddKNBEvb,
		"year": _yearg8Y8JT,
		"month": _monthJkYH8RB,
		"date": _datejoG2WM,
		"weekday": _weekdayqp5irY,
		"isoWeekday": _isoWeekdayRigU07F,
		"utcOffset": _utcOffsetp8ZzL1K
	}
		const _returnValueAyaB3yl = await configFromObject(_configUVpsmI7)
	});

	it('test for configFromObject', async () => {
		const _utcOffsetkHQaX3g = null;
		const _returnValueubmt74d = null;
		const __tzmCzfdPM7 = () => { return _returnValueubmt74d };
		const __iV4b530S = true;
		const _configCtKd5l1 = {
			"utcOffset": _utcOffsetkHQaX3g,
		"_tzm": __tzmCzfdPM7,
		"_i": __iV4b530S
	}
		const _returnValueBReyaS = await configFromObject(_configCtKd5l1)
	});
})