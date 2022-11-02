export {}
import {calendar} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/calendar.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('calendar', () => {
	it('test for calendar', async () => {
		const _timefSDLbNB = "J9rO16SDbUJUGIW9IKkq6amW3uaTR1txqFmxD2vJ44wIIRjxaBon5gq3GzHJ1HTSm6TufGXVThnttEwkTsuPGRd";
		const _returnValueldsbstt = true;
		const _formatsFjHkE0z = () => { return _returnValueldsbstt };
		const _returnValueJ6sjsUj = await calendar(_timefSDLbNB, _formatsFjHkE0z)
	});
})