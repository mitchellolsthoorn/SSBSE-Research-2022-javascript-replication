export {}
import {isBetween} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isBetween', () => {
	it('test for isBetween', async () => {
		const _returnValueMUgx0fI = -1.656534017042235;
		const _returnValuecuUnbsM = () => { return _returnValueMUgx0fI };
		const _fromiehbFJT = () => { return _returnValuecuUnbsM };
		const _toP5mPPcH = false;
		const _arrayValueUziElKz = undefined;
		const _unitsU86JWiS = [_arrayValueUziElKz]
		const _inclusivityeePCURt = {
		
	}
		const _returnValuetDZYCVd = await isBetween(_fromiehbFJT, _toP5mPPcH, _unitsU86JWiS, _inclusivityeePCURt)
	});
})