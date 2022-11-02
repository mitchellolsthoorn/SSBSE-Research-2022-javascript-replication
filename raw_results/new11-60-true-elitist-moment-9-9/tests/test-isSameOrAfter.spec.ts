export {}
import {isSameOrAfter} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrAfter', () => {
	it('test for isSameOrAfter', async () => {
		const _returnValuexVHtTJR = false;
		const _arrayValueh7EdclT = () => { return _returnValuexVHtTJR };
		const _arrayValuem0njbVv = null;
		const _arrayValueH1v2i7k = false;
		const _inputmRk7zYB = [_arrayValueh7EdclT, _arrayValuem0njbVv, _arrayValueH1v2i7k]
		const _unitsUpI1auC = undefined;
		const _returnValuepAcOmW = await isSameOrAfter(_inputmRk7zYB, _unitsUpI1auC)
	});
})