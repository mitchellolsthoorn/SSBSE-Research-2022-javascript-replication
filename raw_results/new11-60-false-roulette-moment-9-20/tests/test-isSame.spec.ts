export {}
import {isSame} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSame', () => {
	it('test for isSame', async () => {
		const _arrayValuei4NvmBe = undefined;
		const _arrayValuekM8UjSL = undefined;
		const _arrayValueta4qE0K = null;
		const _arrayValueWZz4WWp = "";
		const _inputQe9ZJTZ = [_arrayValuei4NvmBe, _arrayValuekM8UjSL, _arrayValueta4qE0K, _arrayValueWZz4WWp]
		const _unitsa7hxkah = "I7oi3Tc6C16ON";
		const _returnValueKNPQtj9 = await isSame(_inputQe9ZJTZ, _unitsa7hxkah)
	});

	it('test for isSame', async () => {
		const _inputyPnMPQl = true;
		const _unitsPvUeBJ = {
		
	}
		const _returnValueNkhlft = await isSame(_inputyPnMPQl, _unitsPvUeBJ)
	});
})