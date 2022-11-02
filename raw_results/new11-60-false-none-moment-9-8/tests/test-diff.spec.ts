export {}
import {diff} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/diff.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('diff', () => {
	it('test for diff', async () => {
		const _inputWFR6OoO = 4.460448931539576;
		const _unitsxTGSvfM = false;
		const _asFloatxOfjLG = 4.626014005885912;
		const _returnValueUYKhpbv = await diff(_inputWFR6OoO, _unitsxTGSvfM, _asFloatxOfjLG)
	});
})