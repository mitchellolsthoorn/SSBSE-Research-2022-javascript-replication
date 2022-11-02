export {}
import {updateCellAtIndex} from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('updateCellAtIndex', () => {
	it('test for updateCellAtIndex', async () => {
		const _returnValueehKQZtW = -0.4586819585841777;
		const _mUvVkxk = () => { return _returnValueehKQZtW };
		const _lengthun0A33K = -8.179107052742992;
		const _cellIndicesLjcZOu = {
			"length": _lengthun0A33K
	}
		const _cellValueF1xS70D = -3.084674209211361;
		const _returnValuerGliz30 = await updateCellAtIndex(_mUvVkxk, _cellIndicesLjcZOu, _cellValueF1xS70D)
	});

	it('test for updateCellAtIndex', async () => {
		const _arrayValueC3hRUfn = undefined;
		const _arrayValueYJ5Y1s = {
		
	}
		const _arrayValuek8VZWNV = undefined;
		const _mTPC18pB = [_arrayValueC3hRUfn, _arrayValueYJ5Y1s, _arrayValuek8VZWNV]
		const _lengthmTL2fh = 2.7160931817675955;
		const _cellIndicesTpZSJRn = {
			"length": _lengthmTL2fh
	}
		const _cellValuekmABV0t = -5.475405274724739;
		const _returnValueJ453arn = await updateCellAtIndex(_mTPC18pB, _cellIndicesTpZSJRn, _cellValuekmABV0t)
	});
})