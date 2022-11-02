export {}
import {isSameOrBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrBefore', () => {
	it('test for isSameOrBefore', async () => {
		const _inputLMMveMK = "48Em1ffCSwVNjGKysTHoldMOatRu2hGyTdjhi2QwzwG6mimWCDyUhAw3AyC0xzH3P";
		const _unitsjDsds5D = "mHkRbYPdRiWm9X5iQ2LuJEzySiqCleQuUDR7bJhNCx2gE7t7QGyKbQCQMr1q8rMRPeaydsCBDO2AuP6ay4XDvvR2ydLcwxLG";
		const _returnValueQ8LUekd = await isSameOrBefore(_inputLMMveMK, _unitsjDsds5D)
	});
})