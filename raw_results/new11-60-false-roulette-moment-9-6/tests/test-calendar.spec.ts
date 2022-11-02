export {}
import {calendar} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/calendar.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('calendar', () => {
	it('test for calendar', async () => {
		const _timeWGqxk77 = undefined;
		const _arrayValueWLFJQV = "CNLxNwyfpKvNZVg1GBC2DjuWtSMS8vpiCYnhokQLpWfbI";
		const _arrayValueVyyKX4R = [_arrayValueWLFJQV]
		const _arrayValuewUYp1kJ = "eGbaVOdUXtvfSnO0kUd2Ptypkb8pGPKlOB32mFFrtQqfxXTd1bk1VihbHOzmnSxzW6215txyiPTnDUjwAyyHgkVMYSJ9Uq47";
		const _returnValueJPbgnL6 = [_arrayValueVyyKX4R, _arrayValuewUYp1kJ]
		const _formatsO7DlN3 = () => { return _returnValueJPbgnL6 };
		const _returnValueNx48s5f = await calendar(_timeWGqxk77, _formatsO7DlN3)
	});
})