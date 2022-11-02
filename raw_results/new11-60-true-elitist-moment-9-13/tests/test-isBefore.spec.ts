export {}
import {isBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isBefore', () => {
	it('test for isBefore', async () => {
		const _returnValuePRxjPCa = false;
		const _inputQmJzzxU = () => { return _returnValuePRxjPCa };
		const _unitsFYXQjx = {
		
	}
		const _returnValuefoNANoN = await isBefore(_inputQmJzzxU, _unitsFYXQjx)
	});
})