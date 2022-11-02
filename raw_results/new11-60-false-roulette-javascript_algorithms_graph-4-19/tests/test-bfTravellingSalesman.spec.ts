export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _graphaBRRbEk = "DP8uqmuUfZ1hjRHn6KE0dTvxD6ymuKJJofthnAnBcv63I21oy7O";
		const _returnValuerTlzoLx = await bfTravellingSalesman(_graphaBRRbEk)
	});

	it('test for bfTravellingSalesman', async () => {
		const _arrayValuezUIvHs8 = 5.337724450578488;
		const _arrayValueaBQgAD1 = undefined;
		const _returnValueJxc6fU = [_arrayValuezUIvHs8, _arrayValueaBQgAD1]
		const _getAllVerticesMK5Q0Su = () => { return _returnValueJxc6fU };
		const _arrayValuedepUl5 = null;
		const _arrayValueOlpyRoA = undefined;
		const _arrayValue7MgnCx = false;
		const _returnValueoH3i7HZ = [_arrayValuedepUl5, _arrayValueOlpyRoA, _arrayValue7MgnCx]
		const _getAdjacencyMatrixuf3Y3BP = () => { return _returnValueoH3i7HZ };
		const _returnValueNBGadDd = undefined;
		const _returnValuexUQXEGg = () => { return _returnValueNBGadDd };
		const _getVerticesIndicesZ3IwR8S = () => { return _returnValuexUQXEGg };
		const _graphBy95bJn = {
			"getAllVertices": _getAllVerticesMK5Q0Su,
		"getAdjacencyMatrix": _getAdjacencyMatrixuf3Y3BP,
		"getVerticesIndices": _getVerticesIndicesZ3IwR8S
	}
		const _returnValueKuVm1zr = await bfTravellingSalesman(_graphBy95bJn)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedV7ZGkvz = false;
		const _graphLFeehhO = new Graph(_isDirectedV7ZGkvz)
		const _returnValueNXevmLM = "edeeRuohRrcTTsQg7KeIOt6zYtWsKDkG77grORK";
		const _getKeyNoLkfO3 = () => { return _returnValueNXevmLM };
		const _startVertex17lVM8 = {
			"getKey": _getKeyNoLkfO3
	}
		const _endVertexpEHmYY = 7.964615568501095;
		const _returnValuehK5Xoza = await _graphLFeehhO.findEdge(_startVertex17lVM8, _endVertexpEHmYY)
		const _returnValueUbUh3JA = 8.259166604170957;
		const _getKeyp05c82b = () => { return _returnValueUbUh3JA };
		const _newVertexdNYi5Jl = {
			"getKey": _getKeyp05c82b
	}
		const _returnValueon6w7Nb = await _graphLFeehhO.addVertex(_newVertexdNYi5Jl)
		const _returnValueAqCrS4x = await _graphLFeehhO.getWeight()
		const _returnValueysgLxIl = await _graphLFeehhO.getAllEdges()
		const _returnValuekx0Wu8I = await bfTravellingSalesman(_graphLFeehhO)
	});
})