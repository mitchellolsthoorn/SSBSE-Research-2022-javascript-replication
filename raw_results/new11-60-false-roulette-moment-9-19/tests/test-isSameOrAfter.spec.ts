export {}
import {isSameOrAfter} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrAfter', () => {
	it('test for isSameOrAfter', async () => {
		const _inputfX9IPwK = 9.965663430155153;
		const _arrayValuexGqmxin = null;
		const _arrayValueJqYbkU5 = null;
		const _arrayValuewzwo4Vl = {
		
	}
		const _arrayValueQ8kARiA = undefined;
		const _arrayValuef5oNouy = [_arrayValueJqYbkU5, _arrayValuewzwo4Vl, _arrayValueQ8kARiA]
		const _arrayValueKwNX1vA = []
		const _returnValuennen0Aa = [_arrayValuexGqmxin, _arrayValuef5oNouy, _arrayValueKwNX1vA]
		const _unitsdilv1Cl = () => { return _returnValuennen0Aa };
		const _returnValueCDIV6qW = await isSameOrAfter(_inputfX9IPwK, _unitsdilv1Cl)
	});
})