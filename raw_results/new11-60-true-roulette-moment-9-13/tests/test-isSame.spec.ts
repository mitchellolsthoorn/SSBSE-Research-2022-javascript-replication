export {}
import {isSame} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSame', () => {
	it('test for isSame', async () => {
		const _arrayValuevbecLaF = false;
		const _arrayValueezM09Nx = -4.235123676252695;
		const _arrayValuefXicYHz = false;
		const _inputctPO7I6 = [_arrayValuevbecLaF, _arrayValueezM09Nx, _arrayValuefXicYHz]
		const _unitsJM3a2Jq = "jxhtvUiPTau";
		const _returnValueHwxmid = await isSame(_inputctPO7I6, _unitsJM3a2Jq)
	});

	it('test for isSame', async () => {
		const _inputfYxtTv = null;
		const _unitsSbLToIr = "Jv6Cag5jVMyPV8KB8NOzUGEMzLJ388NJphbQmjWUEdnR6TFCmt";
		const _returnValueN9TYAy2 = await isSame(_inputfYxtTv, _unitsSbLToIr)
	});
})