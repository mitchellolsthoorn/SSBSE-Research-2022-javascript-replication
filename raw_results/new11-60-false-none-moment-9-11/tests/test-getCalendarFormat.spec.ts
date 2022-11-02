export {}
import {getCalendarFormat} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/calendar.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('getCalendarFormat', () => {
	it('test for getCalendarFormat', async () => {
		const _myMomentDen14XT = -4.768576960307098;
		const _nowdL57gPX = null;
		const _returnValueJOxVuKu = await getCalendarFormat(_myMomentDen14XT, _nowdL57gPX)
	});
})