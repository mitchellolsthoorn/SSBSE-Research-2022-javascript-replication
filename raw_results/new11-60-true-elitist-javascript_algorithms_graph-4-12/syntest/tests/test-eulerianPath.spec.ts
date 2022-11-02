export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _returnValueh2TCBF3 = undefined;
		const _getAllEdgesiMhaRFr = () => { return _returnValueh2TCBF3 };
		const _returnValuel0hZJZF = "JuRJXc6S4gYmKeKivEQ";
		const _getAllVerticesPegc8q = () => { return _returnValuel0hZJZF };
		const _returnValueMeZKoh1 = -9.604123510067646;
		const _deleteEdgeTgxm5Rk = () => { return _returnValueMeZKoh1 };
		const _graphbX9Q3Vs = {
			"getAllEdges": _getAllEdgesiMhaRFr,
		"getAllVertices": _getAllVerticesPegc8q,
		"deleteEdge": _deleteEdgeTgxm5Rk
	}
		const _returnValuea0NS13K = await eulerianPath(_graphbX9Q3Vs)
	});

	it('test for eulerianPath', async () => {
		const _isDirectedlAUroUh = false;
		const _graphgBurBM5 = new Graph(_isDirectedlAUroUh)
		const _arrayValueiSwN3QC = null;
		const _arrayValueeTALM5 = {
		
	}
		const _arrayValueOwidipa = null;
		const _arrayValueazX2FVP = [_arrayValueeTALM5, _arrayValueOwidipa]
		const _returnValueupX9FLq = [_arrayValueiSwN3QC, _arrayValueazX2FVP]
		const _valuePxBJOYh = () => { return _returnValueupX9FLq };
		const _returnValueYUXWdAc = []
		const _keyCallbackXzECK8 = () => { return _returnValueYUXWdAc };
		const _startVertexkdmNDv1 = new DisjointSetItem(_valuePxBJOYh, _keyCallbackXzECK8)
		const _returnValuelmTH7i7 = await _startVertexkdmNDv1.isRoot()
		const _returnValueFGyqhYY = await _startVertexkdmNDv1.getChildren()
		const _returnValuePqsz7Sr = await _startVertexkdmNDv1.isRoot()
		const _endVertexNJVG2VQ = false;
		const _returnValueiMwWnS = await _graphgBurBM5.findEdge(_startVertexkdmNDv1, _endVertexNJVG2VQ)
		const _returnValuetbCs7x = await _graphgBurBM5.getAdjacencyMatrix()
		const _returnValueKZjiXa = await eulerianPath(_graphgBurBM5)
	});

	it('test for eulerianPath', async () => {
		const _isDirectedEvRL0iX = true;
		const _graphkarOy9v = new Graph(_isDirectedEvRL0iX)
		const _arrayValueEvkD0AF = 7.878411534464558;
		const _arrayValueqJQ7koD = true;
		const _arrayValueTFI40C = "HTxHQWU3MwiacIf5RaUrr3Rp8VTRZFyB8LkMh6eCFGolE69GKjYs";
		const _returnValuebyPDc9P = [_arrayValueEvkD0AF, _arrayValueqJQ7koD, _arrayValueTFI40C]
		const _getNeighborsEH28OR = () => { return _returnValuebyPDc9P };
		const _vertexfMeo2Eq = {
			"getNeighbors": _getNeighborsEH28OR
	}
		const _returnValuevwcEiPO = await _graphkarOy9v.getNeighbors(_vertexfMeo2Eq)
		const _valuewD4sNnd = "RVkSwob9OXGBmJxWv60xQGU4qVDA6iD4meQdlNz2LRK4pMVqKdg";
		const _newVertexoMAStjG = new GraphVertex(_valuewD4sNnd)
		const _returnValueKNIZA0v = await _newVertexoMAStjG.getDegree()
		const _edgeUBYllD8 = -3.0803488115756554;
		const _returnValueQoDM9KX = await _newVertexoMAStjG.addEdge(_edgeUBYllD8)
		const _returnValuerGnCtTN = await _graphkarOy9v.addVertex(_newVertexoMAStjG)
		const _returnValueWiUeuBU = await eulerianPath(_graphkarOy9v)
	});
})