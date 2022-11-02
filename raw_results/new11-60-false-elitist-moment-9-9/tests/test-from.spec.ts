export {}
import {from} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('from', () => {
	it('test for from', async () => {
		const _arrayValueZGefX1 = 5.718898755446201;
		const _arrayValueAOcDl8T = -7.534657000872961;
		const _arrayValuezxQR8EG = "BBiyPDq6ZQZCBEE4URq7hYBIELg824hl49bgSo26jQfGN1Nbzb59b31HfwhGAKbdL34TStEz34NXX0dwJyjJcG";
		const _arrayValueluSp5Rc = "D7VRFtwfMIWNJNmrSFvwHNV59Ce2TVNV5ac6HwSkPySS4rpon1QaO1iWzDhT5LAJmAs2yasLuyqRm0iXpeHGfe41GnGpHbKGo";
		const _returnValue2CznQM = [_arrayValuezxQR8EG, _arrayValueluSp5Rc]
		const _arrayValuedhg65FF = () => { return _returnValue2CznQM };
		const _arrayValue2mgDnG = null;
		const _arrayValuehdtgfZd = null;
		const _arrayValueW7BbQwL = 9.488054937579886;
		const _arrayValuefaz9OtA = [_arrayValuehdtgfZd, _arrayValueW7BbQwL]
		const _arrayValueFSHkqnI = [_arrayValuedhg65FF, _arrayValue2mgDnG, _arrayValuefaz9OtA]
		const _returnValueLNWtsgh = [_arrayValueZGefX1, _arrayValueAOcDl8T, _arrayValueFSHkqnI]
		const _isValidu1eqPjS = () => { return _returnValueLNWtsgh };
		const _timeB8EelSs = {
			"isValid": _isValidu1eqPjS
	}
		const _withoutSuffixYPAmAoD = null;
		const _returnValueX7MdkwV = await from(_timeB8EelSs, _withoutSuffixYPAmAoD)
	});
})