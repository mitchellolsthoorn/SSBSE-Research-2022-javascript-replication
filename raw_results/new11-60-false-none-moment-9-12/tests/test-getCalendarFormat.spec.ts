export {}
import {getCalendarFormat} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/calendar.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('getCalendarFormat', () => {
	it('test for getCalendarFormat', async () => {
		const _myMomentnL692V3 = true;
		const _returnValueRhFEDtb = "PuWWaVwgpZuPpglvBynOG";
		const _nown6X5icf = () => { return _returnValueRhFEDtb };
		const _returnValueJUQXATy = await getCalendarFormat(_myMomentnL692V3, _nown6X5icf)
	});
})