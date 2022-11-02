export {}
import {isSame} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSame', () => {
	it('test for isSame', async () => {
		const _arrayValueBNhECap = null;
		const _returnValuequVOc0 = [_arrayValueBNhECap]
		const _inputEqUe57i = () => { return _returnValuequVOc0 };
		const _unitss89FFgb = {
		
	}
		const _returnValueHI50TKo = await isSame(_inputEqUe57i, _unitss89FFgb)
	});
})