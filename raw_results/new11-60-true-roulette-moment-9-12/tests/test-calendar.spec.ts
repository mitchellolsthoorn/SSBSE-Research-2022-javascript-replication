export {}
import {calendar} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/calendar.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('calendar', () => {
	it('test for calendar', async () => {
		const _arrayValueWIS2gqM = 7.933331266118351;
		const _arrayValuery1m2ln = -6.861157725096943;
		const _timeojudjsi = [_arrayValueWIS2gqM, _arrayValuery1m2ln]
		const _returnValueIN6sMDx = 5.728682641036764;
		const _formatsKkmKe4 = () => { return _returnValueIN6sMDx };
		const _returnValueZsAB0V = await calendar(_timeojudjsi, _formatsKkmKe4)
	});
})