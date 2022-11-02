export {}
import {calendar} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/calendar.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('calendar', () => {
	it('test for calendar', async () => {
		const _timezbmJsSG = 2.4433496593999706;
		const _formatsNoE0G9P = undefined;
		const _returnValueRIega0I = await calendar(_timezbmJsSG, _formatsNoE0G9P)
	});
})