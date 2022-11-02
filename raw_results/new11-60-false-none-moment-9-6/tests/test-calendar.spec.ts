export {}
import {calendar} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/calendar.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('calendar', () => {
	it('test for calendar', async () => {
		const _arrayValuehtI1KdD = true;
		const _arrayValueQVwwdIl = "CQgutPdbxufFc6i7NhsIxT3z9lJJ8GIRqIXQQoCOuID51b7mpqGxNy4gxCPwnFRiNfzfPIr9q8QO1htpASljChcS";
		const _timeIkklXB4 = [_arrayValuehtI1KdD, _arrayValueQVwwdIl]
		const _formatsNcmDCUb = undefined;
		const _returnValuebMaYxa2 = await calendar(_timeIkklXB4, _formatsNcmDCUb)
	});
})