export {}
import {isBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isBefore', () => {
	it('test for isBefore', async () => {
		const _arrayValuewVo5xvS = {
		
	}
		const _arrayValuejtd0uli = undefined;
		const _arrayValueWoSzci2 = [_arrayValuejtd0uli]
		const _arrayValueVES6ZTn = 0.19099060400319168;
		const _inputKKkkoMK = [_arrayValuewVo5xvS, _arrayValueWoSzci2, _arrayValueVES6ZTn]
		const _unitszG53Pya = {
		
	}
		const _returnValueYhsTuSh = await isBefore(_inputKKkkoMK, _unitszG53Pya)
	});

	it('test for isBefore', async () => {
		const _inputkNt1sGJ = false;
		const _unitsupuqXke = {
		
	}
		const _returnValueuMwuOPZ = await isBefore(_inputkNt1sGJ, _unitsupuqXke)
	});
})