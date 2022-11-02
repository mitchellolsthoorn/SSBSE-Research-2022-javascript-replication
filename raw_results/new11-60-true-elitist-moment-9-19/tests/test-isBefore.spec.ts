export {}
import {isBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isBefore', () => {
	it('test for isBefore', async () => {
		const _inputCkc8I1 = "5vlu8OHOMYmSLRn7v1nmsQLERVxDxFbOT8igiIXDO8qFZitTAMEBhIY64A7LcUKGDJaoNl1KvOY772ZEIOpoctR";
		const _unitsAVsmka8 = {
		
	}
		const _returnValued3g5jMk = await isBefore(_inputCkc8I1, _unitsAVsmka8)
	});

	it('test for isBefore', async () => {
		const _inputXgObL4i = 6.514462298179559;
		const _unitsSag05pK = {
		
	}
		const _returnValuehqaISEd = await isBefore(_inputXgObL4i, _unitsSag05pK)
	});
})