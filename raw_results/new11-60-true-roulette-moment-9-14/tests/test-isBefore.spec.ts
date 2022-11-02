export {}
import {isBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isBefore', () => {
	it('test for isBefore', async () => {
		const _arrayValueDaWltUQ = null;
		const _inputcnmDSHg = [_arrayValueDaWltUQ]
		const _unitsvZrhfmt = {
		
	}
		const _returnValuehokpHvI = await isBefore(_inputcnmDSHg, _unitsvZrhfmt)
	});

	it('test for isBefore', async () => {
		const _returnValueddF5c2m = true;
		const _inputzh36Oet = () => { return _returnValueddF5c2m };
		const _unitszIszSIl = {
		
	}
		const _returnValueBYs0Zxa = await isBefore(_inputzh36Oet, _unitszIszSIl)
	});
})