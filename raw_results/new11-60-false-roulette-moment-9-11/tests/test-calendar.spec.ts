export {}
import {calendar} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/calendar.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('calendar', () => {
	it('test for calendar', async () => {
		const _timehzKgyXE = undefined;
		const _arrayValueSLysHe0 = "8BW7E1Xu2sJfwfLpGn7jDhxYfMfva55JKllzNrbcsXqfuTTJxpNekHNNJM3UAif65Ps9W";
		const _arrayValuePhhaJY5 = undefined;
		const _formatsWxdVtj = [_arrayValueSLysHe0, _arrayValuePhhaJY5]
		const _returnValueUTIlJoI = await calendar(_timehzKgyXE, _formatsWxdVtj)
	});
})