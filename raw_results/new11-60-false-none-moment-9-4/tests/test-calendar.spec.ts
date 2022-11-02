export {}
import {calendar} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/calendar.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('calendar', () => {
	it('test for calendar', async () => {
		const _timezHOq3zK = "5VgB7ue1ht7r5wMCcCKsMeAkJwu9htHa0d9PO0xyw";
		const _arrayValuelZZGfDF = false;
		const _arrayValueaOdSpja = 7.790872825789293;
		const _arrayValuesYeKBgs = undefined;
		const _arrayValueBbcvOe8 = [_arrayValuelZZGfDF, _arrayValueaOdSpja, _arrayValuesYeKBgs]
		const _arrayValuebVZjvaG = false;
		const _returnValueJxKw5nk = {
		
	}
		const _arrayValuebuOe1kV = () => { return _returnValueJxKw5nk };
		const _formatsXDPwQ7f = [_arrayValueBbcvOe8, _arrayValuebVZjvaG, _arrayValuebuOe1kV]
		const _returnValueLqypITy = await calendar(_timezHOq3zK, _formatsXDPwQ7f)
	});
})