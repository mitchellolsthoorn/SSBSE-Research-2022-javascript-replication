export {}
import {updateCellAtIndex} from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('updateCellAtIndex', () => {
	it('test for updateCellAtIndex', async () => {
		const _returnValueFBL6JiU = true;
		const _mEWz4q3q = () => { return _returnValueFBL6JiU };
		const _lengtheo0ftT = 5.110538514272765;
		const _cellIndicesZl8AmgX = {
			"length": _lengtheo0ftT
	}
		const _cellValueB3imHTR = -0.7408270841753826;
		const _returnValueusV1qPI = await updateCellAtIndex(_mEWz4q3q, _cellIndicesZl8AmgX, _cellValueB3imHTR)
	});

	it('test for updateCellAtIndex', async () => {
		const _arrayValueEOBockY = true;
		const _arrayValuekavsoMm = 9.794478869361075;
		const _mQ7u054r = [_arrayValueEOBockY, _arrayValuekavsoMm]
		const _returnValueLzePuCe = -9.282561492099324;
		const _cellIndicesP17lzg = () => { return _returnValueLzePuCe };
		const _cellValueDbRLkPr = 9.620778795245108;
		const _returnValueeEJba8 = await updateCellAtIndex(_mQ7u054r, _cellIndicesP17lzg, _cellValueDbRLkPr)
	});
})