export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _returnValueAFMfSMz = null;
		const _getAllVertices53tucP = () => { return _returnValueAFMfSMz };
		const _graphcB3jJjb = {
			"getAllVertices": _getAllVertices53tucP
	}
		const _returnValues0zI4p = await articulationPoints(_graphcB3jJjb)
	});

	it('test for articulationPoints', async () => {
		const _isDirectedG2Ctzua = true;
		const _graph7XPLU5 = new Graph(_isDirectedG2Ctzua)
		const _returnValueAJTAop4 = await _graph7XPLU5.getVerticesIndices()
		const _returnValuegq3FDr7 = null;
		const _getKeyA9Uqc0V = () => { return _returnValuegq3FDr7 };
		const _newVertexZ9UCh9Q = {
			"getKey": _getKeyA9Uqc0V
	}
		const _returnValuetf5w9xj = await _graph7XPLU5.addVertex(_newVertexZ9UCh9Q)
		const _returnValueG851Nbt = await _graph7XPLU5.reverse()
		const _returnValueWtoLHlX = await articulationPoints(_graph7XPLU5)
	});
})