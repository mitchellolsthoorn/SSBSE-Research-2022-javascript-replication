export {}
import {get} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/get-set.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('get', () => {
	it('test for get', async () => {
		const _isValidFJKCwQm = -6.498209035939817;
		const _returnValueRf1bdmW = false;
		const _valueOfu3C8pRL = () => { return _returnValueRf1bdmW };
		const _returnValuehQ7OSO4 = "lCfk8tqjN";
		const _cloneHNmXUVW = () => { return _returnValuehQ7OSO4 };
		const _momcoV2EwB = {
			"isValid": _isValidFJKCwQm,
		"valueOf": _valueOfu3C8pRL,
		"clone": _cloneHNmXUVW
	}
		const _unitE68rXIj = "Vr1Vp1";
		const _returnValueLeFvgkK = await get(_momcoV2EwB, _unitE68rXIj)
	});
})