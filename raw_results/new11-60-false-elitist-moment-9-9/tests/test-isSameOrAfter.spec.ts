export {}
import {isSameOrAfter} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrAfter', () => {
	it('test for isSameOrAfter', async () => {
		const _inputk50O9aL = 4.032920015760741;
		const _unitsdUjdRK8 = true;
		const _returnValuevEsNMiv = await isSameOrAfter(_inputk50O9aL, _unitsdUjdRK8)
	});
})