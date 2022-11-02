export {}
import {isSameOrBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrBefore', () => {
	it('test for isSameOrBefore', async () => {
		const _inputYwyyQ0 = false;
		const _unitsXiYy1ZC = -5.159515717029492;
		const _returnValuezULJQY = await isSameOrBefore(_inputYwyyQ0, _unitsXiYy1ZC)
	});
})