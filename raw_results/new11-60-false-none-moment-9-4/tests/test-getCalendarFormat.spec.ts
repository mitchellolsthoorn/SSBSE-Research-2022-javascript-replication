export {}
import {getCalendarFormat} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/calendar.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('getCalendarFormat', () => {
	it('test for getCalendarFormat', async () => {
		const _returnValueCDIOx42 = {
		
	}
		const _myMomentgOtz6ve = () => { return _returnValueCDIOx42 };
		const _nowRd941Wk = -2.8165538128135568;
		const _returnValueEfa8sVG = await getCalendarFormat(_myMomentgOtz6ve, _nowRd941Wk)
	});
})