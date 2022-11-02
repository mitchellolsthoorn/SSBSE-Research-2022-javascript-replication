export {}
import {isSame} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSame', () => {
	it('test for isSame', async () => {
		const _arrayValueB3FtKt = undefined;
		const _inputyaLvYgD = [_arrayValueB3FtKt]
		const _unitscS8FJtA = 3.394074923510324;
		const _returnValueBIAoo1i = await isSame(_inputyaLvYgD, _unitscS8FJtA)
	});

	it('test for isSame', async () => {
		const _inputHxlFJT = 7.721232097341442;
		const _unitsqqrk2IY = {
		
	}
		const _returnValue4Ka2dT = await isSame(_inputHxlFJT, _unitsqqrk2IY)
	});
})