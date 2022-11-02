export {}
import {isBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isBefore', () => {
	it('test for isBefore', async () => {
		const _arrayValueKwif7C = "RtelhoIw1KlKgwjiq9kGYsCI8ypjIPLeX9DSdVnroP";
		const _arrayValueGrFlVNB = -0.3952888170948672;
		const _arrayValueM2U7S7J = -7.277446712087057;
		const _returnValueQVYC1DG = [_arrayValueKwif7C, _arrayValueGrFlVNB, _arrayValueM2U7S7J]
		const _arrayValuekcpuuO = () => { return _returnValueQVYC1DG };
		const _arrayValueCOklkc = 7.111082060589403;
		const _arrayValueGUvhOh7 = [_arrayValueCOklkc]
		const _inputatZ6FD3 = [_arrayValuekcpuuO, _arrayValueGUvhOh7]
		const _unitsS1N0tX1 = {
		
	}
		const _returnValueJBeh3rs = await isBefore(_inputatZ6FD3, _unitsS1N0tX1)
	});

	it('test for isBefore', async () => {
		const _inputqVYHla1 = null;
		const _unitsWl1lcb = {
		
	}
		const _returnValueyu56Y5 = await isBefore(_inputqVYHla1, _unitsWl1lcb)
	});
})