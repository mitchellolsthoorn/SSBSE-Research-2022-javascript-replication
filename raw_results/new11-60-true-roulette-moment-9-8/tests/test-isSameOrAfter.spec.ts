export {}
import {isSameOrAfter} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrAfter', () => {
	it('test for isSameOrAfter', async () => {
		const _inputmbQEJYh = []
		const _returnValueqWmj95y = null;
		const _returnValuedgupvuF = () => { return _returnValueqWmj95y };
		const _unitsqaYWrQ7 = () => { return _returnValuedgupvuF };
		const _returnValueRpOubPW = await isSameOrAfter(_inputmbQEJYh, _unitsqaYWrQ7)
	});
})