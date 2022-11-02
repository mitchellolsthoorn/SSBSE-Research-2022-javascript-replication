export {}
import {getCellAtIndex} from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('getCellAtIndex', () => {
	it('test for getCellAtIndex', async () => {
		const _returnValuebULzImi = null;
		const _mdWcvWpi = () => { return _returnValuebULzImi };
		const _lengthsrg2mCn = -2.5809196335632905;
		const _cellIndicesaReAYS = {
			"length": _lengthsrg2mCn
	}
		const _returnValueEkZBPul = await getCellAtIndex(_mdWcvWpi, _cellIndicesaReAYS)
	});

	it('test for getCellAtIndex', async () => {
		const _mcUyWJlO = true;
		const _cellIndicesv35YyKp = "7ArNkhMrgsZgCbPougmARUtjaTWkbV7i";
		const _returnValueq7iy2MV = await getCellAtIndex(_mcUyWJlO, _cellIndicesv35YyKp)
	});
})