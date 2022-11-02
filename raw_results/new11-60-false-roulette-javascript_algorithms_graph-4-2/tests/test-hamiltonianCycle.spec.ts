export {}
import hamiltonianCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/hamiltonian-cycle/hamiltonianCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('hamiltonianCycle', () => {
	it('test for hamiltonianCycle', async () => {
		const _getVerticesIndicesealGF4w = {
		
	}
		const _returnValueNZMn3xA = null;
		const _getAdjacencyMatrixRXwtW7H = () => { return _returnValueNZMn3xA };
		const _returnValuecUJH1ej = "l97IO7n86NQ1uoyOyKtYDatIoPOeQMAHDFtGC5vSIaGBGuxilt4D65XdVNF";
		const _getAllVerticesr7AxcvB = () => { return _returnValuecUJH1ej };
		const _graphQkdzrAW = {
			"getVerticesIndices": _getVerticesIndicesealGF4w,
		"getAdjacencyMatrix": _getAdjacencyMatrixRXwtW7H,
		"getAllVertices": _getAllVerticesr7AxcvB
	}
		const _returnValueTQJ3vOp = await hamiltonianCycle(_graphQkdzrAW)
	});

	it('test for hamiltonianCycle', async () => {
		const _returnValueIZhQPY = -2.964814728212909;
		const _getVerticesIndicesGD8LQuk = () => { return _returnValueIZhQPY };
		const _returnValuetJT6xhm = []
		const _getAdjacencyMatrixS8hSz1r = () => { return _returnValuetJT6xhm };
		const _returnValueSxen8rz = true;
		const _getAllVerticesCTJzuuH = () => { return _returnValueSxen8rz };
		const _graphO6NZZV3 = {
			"getVerticesIndices": _getVerticesIndicesGD8LQuk,
		"getAdjacencyMatrix": _getAdjacencyMatrixS8hSz1r,
		"getAllVertices": _getAllVerticesCTJzuuH
	}
		const _returnValuerhkEjXI = await hamiltonianCycle(_graphO6NZZV3)
	});

	it('test for hamiltonianCycle', async () => {
		const _isDirectedcJS8HFn = false;
		const _graphBzpN0Cp = new Graph(_isDirectedcJS8HFn)
		const _vertexKeybWckRKG = true;
		const _returnValueGLisrqP = await _graphBzpN0Cp.getVertexByKey(_vertexKeybWckRKG)
		const _valuejgxUCG3 = {
		
	}
		const _newVertexGbPKouJ = new GraphVertex(_valuejgxUCG3)
		const _requiredEdgeieFwX2Z = true;
		const _returnValue52sQCH = await _newVertexGbPKouJ.hasEdge(_requiredEdgeieFwX2Z)
		const _returnValueSEjaWzf = await _newVertexGbPKouJ.getKey()
		const _vertexRlvGtQc = {
		
	}
		const _returnValuenYYdJa1 = await _newVertexGbPKouJ.findEdge(_vertexRlvGtQc)
		const _returnValuekgifEjS = await _newVertexGbPKouJ.getKey()
		const _returnValueLlcoU83 = await _graphBzpN0Cp.addVertex(_newVertexGbPKouJ)
		const _returnValueQXM1yHm = await hamiltonianCycle(_graphBzpN0Cp)
	});
})