export {}
import {getCalendarFormat} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/calendar.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('getCalendarFormat', () => {
	it('test for getCalendarFormat', async () => {
		const _myMomentUWXAQd = null;
		const _arrayValueGU7EoE7 = true;
		const _arrayValueUxg2vJP = undefined;
		const _nowZ7DGpdf = [_arrayValueGU7EoE7, _arrayValueUxg2vJP]
		const _returnValuepLeuzPj = await getCalendarFormat(_myMomentUWXAQd, _nowZ7DGpdf)
	});
})