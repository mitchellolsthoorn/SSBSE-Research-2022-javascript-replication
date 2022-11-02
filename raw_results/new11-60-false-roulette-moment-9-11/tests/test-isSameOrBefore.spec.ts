export {}
import {isSameOrBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrBefore', () => {
	it('test for isSameOrBefore', async () => {
		const _returnValueT3KmJ9F = true;
		const _arrayValuednSeKNB = () => { return _returnValueT3KmJ9F };
		const _arrayValueEpC4G7B = undefined;
		const _arrayValueeYDfkom = null;
		const _inputWsKRbae = [_arrayValuednSeKNB, _arrayValueEpC4G7B, _arrayValueeYDfkom]
		const _unitsTdrSlXI = []
		const _returnValuexvav9TY = await isSameOrBefore(_inputWsKRbae, _unitsTdrSlXI)
	});
})