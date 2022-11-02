export {}
import {from} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('from', () => {
	it('test for from', async () => {
		const _timeqFPVwP6 = "9UiDlSO99iqX5IkNjV26XjUPqlYOnjbLjYkBwIhRfzxUlxtQqYPJTdmJIc7FEzDaa092zebJafJbXQJis4MQTS3Unt9EC4iRKK";
		const _withoutSuffixynWPtlM = undefined;
		const _returnValuewJlpYby = await from(_timeqFPVwP6, _withoutSuffixynWPtlM)
	});
})