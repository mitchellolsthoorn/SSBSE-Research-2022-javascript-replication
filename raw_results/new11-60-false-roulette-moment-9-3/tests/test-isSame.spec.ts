export {}
import {isSame} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSame', () => {
	it('test for isSame', async () => {
		const _arrayValueVQBd7OP = false;
		const _returnValuefiItd7 = "MQgPvBKYPSj3wlkgU8c2621LQdHX9RyEwp8PQeeOfTdHKUUAVPfsNGoV2zLaOrixYeTYaarJGyo7u66doEHeEQG";
		const _arrayValueblJJ8W9 = () => { return _returnValuefiItd7 };
		const _arrayValuenQ2v5Zh = 5.888036228508991;
		const _arrayValueRDz0RNe = undefined;
		const _arrayValuehAPHsKj = [_arrayValueblJJ8W9, _arrayValuenQ2v5Zh, _arrayValueRDz0RNe]
		const _inputReZwGLy = [_arrayValueVQBd7OP, _arrayValuehAPHsKj]
		const _unitsGbmbzx0 = {
		
	}
		const _returnValuetJ97OXQ = await isSame(_inputReZwGLy, _unitsGbmbzx0)
	});

	it('test for isSame', async () => {
		const _inputUEJuj4T = null;
		const _unitsS30Nwn = {
		
	}
		const _returnValueVQjM5Lm = await isSame(_inputUEJuj4T, _unitsS30Nwn)
	});
})