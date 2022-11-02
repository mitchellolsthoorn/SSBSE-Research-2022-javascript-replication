export {}
import {getCellAtIndex} from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('getCellAtIndex', () => {
	it('test for getCellAtIndex', async () => {
		const _returnValueVCnwPvx = -9.506352172919522;
		const _myVDIb80 = () => { return _returnValueVCnwPvx };
		const _lengthQ7UzU2r = -5.586458893776745;
		const _cellIndicesUuvuxmi = {
			"length": _lengthQ7UzU2r
	}
		const _returnValuezFohcy5 = await getCellAtIndex(_myVDIb80, _cellIndicesUuvuxmi)
	});

	it('test for getCellAtIndex', async () => {
		const _mFKgDlRd = "SBbpRBodRvXVVuMKVdooRYVQDa";
		const _lengthPyg9mAm = 5.964341958122624;
		const _cellIndicesV9Fh0O7 = {
			"length": _lengthPyg9mAm
	}
		const _returnValueo7n7oyw = await getCellAtIndex(_mFKgDlRd, _cellIndicesV9Fh0O7)
	});
})