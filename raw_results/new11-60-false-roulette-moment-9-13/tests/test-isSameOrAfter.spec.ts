export {}
import {isSameOrAfter} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrAfter', () => {
	it('test for isSameOrAfter', async () => {
		const _inputc9AbNq = 5.802022965173137;
		const _unitskfvENIj = "oWGn4Tgd";
		const _returnValuecQt8f3V = await isSameOrAfter(_inputc9AbNq, _unitskfvENIj)
	});
})