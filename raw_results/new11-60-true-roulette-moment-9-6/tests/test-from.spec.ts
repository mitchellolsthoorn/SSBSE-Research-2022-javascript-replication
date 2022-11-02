export {}
import {from} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('from', () => {
	it('test for from', async () => {
		const _returnValueMQTgeB1 = false;
		const _returnValueIhY2o9U = () => { return _returnValueMQTgeB1 };
		const _returnValuehswKYgO = () => { return _returnValueIhY2o9U };
		const _returnValueY7Ht79u = () => { return _returnValuehswKYgO };
		const _isValidWiPWCpo = () => { return _returnValueY7Ht79u };
		const _arrayValueJX6W2Ps = false;
		const _arrayValuek3MWmm3 = false;
		const _returnValueiIvqXCc = [_arrayValueJX6W2Ps, _arrayValuek3MWmm3]
		const _valueOflWQG0FI = () => { return _returnValueiIvqXCc };
		const _returnValuenDMKtq = undefined;
		const _clonePSjXZ6 = () => { return _returnValuenDMKtq };
		const _timeG7g5kUU = {
			"isValid": _isValidWiPWCpo,
		"valueOf": _valueOflWQG0FI,
		"clone": _clonePSjXZ6
	}
		const _withoutSuffixtf8bbsa = "iEBGPi8bINU2";
		const _returnValueeutZJf = await from(_timeG7g5kUU, _withoutSuffixtf8bbsa)
	});
})