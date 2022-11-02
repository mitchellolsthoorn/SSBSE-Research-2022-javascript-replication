export {}
import {updateCellAtIndex} from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('updateCellAtIndex', () => {
	it('test for updateCellAtIndex', async () => {
		const _returnValuezuB0Jn0 = false;
		const _mG3bTInr = () => { return _returnValuezuB0Jn0 };
		const _arrayValueseRBxYb = 7.737728435676281;
		const _arrayValueiOZW0be = -1.5300157137725243;
		const _cellIndicesQaDzuMm = [_arrayValueseRBxYb, _arrayValueiOZW0be]
		const _cellValueAk3AnkS = 6.541572695958251;
		const _returnValueyKarSn = await updateCellAtIndex(_mG3bTInr, _cellIndicesQaDzuMm, _cellValueAk3AnkS)
	});

	it('test for updateCellAtIndex', async () => {
		const _m9aFCGM = "NYogQe48WOQNPb8RxPSKK5xcO5HDbCdqx6fCnPHbLvNlLLNBiwTCWH64H1xGaR9uvLUCm3oyA4qbe";
		const _cellIndicesnXtV8tF = "hhhMVPUOE8WMVKRyzoZSYf";
		const _cellValueDUBmW1H = -2.485778758948719;
		const _returnValue7ijWPv = await updateCellAtIndex(_m9aFCGM, _cellIndicesnXtV8tF, _cellValueDUBmW1H)
	});
})