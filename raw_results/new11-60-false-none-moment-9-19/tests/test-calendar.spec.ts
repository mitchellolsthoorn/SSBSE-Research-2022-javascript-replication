export {}
import {calendar} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/calendar.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('calendar', () => {
	it('test for calendar', async () => {
		const _timeS1KdW2R = 0.246111225509404;
		const _formatsY2D4DQ9 = "YwDDOM53AB5hGExTy7vgC1";
		const _returnValuexqwpjth = await calendar(_timeS1KdW2R, _formatsY2D4DQ9)
	});
})