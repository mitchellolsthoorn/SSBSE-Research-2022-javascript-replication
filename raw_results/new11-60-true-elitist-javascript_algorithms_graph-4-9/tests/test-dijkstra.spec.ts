export {}
import dijkstra from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/dijkstra/dijkstra.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('dijkstra', () => {
	it('test for dijkstra', async () => {
		const _returnValueKNhEQ3e = undefined;
		const _getAllVerticesi19znh = () => { return _returnValueKNhEQ3e };
		const _returnValueTjiU9Jj = -6.01229302017205;
		const _findEdgePjNXZz = () => { return _returnValueTjiU9Jj };
		const _graphVuzIbd = {
			"getAllVertices": _getAllVerticesi19znh,
		"findEdge": _findEdgePjNXZz
	}
		const _returnValueVp6k2VH = true;
		const _getKeyrVb5pS8 = () => { return _returnValueVp6k2VH };
		const _startVertex7Wgfx6 = {
			"getKey": _getKeyrVb5pS8
	}
		const _returnValueCFqKslA = await dijkstra(_graphVuzIbd, _startVertex7Wgfx6)
	});

	it('test for dijkstra', async () => {
		const _isDirectedk5mTjKo = false;
		const _graphvtiN6io = new Graph(_isDirectedk5mTjKo)
		const _returnValueOECEFru = await _graphvtiN6io.getAllEdges()
		const _returnValueHl9CHpc = await _graphvtiN6io.toString()
		const _vertexKeyklenZD1 = true;
		const _returnValueyhgRHkN = await _graphvtiN6io.getVertexByKey(_vertexKeyklenZD1)
		const _returnValuecJYFCdo = await _graphvtiN6io.toString()
		const _returnValuezN6P7ah = undefined;
		const _returnValueiZiEz0M = () => { return _returnValuezN6P7ah };
		const _getKeyhSA8D9s = () => { return _returnValueiZiEz0M };
		const _startVertexFuZ2afE = {
			"getKey": _getKeyhSA8D9s
	}
		const _returnValueRR99DPU = await dijkstra(_graphvtiN6io, _startVertexFuZ2afE)
	});

	it('test for dijkstra', async () => {
		const _isDirectedSlmFxQI = false;
		const _graphiOD0oDo = new Graph(_isDirectedSlmFxQI)
		const _vertexKey4BZ4ah = null;
		const _returnValueTuNJnSz = await _graphiOD0oDo.getVertexByKey(_vertexKey4BZ4ah)
		const _returnValueLmKlKg4 = await _graphiOD0oDo.getAllEdges()
		const _valuepO1whno = "8iKDgKNzTUo5nKMUp";
		const _startVertexCX7fyM5 = new GraphVertex(_valuepO1whno)
		const _vertexDdmEBEx = -8.384032299307455;
		const _returnValuegsj83uZ = await _startVertexCX7fyM5.hasNeighbor(_vertexDdmEBEx)
		const _returnValueRPo93Ys = await dijkstra(_graphiOD0oDo, _startVertexCX7fyM5)
	});

	it('test for dijkstra', async () => {
		const _isDirectedD5HZqgm = false;
		const _graphjqFyn8h = new Graph(_isDirectedD5HZqgm)
		const _returnValuegSoYTDt = await _graphjqFyn8h.getWeight()
		const _returnValueW9dVAC1 = await _graphjqFyn8h.getAdjacencyMatrix()
		const _valuecAhzQ7H = {
		
	}
		const _startVertexFSggFG = new GraphVertex(_valuecAhzQ7H)
		const _edgefATbZV7 = 8.428039434587095;
		const _returnValueHomU2g6 = await _startVertexFSggFG.addEdge(_edgefATbZV7)
		const _returnValueJaYLN0j = await _startVertexFSggFG.getNeighbors()
		const _vertexjjdDeGn = null;
		const _returnValueco3mz0a = await _startVertexFSggFG.hasNeighbor(_vertexjjdDeGn)
		const _returnValueW1T5C64 = await dijkstra(_graphjqFyn8h, _startVertexFSggFG)
	});
})