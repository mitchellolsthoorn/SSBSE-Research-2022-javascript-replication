export {}
import {getCalendarFormat} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/calendar.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('getCalendarFormat', () => {
	it('test for getCalendarFormat', async () => {
		const _myMomentR1CE6jB = true;
		const _nowGtHF7OA = null;
		const _returnValueoUXrBS6 = await getCalendarFormat(_myMomentR1CE6jB, _nowGtHF7OA)
	});
})