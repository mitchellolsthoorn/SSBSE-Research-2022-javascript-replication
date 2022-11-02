export {}
import {isSameOrBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrBefore', () => {
	it('test for isSameOrBefore', async () => {
		const _returnValueCsEn7pA = -0.00836863900680207;
		const _inputUzRvMyP = () => { return _returnValueCsEn7pA };
		const _unitsVn5gL9c = []
		const _returnValueKDYIn0C = await isSameOrBefore(_inputUzRvMyP, _unitsVn5gL9c)
	});
})