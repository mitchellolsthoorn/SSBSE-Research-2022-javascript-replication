export {}
import {isSame} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSame', () => {
	it('test for isSame', async () => {
		const _returnValueMYp5XYH = undefined;
		const _inputcTxCl9R = () => { return _returnValueMYp5XYH };
		const _unitsmGRlL08 = {
		
	}
		const _returnValueDfv8d4A = await isSame(_inputcTxCl9R, _unitsmGRlL08)
	});
})