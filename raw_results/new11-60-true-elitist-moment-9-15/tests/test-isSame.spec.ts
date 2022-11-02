export {}
import {isSame} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSame', () => {
	it('test for isSame', async () => {
		const _inputWlEc9gk = undefined;
		const _unitsFJcv85v = {
		
	}
		const _returnValueqbX3WI9 = await isSame(_inputWlEc9gk, _unitsFJcv85v)
	});

	it('test for isSame', async () => {
		const _returnValueWDqEPZ4 = true;
		const _inputSmLJJS4 = () => { return _returnValueWDqEPZ4 };
		const _unitsu9QQ6KA = null;
		const _returnValueboRXfwI = await isSame(_inputSmLJJS4, _unitsu9QQ6KA)
	});
})