export {}
import {isSameOrBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrBefore', () => {
	it('test for isSameOrBefore', async () => {
		const _inputiwsrl6t = "Mq7WDWDKCACzXzLsotJGK7RDX1koBHP6f44rrP4qk5LKBGr440j";
		const _returnValuecCevnbT = undefined;
		const _unitsh9jrdmj = () => { return _returnValuecCevnbT };
		const _returnValueVabVACm = await isSameOrBefore(_inputiwsrl6t, _unitsh9jrdmj)
	});
})