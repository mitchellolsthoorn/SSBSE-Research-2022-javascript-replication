export {}
import {set} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/get-set.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('set', () => {
	it('test for set', async () => {
		const _arrayValueBYjdoVk = false;
		const _returnValueBnlp1ke = "PPm7tS7RnjQ5dxcmu";
		const _returnValue6KG1Qe = () => { return _returnValueBnlp1ke };
		const _arrayValuebXiNbwn = () => { return _returnValue6KG1Qe };
		const _returnValueb3etKkh = [_arrayValueBYjdoVk, _arrayValuebXiNbwn]
		const _localeDataFHjyZ6d = () => { return _returnValueb3etKkh };
		const _returnValuevEGVzJw = false;
		const _yearCHugzph = () => { return _returnValuevEGVzJw };
		const _mompejQWBM = {
			"localeData": _localeDataFHjyZ6d,
		"year": _yearCHugzph
	}
		const _unitnV0NIPC = -6.86291757691361;
		const _valuecnJuSDG = {
		
	}
		const _returnValueMS30XzZ = await set(_mompejQWBM, _unitnV0NIPC, _valuecnJuSDG)
	});

	it('test for set', async () => {
		const __dGCfZ769 = {
		
	}
		const _arrayValueTzljdBz = null;
		const _returnValueV1mLjm = [_arrayValueTzljdBz]
		const _isValidFp5DA86 = () => { return _returnValueV1mLjm };
		const _momMwrP8dm = {
			"_d": __dGCfZ769,
		"isValid": _isValidFp5DA86
	}
		const _unitHyCTc1k = "bPRyJEXdPN";
		const _valueeenW479 = null;
		const _returnValuezyl5ijV = await set(_momMwrP8dm, _unitHyCTc1k, _valueeenW479)
	});
})