export {}
import {isSameOrBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrBefore', () => {
	it('test for isSameOrBefore', async () => {
		const _inputpQ459Qd = false;
		const _unitsbM05D4 = true;
		const _returnValueLilq2KB = await isSameOrBefore(_inputpQ459Qd, _unitsbM05D4)
	});
})