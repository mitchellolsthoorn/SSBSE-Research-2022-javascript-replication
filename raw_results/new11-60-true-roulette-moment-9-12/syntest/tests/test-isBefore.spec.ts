export {}
import {isBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isBefore', () => {
	it('test for isBefore', async () => {
		const _inputN0aD1Ia = undefined;
		const _unitsl6bHn1 = {
		
	}
		const _returnValueTescpky = await isBefore(_inputN0aD1Ia, _unitsl6bHn1)
	});

	it('test for isBefore', async () => {
		const _returnValueAGxTA08 = true;
		const _inputileEYjQ = () => { return _returnValueAGxTA08 };
		const _unitsulN9Xva = {
		
	}
		const _returnValueyGto4rH = await isBefore(_inputileEYjQ, _unitsulN9Xva)
	});
})