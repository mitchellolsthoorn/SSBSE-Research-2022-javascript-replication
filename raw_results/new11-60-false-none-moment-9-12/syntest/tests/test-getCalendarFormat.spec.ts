export {}
import {getCalendarFormat} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/calendar.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('getCalendarFormat', () => {
	it('test for getCalendarFormat', async () => {
		const _arrayValuehZVAsi = -6.03577204783844;
		const _arrayValuecnseE0e = 1.7202107322789821;
		const _myMomentYej62Tb = [_arrayValuehZVAsi, _arrayValuecnseE0e]
		const _nowMOYJO2C = {
		
	}
		const _returnValuevB2Yth = await getCalendarFormat(_myMomentYej62Tb, _nowMOYJO2C)
	});
})