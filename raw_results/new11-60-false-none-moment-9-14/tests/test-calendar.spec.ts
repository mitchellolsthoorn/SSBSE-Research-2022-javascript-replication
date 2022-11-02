export {}
import {calendar} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/calendar.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('calendar', () => {
	it('test for calendar', async () => {
		const _timefi1mF0I = "L2uyZpXh4ahntTDapr2NDh4dpiamzT2KouXTqWLZPCwwiOr7od0U1I9TB8qNVHSrl";
		const _returnValueBHwfDOQ = "6HG0y26d26KByLPXci7OFp9Q7fQGxuXHK0IpBQFR54z7viEXGHwHhbV1wNJLWSfk5Mpj2eJuOkPeLjd7mtA3JSVpyT";
		const _formatsFjZB6M2 = () => { return _returnValueBHwfDOQ };
		const _returnValueydJgZNH = await calendar(_timefi1mF0I, _formatsFjZB6M2)
	});
})