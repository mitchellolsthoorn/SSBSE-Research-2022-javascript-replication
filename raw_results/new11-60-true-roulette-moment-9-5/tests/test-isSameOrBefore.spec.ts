export {}
import {isSameOrBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrBefore', () => {
	it('test for isSameOrBefore', async () => {
		const _inputV4uVTO8 = "mHrO1ogSZ5WSeulF7tPEPFfnHxhzzBiVce";
		const _unitsPLevJ02 = {
		
	}
		const _returnValueYBwqNSK = await isSameOrBefore(_inputV4uVTO8, _unitsPLevJ02)
	});
})