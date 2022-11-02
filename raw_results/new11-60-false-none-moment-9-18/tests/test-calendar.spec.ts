export {}
import {calendar} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/calendar.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('calendar', () => {
	it('test for calendar', async () => {
		const _timezwQLZLa = "qDPWGxnCjeqXNtUXCkV85nVSMqA8H1sTXHJJGAvE1TeYvDjh89UChovQkVlTt8FUAfaW";
		const _arrayValueN00co7 = -7.847391720840057;
		const _formatsqYNrBH5 = [_arrayValueN00co7]
		const _returnValueNLMcGnJ = await calendar(_timezwQLZLa, _formatsqYNrBH5)
	});
})