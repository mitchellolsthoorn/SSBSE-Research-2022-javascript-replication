export {}
import {isSameOrAfter} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrAfter', () => {
	it('test for isSameOrAfter', async () => {
		const _inputii6NEhy = -2.9625250971822226;
		const _unitsXm0AnDW = 0.2910229723444111;
		const _returnValueKL7BCGe = await isSameOrAfter(_inputii6NEhy, _unitsXm0AnDW)
	});
})