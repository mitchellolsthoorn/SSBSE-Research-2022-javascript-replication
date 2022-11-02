export {}
import {calendar} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/calendar.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('calendar', () => {
	it('test for calendar', async () => {
		const _timeZUmt44h = true;
		const _formatsoRNzJzG = undefined;
		const _returnValuegBggZhl = await calendar(_timeZUmt44h, _formatsoRNzJzG)
	});
})