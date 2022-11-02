export {}
import {diff} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/diff.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('diff', () => {
	it('test for diff', async () => {
		const _inputyru59pj = "vDYVSJ3vayBfT0OmQjUesurTe5wRtnz5OVKof6gdvdaPNbEV";
		const _unitszdKkC4S = {
		
	}
		const _asFloatCkAIaib = -1.0867671792307014;
		const _returnValue0vdbMp = await diff(_inputyru59pj, _unitszdKkC4S, _asFloatCkAIaib)
	});
})