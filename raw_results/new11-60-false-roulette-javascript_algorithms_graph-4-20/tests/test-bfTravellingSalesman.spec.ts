export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _returnValue5axN8W = true;
		const _getAllVerticesRj7W87A = () => { return _returnValue5axN8W };
		const _returnValueSxm3DUE = true;
		const _getAdjacencyMatrixuMlZhBD = () => { return _returnValueSxm3DUE };
		const _returnValueP9dCudr = {
		
	}
		const _getVerticesIndicesF1H6e4t = () => { return _returnValueP9dCudr };
		const _graphqe5Dcm = {
			"getAllVertices": _getAllVerticesRj7W87A,
		"getAdjacencyMatrix": _getAdjacencyMatrixuMlZhBD,
		"getVerticesIndices": _getVerticesIndicesF1H6e4t
	}
		const _returnValueNdRm3XU = await bfTravellingSalesman(_graphqe5Dcm)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedyWANMZG = false;
		const _graphLu2fVz8 = new Graph(_isDirectedyWANMZG)
		const _arrayValuelCvbUml = undefined;
		const _arrayValueq7DcHB8 = {
		
	}
		const _arrayValueSOUzVjo = 2.130823434052555;
		const _arrayValueD6DrUlD = [_arrayValuelCvbUml, _arrayValueq7DcHB8, _arrayValueSOUzVjo]
		const _returnValuenvba9wN = [_arrayValueD6DrUlD]
		const _getKeypKEM6VK = () => { return _returnValuenvba9wN };
		const _newVertexvK0bkgZ = {
			"getKey": _getKeypKEM6VK
	}
		const _returnValueOza0QnV = await _graphLu2fVz8.addVertex(_newVertexvK0bkgZ)
		const _returnValueqIy5EUC = await _graphLu2fVz8.getAllEdges()
		const _returnValuehikwzr2 = {
		
	}
		const _getNeighborsitllaLH = () => { return _returnValuehikwzr2 };
		const _vertexmSPHPP9 = {
			"getNeighbors": _getNeighborsitllaLH
	}
		const _returnValuerR1hyw9 = await _graphLu2fVz8.getNeighbors(_vertexmSPHPP9)
		const _returnValueg0bNT1M = await _graphLu2fVz8.getVerticesIndices()
		const _returnValueY0qEuYg = await bfTravellingSalesman(_graphLu2fVz8)
	});
})