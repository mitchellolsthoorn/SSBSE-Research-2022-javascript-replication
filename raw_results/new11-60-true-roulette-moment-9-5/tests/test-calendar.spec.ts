export {}
import {calendar} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/calendar.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('calendar', () => {
	it('test for calendar', async () => {
		const _arrayValuekX24Cmy = undefined;
		const _returnValueG1xR0zo = 6.4004174998695476;
		const _arrayValuerJ5ajvY = () => { return _returnValueG1xR0zo };
		const _arrayValuetLJGAP = undefined;
		const _timeDbkHGWt = [_arrayValuekX24Cmy, _arrayValuerJ5ajvY, _arrayValuetLJGAP]
		const _formatsKuZJHAw = "4Rkd6hrfotKC6P34VUiNkmUywOQG55cBSCrpGjMULDMq2PusoIgtHS5Qc6HK1LXgne6G6eJU9nT9NuBC0kXHaTAYEIYFxU";
		const _returnValuey4YbgTN = await calendar(_timeDbkHGWt, _formatsKuZJHAw)
	});
})