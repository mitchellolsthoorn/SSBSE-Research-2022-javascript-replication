export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _returnValuesyv6qIc = undefined;
		const _getAllVerticesXp89LA = () => { return _returnValuesyv6qIc };
		const _graphAD0U7AE = {
			"getAllVertices": _getAllVerticesXp89LA
	}
		const _returnValuemrYzrcY = await articulationPoints(_graphAD0U7AE)
	});

	it('test for articulationPoints', async () => {
		const _isDirectedywoB9iT = false;
		const _graphpvqz3vn = new Graph(_isDirectedywoB9iT)
		const _returnValuecCFLk7o = await _graphpvqz3vn.getAllVertices()
		const _returnValuesXjNMzV = "92VrFi0zeWoMTxAMiGJch88Q6nSqtEh4utSMRPOQ8cLcli57D3skjCYu";
		const _getKeywLZ1cOi = () => { return _returnValuesXjNMzV };
		const _newVertexDoTvyWw = {
			"getKey": _getKeywLZ1cOi
	}
		const _returnValueLo3jNM1 = await _graphpvqz3vn.addVertex(_newVertexDoTvyWw)
		const _returnValueZdpu6mF = await articulationPoints(_graphpvqz3vn)
	});
})