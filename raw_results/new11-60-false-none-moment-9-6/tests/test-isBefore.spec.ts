export {}
import {isBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isBefore', () => {
	it('test for isBefore', async () => {
		const _arrayValuehJZofVq = undefined;
		const _arrayValuemwR6vEq = null;
		const _returnValuejQEZlHJ = [_arrayValuehJZofVq, _arrayValuemwR6vEq]
		const _inputA0Ivazt = () => { return _returnValuejQEZlHJ };
		const _unitssb6ezTv = "8I8HA2sSvOoDY4mJxO28VjvK9St8aUyjfz";
		const _returnValuehuddjl6 = await isBefore(_inputA0Ivazt, _unitssb6ezTv)
	});
})