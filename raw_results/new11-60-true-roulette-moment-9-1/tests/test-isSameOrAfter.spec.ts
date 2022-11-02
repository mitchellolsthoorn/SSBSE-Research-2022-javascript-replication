export {}
import {isSameOrAfter} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrAfter', () => {
	it('test for isSameOrAfter', async () => {
		const _returnValuea84ALlr = null;
		const _inputQczVkxn = () => { return _returnValuea84ALlr };
		const _unitsHEWVeUp = null;
		const _returnValueskcSZQi = await isSameOrAfter(_inputQczVkxn, _unitsHEWVeUp)
	});
})