export {}
import {isSame} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSame', () => {
	it('test for isSame', async () => {
		const _returnValueJKRKpO = null;
		const _inputUxDSyg = () => { return _returnValueJKRKpO };
		const _arrayValueRtWO1Km = []
		const _arrayValuepWgYoO7 = undefined;
		const _arrayValuekg2iTph = "svAlYEGUGkdoXQmXz2Qu6e";
		const _arrayValue70I9QQ = null;
		const _arrayValuej3Gcj6P = [_arrayValuekg2iTph, _arrayValue70I9QQ]
		const _unitsGuvrc44 = [_arrayValueRtWO1Km, _arrayValuepWgYoO7, _arrayValuej3Gcj6P]
		const _returnValuek1RpT1s = await isSame(_inputUxDSyg, _unitsGuvrc44)
	});
})