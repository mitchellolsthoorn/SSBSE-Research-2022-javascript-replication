export {}
import {isSameOrAfter} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrAfter', () => {
	it('test for isSameOrAfter', async () => {
		const _inputneYnwBE = "SsEhB6M5ejNNHF8ATEFTGip";
		const _unitsLbFKBPo = 9.04177805522022;
		const _returnValueKFqJFfM = await isSameOrAfter(_inputneYnwBE, _unitsLbFKBPo)
	});
})