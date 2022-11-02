export {}
import {calendar} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/calendar.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('calendar', () => {
	it('test for calendar', async () => {
		const _timemEuee2P = "FC1NBQ4DhI";
		const _formatsixSzDF = -5.497114602258078;
		const _returnValueiqBYuct = await calendar(_timemEuee2P, _formatsixSzDF)
	});
})