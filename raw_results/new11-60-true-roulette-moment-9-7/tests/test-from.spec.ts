export {}
import {from} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('from', () => {
	it('test for from', async () => {
		const _returnValueE4ed8jN = undefined;
		const _isValidmgeYG5j = () => { return _returnValueE4ed8jN };
		const _returnValueBOsVEum = undefined;
		const _localed1bEHOa = () => { return _returnValueBOsVEum };
		const _returnValuesQeC00f = true;
		const _localeDatayLcl3M = () => { return _returnValuesQeC00f };
		const _timeXim72UB = {
			"isValid": _isValidmgeYG5j,
		"locale": _localed1bEHOa,
		"localeData": _localeDatayLcl3M
	}
		const _withoutSuffixGTYYGQt = null;
		const _returnValueN48fbus = await from(_timeXim72UB, _withoutSuffixGTYYGQt)
	});
})