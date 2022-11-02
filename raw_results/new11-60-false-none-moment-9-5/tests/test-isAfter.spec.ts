export {}
import {isAfter} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isAfter', () => {
	it('test for isAfter', async () => {
		const _inputeKQy6f = true;
		const _arrayValueHdphcmR = "UoAvsaK0jcn7x2zhGptLDrYTQ9sUjxC5vrSbq8vd3niyhbPtTOA93Gsst7u";
		const _unitsYBHsEaV = [_arrayValueHdphcmR]
		const _returnValuegKHI8m = await isAfter(_inputeKQy6f, _unitsYBHsEaV)
	});
})