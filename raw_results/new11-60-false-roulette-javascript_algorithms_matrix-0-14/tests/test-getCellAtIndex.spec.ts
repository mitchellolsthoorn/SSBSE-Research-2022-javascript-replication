export {}
import {getCellAtIndex} from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/math/matrix/Matrix.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('getCellAtIndex', () => {
	it('test for getCellAtIndex', async () => {
		const _returnValueCJE0EsS = null;
		const _mMQOccKe = () => { return _returnValueCJE0EsS };
		const _returnValuekCYojnO = -1.1291130349586727;
		const _cellIndicessGThq6 = () => { return _returnValuekCYojnO };
		const _returnValueKxlvV7p = await getCellAtIndex(_mMQOccKe, _cellIndicessGThq6)
	});

	it('test for getCellAtIndex', async () => {
		const _returnValueiQrsA3l = undefined;
		const _muQQTTcQ = () => { return _returnValueiQrsA3l };
		const _cellIndicesm6k8QFT = "3sTkIf6L2Wg2zhYe7axONYFbF9BclEbjhCSH5SB9H4EDuznOFZOje7RiSUBF47nw9Ww9xrl4L0R7GeOfN1pP1Ogl2";
		const _returnValueZw4pdl1 = await getCellAtIndex(_muQQTTcQ, _cellIndicesm6k8QFT)
	});
})