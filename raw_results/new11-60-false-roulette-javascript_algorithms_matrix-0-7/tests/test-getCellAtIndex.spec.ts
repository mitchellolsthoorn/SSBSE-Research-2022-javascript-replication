export {}
import {getCellAtIndex} from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('getCellAtIndex', () => {
	it('test for getCellAtIndex', async () => {
		const _returnValuedPAc2yR = undefined;
		const _mtbma3r0 = () => { return _returnValuedPAc2yR };
		const _cellIndicesI6kPQ5Q = []
		const _returnValueLx3UC37 = await getCellAtIndex(_mtbma3r0, _cellIndicesI6kPQ5Q)
	});

	it('test for getCellAtIndex', async () => {
		const _madzyhlu = "AlrBrDrdkPYKzETxAqKbfG3CyMoN74BMEGh0s19N6rQhKGTM6ddaZyahGD";
		const _lengthwnj2cq = 5.637917513804201;
		const _cellIndicesEM6tS0u = {
			"length": _lengthwnj2cq
	}
		const _returnValueV2tsjd = await getCellAtIndex(_madzyhlu, _cellIndicesEM6tS0u)
	});
})