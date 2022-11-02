export {}
import {isSameOrAfter} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrAfter', () => {
	it('test for isSameOrAfter', async () => {
		const _inputd0VzEYk = 7.639588218209369;
		const _unitsE1VX3j = undefined;
		const _returnValueK0SZ8jW = await isSameOrAfter(_inputd0VzEYk, _unitsE1VX3j)
	});
})