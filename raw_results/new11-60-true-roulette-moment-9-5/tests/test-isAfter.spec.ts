export {}
import {isAfter} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isAfter', () => {
	it('test for isAfter', async () => {
		const _arrayValueYOnB6Dq = "IJlwP5i5QehChHl23uS2LHy6gLvN4o2wTDTk";
		const _arrayValueS0HkSW4 = "86PpU4ftVjLiTqHZBRyleTnYkBtvc4gToGmGKAJzo217K5POGCvTnTEX";
		const _arrayValueQIEGnFE = null;
		const _inputJwAHHE = [_arrayValueYOnB6Dq, _arrayValueS0HkSW4, _arrayValueQIEGnFE]
		const _unitsaqaIPjp = {
		
	}
		const _returnValueVi9QaR1 = await isAfter(_inputJwAHHE, _unitsaqaIPjp)
	});

	it('test for isAfter', async () => {
		const _inputi2yoVNy = true;
		const _unitstxZAuLX = {
		
	}
		const _returnValueo5zl6sm = await isAfter(_inputi2yoVNy, _unitstxZAuLX)
	});
})