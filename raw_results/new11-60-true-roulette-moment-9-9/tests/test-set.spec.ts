export {}
import {set} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/get-set.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('set', () => {
	it('test for set', async () => {
		const _arrayValueiB8xLN9 = -5.092654871561354;
		const _arrayValueMmBVuwJ = undefined;
		const _arrayValueGwyrZrw = [_arrayValueMmBVuwJ]
		const _returnValueN2SESP = [_arrayValueiB8xLN9, _arrayValueGwyrZrw]
		const _yearcj2660v = () => { return _returnValueN2SESP };
		const _momj9Gpquh = {
			"year": _yearcj2660v
	}
		const _unitvpalXVo = "CApAIfj4uvWHLh6p31uE3efTopdowBYDn23jHIoKdK5HhTfHlbuhqZhD5h";
		const _valuem7geo9g = {
		
	}
		const _returnValueh4ewo9s = await set(_momj9Gpquh, _unitvpalXVo, _valuem7geo9g)
	});

	it('test for set', async () => {
		const _returnValueTA3yV38 = false;
		const __isUTCRKvqLA6 = () => { return _returnValueTA3yV38 };
		const __dBNWmeB = {
		
	}
		const _returnValuewEWj52d = true;
		const _isValidYr2kNRN = () => { return _returnValuewEWj52d };
		const _localeDataNHd9yXn = undefined;
		const _returnValueSftVs97 = 5.7582787885178845;
		const _addSMB1O3o = () => { return _returnValueSftVs97 };
		const _momRNCNrU = {
			"_isUTC": __isUTCRKvqLA6,
		"_d": __dBNWmeB,
		"isValid": _isValidYr2kNRN,
		"localeData": _localeDataNHd9yXn,
		"add": _addSMB1O3o
	}
		const _unitRrS08cM = 3.262001814998543;
		const _value6eAxqN = -9.703415080304504;
		const _returnValueHlbpSFF = await set(_momRNCNrU, _unitRrS08cM, _value6eAxqN)
	});
})