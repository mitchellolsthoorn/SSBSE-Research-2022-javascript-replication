export {}
import {isSameOrAfter} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrAfter', () => {
	it('test for isSameOrAfter', async () => {
		const _inputVpJ0JwC = {
		
	}
		const _arrayValueggJtomy = "Dajvy4xnDKjHbBt1DFcY9XTA70ABS9uOJV9IeFjSq1";
		const _arrayValueBKAw7J5 = true;
		const _unitsIs1oiMD = [_arrayValueggJtomy, _arrayValueBKAw7J5]
		const _returnValueMBvQZy = await isSameOrAfter(_inputVpJ0JwC, _unitsIs1oiMD)
	});
})