export {}
import {isSameOrBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrBefore', () => {
	it('test for isSameOrBefore', async () => {
		const _arrayValueyUN6NmT = true;
		const _arrayValuebE9eGst = null;
		const _inputROSabXs = [_arrayValueyUN6NmT, _arrayValuebE9eGst]
		const _arrayValuec345kF4 = {
		
	}
		const _arrayValueQD4MgD5 = undefined;
		const _arrayValueyy9CI0J = 8.125389157721987;
		const _arrayValuegcH8H5 = true;
		const _arrayValueERdLBM3 = [_arrayValueQD4MgD5, _arrayValueyy9CI0J, _arrayValuegcH8H5]
		const _arrayValueb8uX3et = 1.7933570299971926;
		const _unitstXQnVya = [_arrayValuec345kF4, _arrayValueERdLBM3, _arrayValueb8uX3et]
		const _returnValueik03bv8 = await isSameOrBefore(_inputROSabXs, _unitstXQnVya)
	});
})