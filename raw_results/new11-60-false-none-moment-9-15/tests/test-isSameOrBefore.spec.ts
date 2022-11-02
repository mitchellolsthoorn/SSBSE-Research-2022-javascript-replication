export {}
import {isSameOrBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrBefore', () => {
	it('test for isSameOrBefore', async () => {
		const _arrayValueY7uVlau = true;
		const _arrayValueK9eUGkN = null;
		const _inputYM9MKKu = [_arrayValueY7uVlau, _arrayValueK9eUGkN]
		const _unitsZIc7k6F = "9rj1bC6m7iLEqiGyWzi68BWAnVsqTUm1I6agqrTpaXGSszSBNeYxdFobw99JQ08537crq3CKmmAY535xQmD";
		const _returnValuebyPgozd = await isSameOrBefore(_inputYM9MKKu, _unitsZIc7k6F)
	});
})