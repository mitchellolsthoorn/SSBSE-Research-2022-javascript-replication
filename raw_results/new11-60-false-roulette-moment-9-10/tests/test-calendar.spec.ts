export {}
import {calendar} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/calendar.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('calendar', () => {
	it('test for calendar', async () => {
		const _timen6uLaaI = undefined;
		const _returnValuevmpvelN = 6.844577285158753;
		const _formatsvJ7ozlb = () => { return _returnValuevmpvelN };
		const _returnValueUN8fpNB = await calendar(_timen6uLaaI, _formatsvJ7ozlb)
	});
})