export {}
import {isSame} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSame', () => {
	it('test for isSame', async () => {
		const _inputsYPJTd = "bLUolgLSCaKW7qphLCFzG8kPSbMsAOE3aufKzI5eNvKjtqvw";
		const _unitsGlf1aGQ = {
		
	}
		const _returnValuesQ2NCfD = await isSame(_inputsYPJTd, _unitsGlf1aGQ)
	});

	it('test for isSame', async () => {
		const _inputgESAbkk = -6.9214715561998315;
		const _unitsgLKFeFH = "wrzxFjgkcS5GGo82k8drtf4cn";
		const _returnValueiWOKbKl = await isSame(_inputgESAbkk, _unitsgLKFeFH)
	});
})