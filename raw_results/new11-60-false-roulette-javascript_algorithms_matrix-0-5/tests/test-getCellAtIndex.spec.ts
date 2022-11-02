export {}
import {getCellAtIndex} from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('getCellAtIndex', () => {
	it('test for getCellAtIndex', async () => {
		const _mPdT9edj = "JPKInLFCxgTet7z2cwavPHWWnIe5a4l1aapfZzN";
		const _arrayValueFu2V3q = -7.158291347740867;
		const _cellIndicesDV7X6Fl = [_arrayValueFu2V3q]
		const _returnValuejuxmxzz = await getCellAtIndex(_mPdT9edj, _cellIndicesDV7X6Fl)
	});

	it('test for getCellAtIndex', async () => {
		const _arrayValueBPN6RfI = undefined;
		const _mqMDEeT = [_arrayValueBPN6RfI]
		const _lengthsrqYRMp = 8.540855115229938;
		const _cellIndicesEcowNM = {
			"length": _lengthsrqYRMp
	}
		const _returnValueZGqF84f = await getCellAtIndex(_mqMDEeT, _cellIndicesEcowNM)
	});
})