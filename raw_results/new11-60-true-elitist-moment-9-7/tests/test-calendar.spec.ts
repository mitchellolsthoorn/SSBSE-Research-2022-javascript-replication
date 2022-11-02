export {}
import {calendar} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/calendar.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('calendar', () => {
	it('test for calendar', async () => {
		const _returnValuemsSxxvR = "2RaGFYCCnQkT3ZiNGelVqmjMo6A6iy9QEm3Ajd7TyCrFntA9Ws7DnFNHkS8FyOEqWKDfN4NtlsyvaG";
		const _timehL1Nykm = () => { return _returnValuemsSxxvR };
		const _formatstMXiA3 = {
		
	}
		const _returnValueD2CGIzO = await calendar(_timehL1Nykm, _formatstMXiA3)
	});
})