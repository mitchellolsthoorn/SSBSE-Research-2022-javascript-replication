export {}
import {getCalendarFormat} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/calendar.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('getCalendarFormat', () => {
	it('test for getCalendarFormat', async () => {
		const _myMomentNNxGndB = undefined;
		const _returnValueb7eBMS3 = false;
		const _nowWrBJCng = () => { return _returnValueb7eBMS3 };
		const _returnValueZV3vFGi = await getCalendarFormat(_myMomentNNxGndB, _nowWrBJCng)
	});
})