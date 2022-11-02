export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _arrayValuetwAFibs = "Qd3An5Ri48YzTJ95GikUyWSSViJAlvZnvAIhiEMgu0YRQmfFvQ9N7FLJ5";
		const _graphOTtLnJr = [_arrayValuetwAFibs]
		const _returnValueRHlhan8 = await articulationPoints(_graphOTtLnJr)
	});

	it('test for articulationPoints', async () => {
		const _isDirectedcw4X5t = false;
		const _graphpZimrb2 = new Graph(_isDirectedcw4X5t)
		const _returnValuezTirvak = await _graphpZimrb2.reverse()
		const _returnValuecMmaEMG = undefined;
		const _getKeyryW9V6E = () => { return _returnValuecMmaEMG };
		const _newVertexlpmBIti = {
			"getKey": _getKeyryW9V6E
	}
		const _returnValuejKhBSh = await _graphpZimrb2.addVertex(_newVertexlpmBIti)
		const _returnValueglCKj7x = await articulationPoints(_graphpZimrb2)
	});
})