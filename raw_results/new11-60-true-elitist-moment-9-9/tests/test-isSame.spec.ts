export {}
import {isSame} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSame', () => {
	it('test for isSame', async () => {
		const _arrayValueStFGdFl = null;
		const _arrayValueMnr2fbB = {
		
	}
		const _returnValuetaQ8my1 = 3.9765340162212013;
		const _arrayValueOjuOO2z = () => { return _returnValuetaQ8my1 };
		const _arrayValuefugQRSG = -6.709255026426925;
		const _arrayValuefaEKzNy = [_arrayValueStFGdFl, _arrayValueMnr2fbB, _arrayValueOjuOO2z, _arrayValuefugQRSG]
		const _inputKCeQ1kt = [_arrayValuefaEKzNy]
		const _unitsoNUbjJA = {
		
	}
		const _returnValueM0iDpKn = await isSame(_inputKCeQ1kt, _unitsoNUbjJA)
	});

	it('test for isSame', async () => {
		const _inputzxaluDe = null;
		const _unitsusi0VlY = {
		
	}
		const _returnValueuN706RE = await isSame(_inputzxaluDe, _unitsusi0VlY)
	});
})