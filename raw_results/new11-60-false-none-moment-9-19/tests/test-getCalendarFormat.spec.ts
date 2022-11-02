export {}
import {getCalendarFormat} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/calendar.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('getCalendarFormat', () => {
	it('test for getCalendarFormat', async () => {
		const _myMomentDSiY4iA = []
		const _arrayValuegZapOjh = 6.756510501696706;
		const _arrayValueKQOI55k = "TNldKIqreAbnDnuBmgFSx3bafQ5Nt9zPEWkDz";
		const _nowBMN56WN = [_arrayValuegZapOjh, _arrayValueKQOI55k]
		const _returnValuenbXNnyU = await getCalendarFormat(_myMomentDSiY4iA, _nowBMN56WN)
	});
})