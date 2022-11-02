export {}
import {isSameOrBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrBefore', () => {
	it('test for isSameOrBefore', async () => {
		const _inputIhvaD1K = undefined;
		const _returnValueLgdZsm3 = null;
		const _arrayValueGArfZ4 = () => { return _returnValueLgdZsm3 };
		const _arrayValueparuhGF = null;
		const _unitsbiyiXiH = [_arrayValueGArfZ4, _arrayValueparuhGF]
		const _returnValueQWIQTDd = await isSameOrBefore(_inputIhvaD1K, _unitsbiyiXiH)
	});
})