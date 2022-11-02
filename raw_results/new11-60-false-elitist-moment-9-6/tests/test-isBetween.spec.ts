export {}
import {isBetween} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isBetween', () => {
	it('test for isBetween', async () => {
		const _fromtTCrNqP = 0.2172539163254008;
		const _toRch1tRB = -4.765053930395203;
		const _unitsVmf0DO3 = false;
		const _returnValueKNofL4o = undefined;
		const _arrayValueVnU57w = () => { return _returnValueKNofL4o };
		const _arrayValueJPeIJ4i = undefined;
		const _arrayValueS6WihgI = [_arrayValueVnU57w, _arrayValueJPeIJ4i]
		const _arrayValuedkEuaGC = null;
		const _arrayValueD70wIF = "5VBsCJz1D0Id535WjkLrivFmB3pYWaKiAnL4bGohXqudEAipPhEQpdoVbL9GKeurbUF";
		const _inclusivityanec6Ss = [_arrayValueS6WihgI, _arrayValuedkEuaGC, _arrayValueD70wIF]
		const _returnValuebwbcJ21 = await isBetween(_fromtTCrNqP, _toRch1tRB, _unitsVmf0DO3, _inclusivityanec6Ss)
	});
})