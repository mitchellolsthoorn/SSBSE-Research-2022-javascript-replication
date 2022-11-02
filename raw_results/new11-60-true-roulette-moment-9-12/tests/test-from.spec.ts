export {}
import {from} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('from', () => {
	it('test for from', async () => {
		const _returnValueAkRLqy = 9.050428159613062;
		const _isValidyFXmJE = () => { return _returnValueAkRLqy };
		const _returnValuetF0NpAz = []
		const _cloneHaLME1r = () => { return _returnValuetF0NpAz };
		const _returnValueQrsVjB1 = undefined;
		const _toDateaYQfeDS = () => { return _returnValueQrsVjB1 };
		const _returnValueLH6r37 = {
		
	}
		const _valueOfWDrDrOB = () => { return _returnValueLH6r37 };
		const _utcOffsetOe663uT = "3C83uCj";
		const _timeF4QYN69 = {
			"isValid": _isValidyFXmJE,
		"clone": _cloneHaLME1r,
		"toDate": _toDateaYQfeDS,
		"valueOf": _valueOfWDrDrOB,
		"utcOffset": _utcOffsetOe663uT
	}
		const _withoutSuffixoIlgcSa = null;
		const _returnValuey0jGkK8 = await from(_timeF4QYN69, _withoutSuffixoIlgcSa)
	});
})