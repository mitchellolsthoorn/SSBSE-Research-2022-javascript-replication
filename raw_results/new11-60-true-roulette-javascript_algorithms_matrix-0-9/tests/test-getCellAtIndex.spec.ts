export {}
import {getCellAtIndex} from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('getCellAtIndex', () => {
	it('test for getCellAtIndex', async () => {
		const _returnValueBHzz7hx = undefined;
		const _returnValueidpRtp = () => { return _returnValueBHzz7hx };
		const _mJG29i6P = () => { return _returnValueidpRtp };
		const _length13tpS0 = 9.971117916460383;
		const _cellIndicesXbq09CX = {
			"length": _length13tpS0
	}
		const _returnValueA9paNnW = await getCellAtIndex(_mJG29i6P, _cellIndicesXbq09CX)
	});

	it('test for getCellAtIndex', async () => {
		const _mX5Yk3m9 = "CKdDgslmM5VWfS4NPbfX2P4GjKeYCnNIlBAdMDLV52dv7dCBDQ8rOySlf0nSkKhswcMgWPAck9Pvbn";
		const _arrayValueibxvsx = -2.608869185608931;
		const _arrayValueFayFyv = -6.558058695829375;
		const _cellIndicesJR0kZj1 = [_arrayValueibxvsx, _arrayValueFayFyv]
		const _returnValuez4lMNcQ = await getCellAtIndex(_mX5Yk3m9, _cellIndicesJR0kZj1)
	});
})