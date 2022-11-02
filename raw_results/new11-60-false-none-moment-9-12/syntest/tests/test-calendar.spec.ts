export {}
import {calendar} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/calendar.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('calendar', () => {
	it('test for calendar', async () => {
		const _timedIl2p21 = undefined;
		const _arrayValueD5fIlFT = null;
		const _arrayValuebyViA2 = -3.3366722966207716;
		const _arrayValueiuuCPPl = undefined;
		const _formats3GjiM8 = [_arrayValueD5fIlFT, _arrayValuebyViA2, _arrayValueiuuCPPl]
		const _returnValueCZx9K02 = await calendar(_timedIl2p21, _formats3GjiM8)
	});
})