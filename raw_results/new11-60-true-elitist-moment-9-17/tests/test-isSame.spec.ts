export {}
import {isSame} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSame', () => {
	it('test for isSame', async () => {
		const _arrayValueB6xf3I = undefined;
		const _arrayValueIesyMtH = undefined;
		const _arrayValueNqzM8e4 = null;
		const _arrayValueYNtYyoE = true;
		const _arrayValueljlFV7r = [_arrayValueB6xf3I, _arrayValueIesyMtH, _arrayValueNqzM8e4, _arrayValueYNtYyoE]
		const _arrayValueQpg0gDC = "TU20AcZ";
		const _returnValuelhKyJur = 5.372836409346501;
		const _arrayValueejct8bV = () => { return _returnValuelhKyJur };
		const _inputZYku6PT = [_arrayValueljlFV7r, _arrayValueQpg0gDC, _arrayValueejct8bV]
		const _unitspLdcaM2 = {
		
	}
		const _returnValuerU4ReVK = await isSame(_inputZYku6PT, _unitspLdcaM2)
	});

	it('test for isSame', async () => {
		const _inputsvLBem = null;
		const _unitsMrweQD1 = {
		
	}
		const _returnValuecLCtvS2 = await isSame(_inputsvLBem, _unitsMrweQD1)
	});
})