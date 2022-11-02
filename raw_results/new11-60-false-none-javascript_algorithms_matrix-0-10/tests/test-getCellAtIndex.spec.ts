export {}
import {getCellAtIndex} from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('getCellAtIndex', () => {
	it('test for getCellAtIndex', async () => {
		const _returnValueQvYxvb0 = undefined;
		const _arrayValuei2jkYm = () => { return _returnValueQvYxvb0 };
		const _arrayValueBl1Z87 = undefined;
		const _arrayValueVPtnxaA = "hJw27yWLAt97";
		const _msTiUUx = [_arrayValuei2jkYm, _arrayValueBl1Z87, _arrayValueVPtnxaA]
		const _cellIndicesXHKJAmW = false;
		const _returnValuepLtCkSv = await getCellAtIndex(_msTiUUx, _cellIndicesXHKJAmW)
	});

	it('test for getCellAtIndex', async () => {
		const _mStcPKi1 = []
		const _cellIndicescDtVNaG = "8QuVhGYE4Irgo9MuTdSA1V8I0up62PPEVmd76LTrOKLSnCXtotzgaWlO";
		const _returnValuejGz0LkC = await getCellAtIndex(_mStcPKi1, _cellIndicescDtVNaG)
	});
})