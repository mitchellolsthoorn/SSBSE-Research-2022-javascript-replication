export {}
import {configFromObject} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-object.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromObject', () => {
	it('test for configFromObject', async () => {
		const _arrayValueFZh3YVI = 1.2493117973653938;
		const _arrayValueVhEnN06 = null;
		const _arrayValueqNZeR4 = undefined;
		const _arrayValueMJbkTO = null;
		const _arrayValueh2EUzh9 = [_arrayValueVhEnN06, _arrayValueqNZeR4, _arrayValueMJbkTO]
		const _arrayValueQRkdsDx = true;
		const _inputPZVeiCD = [_arrayValueFZh3YVI, _arrayValueh2EUzh9, _arrayValueQRkdsDx]
		const _formatjZ5liOO = "aBGh9d";
		const _localePbwOYkd = false;
		const _isUTCVlDg3YD = "poBCTW9Kl9WbpnQiSfpz9ksl7zI1dulot";
		const _strictXO3Z2p = undefined;
		const _arrayValuenakirAt = null;
		const _arrayValuemKJRQOd = undefined;
		const __iWaxNJ7H = [_arrayValuenakirAt, _arrayValuemKJRQOd]
		const __fa3ufi10 = undefined;
		const __localeLLmLOeA = "BLbnVf9qvFfYALAjHmyJyTsu4W9G4d9od6CH0yLsYqKKAwowytoghlHfYdsHg7Oq3oRaVDOi2Dng60q7Qcxl8";
		const __isUTCfIcZeY4 = "T6xhLe6TIAfEw";
		const __strictxapfp2s = {
		
	}
		const _configCT5NUnt = {
			"input": _inputPZVeiCD,
		"format": _formatjZ5liOO,
		"locale": _localePbwOYkd,
		"isUTC": _isUTCVlDg3YD,
		"strict": _strictXO3Z2p,
		"_i": __iWaxNJ7H,
		"_f": __fa3ufi10,
		"_locale": __localeLLmLOeA,
		"_isUTC": __isUTCfIcZeY4,
		"_strict": __strictxapfp2s
	}
		const _returnValueDiDgPZ = await configFromObject(_configCT5NUnt)
	});
})