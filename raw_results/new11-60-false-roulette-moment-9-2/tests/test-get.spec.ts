export {}
import {get} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/get-set.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('get', () => {
	it('test for get', async () => {
		const _arrayValueqL88VsG = 8.117608378668187;
		const _returnValuewrYQd1N = [_arrayValueqL88VsG]
		const _arrayValueqCeMVn3 = () => { return _returnValuewrYQd1N };
		const _arrayValuelLDAfzT = "K6B0FvnxvFOZnugbLnIAHV479Iimtf49YNNOlbyGlD97BkD1Y4YKjjIsWhcwfR3RmThHIa58246Flio5Y";
		const __isUTCeKQuwEJ = [_arrayValueqCeMVn3, _arrayValuelLDAfzT]
		const _momGF5vUu = {
			"_isUTC": __isUTCeKQuwEJ
	}
		const _unitHudLGFN = "erFyZnwWUYmYc8kYeNpD3wVjfnFzjXnTNjpleaVccjlRO94nuRkFsUBNrvwDOsIm8oqV8csm6QIjSH4zAbINzB3OfTnV";
		const _returnValuedNH1U5G = await get(_momGF5vUu, _unitHudLGFN)
	});
})