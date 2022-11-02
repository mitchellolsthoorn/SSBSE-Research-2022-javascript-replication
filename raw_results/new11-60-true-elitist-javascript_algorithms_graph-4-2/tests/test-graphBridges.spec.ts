export {}
import graphBridges from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bridges/graphBridges.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('graphBridges', () => {
	it('test for graphBridges', async () => {
		const _returnValueCWFV3Z = null;
		const _getAllVerticesSSUgDwH = () => { return _returnValueCWFV3Z };
		const _findEdgeXphQSDW = null;
		const _graphQFXFveR = {
			"getAllVertices": _getAllVerticesSSUgDwH,
		"findEdge": _findEdgeXphQSDW
	}
		const _returnValueJ8S7Vdm = await graphBridges(_graphQFXFveR)
	});

	it('test for graphBridges', async () => {
		const _isDirectedEqZna7 = true;
		const _graphI1FhKPq = new Graph(_isDirectedEqZna7)
		const _returnValueQsXI3J9 = true;
		const _returnValueuLsZnA = () => { return _returnValueQsXI3J9 };
		const _getKeyxKrtFSK = () => { return _returnValueuLsZnA };
		const _newVertexLkegoK = {
			"getKey": _getKeyxKrtFSK
	}
		const _returnValuecUfAJaN = await _graphI1FhKPq.addVertex(_newVertexLkegoK)
		const _returnValueg68kX37 = await graphBridges(_graphI1FhKPq)
	});
})