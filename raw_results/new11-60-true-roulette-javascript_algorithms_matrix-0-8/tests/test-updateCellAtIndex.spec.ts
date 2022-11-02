export {}
import {updateCellAtIndex} from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('updateCellAtIndex', () => {
	it('test for updateCellAtIndex', async () => {
		const _returnValueAph6yDf = -4.312398131546161;
		const _arrayValueBjH6DKv = () => { return _returnValueAph6yDf };
		const _mGg25MOb = [_arrayValueBjH6DKv]
		const _returnValueFKoRDy4 = "Ad661tTzcxo2vjdDUR5vFZaYl6fq4JHhbdGhc3Qpu";
		const _cellIndicesKyOcnRC = () => { return _returnValueFKoRDy4 };
		const _cellValueAxtXOWl = -9.358397789265855;
		const _returnValueKf2xqv = await updateCellAtIndex(_mGg25MOb, _cellIndicesKyOcnRC, _cellValueAxtXOWl)
	});

	it('test for updateCellAtIndex', async () => {
		const _mBDALXm4 = []
		const _cellIndicesLp9llW8 = "HRMSqzy6BROtY2RY3JkINfKbBo9CU18zZdAGO7BljTeswIm5mDMFy6ek";
		const _cellValuezWYZecH = 9.087373478689855;
		const _returnValueozXOVKu = await updateCellAtIndex(_mBDALXm4, _cellIndicesLp9llW8, _cellValuezWYZecH)
	});
})