export {}
import {calendar} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/calendar.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('calendar', () => {
	it('test for calendar', async () => {
		const _timeL9aGYkC = undefined;
		const _formatsCYFgaPk = "eYYmm7OLQW7VkzViXL2u9XQNOmuxkV2I5wQlBaIWlJocnhjvJhzzTOsWOIK";
		const _returnValuesvhsgz6 = await calendar(_timeL9aGYkC, _formatsCYFgaPk)
	});
})