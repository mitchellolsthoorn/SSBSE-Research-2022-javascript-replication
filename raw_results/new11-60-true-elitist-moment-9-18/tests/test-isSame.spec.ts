export {}
import {isSame} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSame', () => {
	it('test for isSame', async () => {
		const _arrayValueQjdoZX = -5.242972643847704;
		const _input2iXYI3 = [_arrayValueQjdoZX]
		const _unitsvEpumb8 = {
		
	}
		const _returnValueYetFfb2 = await isSame(_input2iXYI3, _unitsvEpumb8)
	});

	it('test for isSame', async () => {
		const _inputEEEwQ7C = null;
		const _unitshiTne22 = {
		
	}
		const _returnValueQ0paRWe = await isSame(_inputEEEwQ7C, _unitshiTne22)
	});
})