export {}
import {diff} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/diff.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('diff', () => {
	it('test for diff', async () => {
		const _inputSn0OXc1 = "yzDT7pAQCWnpPDHsin9C";
		const _arrayValueCoEwOtL = -5.442115069478462;
		const _returnValueJpZnNpk = undefined;
		const _arrayValuedWGtS5 = () => { return _returnValueJpZnNpk };
		const _returnValueORhSFjv = {
		
	}
		const _arrayValueQm9mTj = () => { return _returnValueORhSFjv };
		const _unitsd471IOZ = [_arrayValueCoEwOtL, _arrayValuedWGtS5, _arrayValueQm9mTj]
		const _asFloatgDP7tcV = "0AHHrLAxVEK9BRsGaUDhJbtlTWRK9KyOBiN5WEba8KTfTbFFOam65MFLJRm2riUWTqt";
		const _returnValueu4bUvOF = await diff(_inputSn0OXc1, _unitsd471IOZ, _asFloatgDP7tcV)
	});
})