export {}
import {isSameOrBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrBefore', () => {
	it('test for isSameOrBefore', async () => {
		const _inputHMb5amf = null;
		const _arrayValuec4WFYWc = true;
		const _arrayValuee7LA2Qg = [_arrayValuec4WFYWc]
		const _arrayValueCK8jFb = null;
		const _unitsnb9mEfH = [_arrayValuee7LA2Qg, _arrayValueCK8jFb]
		const _returnValuev2h2Wn = await isSameOrBefore(_inputHMb5amf, _unitsnb9mEfH)
	});
})