export {}
import {isBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isBefore', () => {
	it('test for isBefore', async () => {
		const _arrayValueWMOw7xC = -6.802391134999411;
		const _arrayValuedMKOXSz = "tbbIB0Ak92fnczMLGQ3vM8OwhphuvXI3RvYmdCknaiJqiyTlPVot6XFK";
		const _arrayValueOCZQhkG = false;
		const _arrayValuejGVn59 = [_arrayValuedMKOXSz, _arrayValueOCZQhkG]
		const _arrayValuekNx3hl0 = [_arrayValueWMOw7xC, _arrayValuejGVn59]
		const _arrayValueSEeUdrl = null;
		const _arrayValuex2eJoaO = [_arrayValueSEeUdrl]
		const _arrayValueggNpaie = "RaRvbFpn3IPLuex5LPfHblFipIdhoyyQt62pswutq8fwP6Veq2XQsG8GqkuL78YRxEpTNJiObkQuUN66U";
		const _arrayValuekjq3t64 = [_arrayValuex2eJoaO, _arrayValueggNpaie]
		const _inputAwisAtz = [_arrayValuekNx3hl0, _arrayValuekjq3t64]
		const _unitsDz8OmJQ = {
		
	}
		const _returnValuei2reG8i = await isBefore(_inputAwisAtz, _unitsDz8OmJQ)
	});

	it('test for isBefore', async () => {
		const _inputE5Skfb = -6.7671445708136115;
		const _unitsRzELREH = {
		
	}
		const _returnValueDh01Ozr = await isBefore(_inputE5Skfb, _unitsRzELREH)
	});
})