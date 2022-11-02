export {}
import {to} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/to.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('to', () => {
	it('test for to', async () => {
		const _arrayValuedEbFoIX = -5.3571242610721335;
		const _returnValueyxVwfCL = undefined;
		const _arrayValueVpwv3Yf = () => { return _returnValueyxVwfCL };
		const _returnValuewJEOHyX = [_arrayValuedEbFoIX, _arrayValueVpwv3Yf]
		const _isValidb7LuRed = () => { return _returnValuewJEOHyX };
		const _timeN8tJs8f = {
			"isValid": _isValidb7LuRed
	}
		const _arrayValueLBc2lqt = -6.9375572823890215;
		const _withoutSuffixffEiDEt = [_arrayValueLBc2lqt]
		const _returnValueOGhMNfH = await to(_timeN8tJs8f, _withoutSuffixffEiDEt)
	});
})