export {}
import {diff} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/diff.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('diff', () => {
	it('test for diff', async () => {
		const _inputJufTxv = -5.890314486013934;
		const _unitscvag0X7 = 2.984458072876224;
		const _returnValueNYiE1cP = {
		
	}
		const _returnValueR7PIZJJ = () => { return _returnValueNYiE1cP };
		const _asFloatCcO2Bld = () => { return _returnValueR7PIZJJ };
		const _returnValuePceUaLg = await diff(_inputJufTxv, _unitscvag0X7, _asFloatCcO2Bld)
	});
})