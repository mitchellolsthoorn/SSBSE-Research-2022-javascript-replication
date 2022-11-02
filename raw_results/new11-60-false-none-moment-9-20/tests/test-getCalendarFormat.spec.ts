export {}
import {getCalendarFormat} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/calendar.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('getCalendarFormat', () => {
	it('test for getCalendarFormat', async () => {
		const _returnValueyJfrPro = false;
		const _myMomentGUs1baK = () => { return _returnValueyJfrPro };
		const _nowpAZISR = -2.4003043257655845;
		const _returnValueddwMAL = await getCalendarFormat(_myMomentGUs1baK, _nowpAZISR)
	});
})