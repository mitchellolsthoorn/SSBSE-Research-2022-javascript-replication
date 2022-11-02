export {}
import {isSameOrBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrBefore', () => {
	it('test for isSameOrBefore', async () => {
		const _inputbP8tFdL = "a29rabzkFl84GojwElZYTGyA5EL0s0Wexr";
		const _unitsfZpleQ3 = null;
		const _returnValueoA4DP6Q = await isSameOrBefore(_inputbP8tFdL, _unitsfZpleQ3)
	});
})