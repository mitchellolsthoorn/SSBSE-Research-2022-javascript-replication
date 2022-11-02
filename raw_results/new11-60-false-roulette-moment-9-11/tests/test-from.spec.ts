export {}
import {from} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('from', () => {
	it('test for from', async () => {
		const _returnValuecYBtYwu = null;
		const _isValidnCWGogT = () => { return _returnValuecYBtYwu };
		const _returnValuei5LS1N = undefined;
		const _returnValueO4uYdr7 = () => { return _returnValuei5LS1N };
		const _localeDatahpBrDwD = () => { return _returnValueO4uYdr7 };
		const _timeLVfCbmP = {
			"isValid": _isValidnCWGogT,
		"localeData": _localeDatahpBrDwD
	}
		const _returnValueG3AbB2O = -5.862569060902546;
		const _arrayValueznpImwC = () => { return _returnValueG3AbB2O };
		const _withoutSuffixNwma0j = [_arrayValueznpImwC]
		const _returnValueAr2yQ5G = await from(_timeLVfCbmP, _withoutSuffixNwma0j)
	});
})