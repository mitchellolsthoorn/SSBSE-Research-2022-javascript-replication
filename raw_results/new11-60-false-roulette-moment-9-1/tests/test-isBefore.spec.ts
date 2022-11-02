export {}
import {isBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isBefore', () => {
	it('test for isBefore', async () => {
		const _returnValueE9pmXJu = 4.132046640437736;
		const _arrayValueW9yw8xC = () => { return _returnValueE9pmXJu };
		const _inputLXXQBm1 = [_arrayValueW9yw8xC]
		const _unitsVXQHCkl = {
		
	}
		const _returnValueO51avr = await isBefore(_inputLXXQBm1, _unitsVXQHCkl)
	});

	it('test for isBefore', async () => {
		const _inputvmPASjM = null;
		const _unitserf95Z4 = {
		
	}
		const _returnValuej34thjC = await isBefore(_inputvmPASjM, _unitserf95Z4)
	});
})