export {}
import {isSameOrAfter} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrAfter', () => {
	it('test for isSameOrAfter', async () => {
		const _inputkWVMXFJ = -6.890693318035774;
		const _unitsedfaZ3 = 0.13426597806143192;
		const _returnValueexLaNxv = await isSameOrAfter(_inputkWVMXFJ, _unitsedfaZ3)
	});
})