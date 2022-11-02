export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _returnValuesY22SuU = "kOAfrlQINi7vpFf9G3Wf";
		const _getAllEdgesqgqIpy = () => { return _returnValuesY22SuU };
		const _getAllVerticesyxcDGP8 = {
		
	}
		const _returnValueKXPp1Pq = "QQxnKHCGgGpn";
		const _deleteEdgeTsIr0Wc = () => { return _returnValueKXPp1Pq };
		const _graph1HHs3D = {
			"getAllEdges": _getAllEdgesqgqIpy,
		"getAllVertices": _getAllVerticesyxcDGP8,
		"deleteEdge": _deleteEdgeTsIr0Wc
	}
		const _returnValuex6eyiHr = await eulerianPath(_graph1HHs3D)
	});

	it('test for eulerianPath', async () => {
		const _isDirectedQd3klp2 = false;
		const _graphFPJyp8D = new Graph(_isDirectedQd3klp2)
		const _returnValueq91zg9y = await _graphFPJyp8D.getVerticesIndices()
		const _returnValuedsKJCXZ = await _graphFPJyp8D.getWeight()
		const _returnValuel2187Eg = await _graphFPJyp8D.getAllEdges()
		const _returnValue8LHIrQ = await eulerianPath(_graphFPJyp8D)
	});
})