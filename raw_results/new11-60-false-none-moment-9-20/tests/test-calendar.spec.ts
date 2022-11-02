export {}
import {calendar} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/calendar.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('calendar', () => {
	it('test for calendar', async () => {
		const _timeN42gcd = "shnIFAlE1mjZiDthQ3oDNbYRMUdHgPLr5gXOsIEebWBE62zxjBGRLJyYl4SQX4yOsDz4QLnAPo9ybvrEFdL";
		const _formatsBwdGO3 = undefined;
		const _returnValuewLBH398 = await calendar(_timeN42gcd, _formatsBwdGO3)
	});
})