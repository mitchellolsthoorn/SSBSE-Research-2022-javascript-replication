export {}
import {isValid} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/valid.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isValid', () => {
	it('test for isValid', async () => {
		const _inputchfL3V = true;
		const _returnValueNHGdOE5 = -4.868328493475924;
		const _formatasTEum = () => { return _returnValueNHGdOE5 };
		const _localeNrsC0XT = undefined;
		const _isUTCWpAARUD = undefined;
		const _arrayValueAUqBo3h = -7.66893199538728;
		const _arrayValueZMl6ZZQ = {
		
	}
		const _arrayValueFfqif1t = "rSYUExk5tgbBlPFfA1lugOPKsNnDEJAht32xIJPuSA2JWf3eFR";
		const _strictDSEW1HI = [_arrayValueAUqBo3h, _arrayValueZMl6ZZQ, _arrayValueFfqif1t]
		const __iA80ewHZ = null;
		const _returnValuemUoZmR = {
		
	}
		const __fsi8i8Ff = () => { return _returnValuemUoZmR };
		const __localeMuhymp2 = undefined;
		const _returnValuehrRDCZf = false;
		const __isUTCJHSIr8v = () => { return _returnValuehrRDCZf };
		const __strictRyn2F8e = {
		
	}
		const _mkHveHr = {
			"input": _inputchfL3V,
		"format": _formatasTEum,
		"locale": _localeNrsC0XT,
		"isUTC": _isUTCWpAARUD,
		"strict": _strictDSEW1HI,
		"_i": __iA80ewHZ,
		"_f": __fsi8i8Ff,
		"_locale": __localeMuhymp2,
		"_isUTC": __isUTCJHSIr8v,
		"_strict": __strictRyn2F8e
	}
		const _returnValueA91kgn5 = await isValid(_mkHveHr)
	});
})