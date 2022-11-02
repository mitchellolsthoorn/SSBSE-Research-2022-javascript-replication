export {}
import {isSameOrAfter} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrAfter', () => {
	it('test for isSameOrAfter', async () => {
		const _inputGSSS87P = -2.3328178314420276;
		const _unitsYMVCAqv = undefined;
		const _returnValueThtaRVM = await isSameOrAfter(_inputGSSS87P, _unitsYMVCAqv)
	});
})