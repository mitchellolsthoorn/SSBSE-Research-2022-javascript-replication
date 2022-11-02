export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _returnValueMASL2KQ = null;
		const _returnValueSKX5xsd = () => { return _returnValueMASL2KQ };
		const _getAllVerticesNboA3in = () => { return _returnValueSKX5xsd };
		const _returnValuewTtyWL0 = 6.586342655674866;
		const _getAdjacencyMatrixxAschPL = () => { return _returnValuewTtyWL0 };
		const _returnValueGm9mZZ = undefined;
		const _getVerticesIndicesEJ6AdSz = () => { return _returnValueGm9mZZ };
		const _graphdALs2Pi = {
			"getAllVertices": _getAllVerticesNboA3in,
		"getAdjacencyMatrix": _getAdjacencyMatrixxAschPL,
		"getVerticesIndices": _getVerticesIndicesEJ6AdSz
	}
		const _returnValueF6h7N7n = await bfTravellingSalesman(_graphdALs2Pi)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedh8hDai = true;
		const _graphhyG9q7b = new Graph(_isDirectedh8hDai)
		const _valuet6R1XTU = undefined;
		const _returnValueIdDfj1D = {
		
	}
		const _keyCallbackiGnymy = () => { return _returnValueIdDfj1D };
		const _newVertexEY4dB2P = new DisjointSetItem(_valuet6R1XTU, _keyCallbackiGnymy)
		const _returnValue2JGlOB = await _newVertexEY4dB2P.getChildren()
		const _returnValueCs1Mesu = await _newVertexEY4dB2P.getKey()
		const _returnValue2wHwpy = await _graphhyG9q7b.addVertex(_newVertexEY4dB2P)
		const _returnValueoPc0CsL = await _graphhyG9q7b.getAllEdges()
		const _returnValueMOvALun = await bfTravellingSalesman(_graphhyG9q7b)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirecteds83GPf = true;
		const _graphLDF4B8l = new Graph(_isDirecteds83GPf)
		const _valuePPRWiad = -1.630555771536132;
		const _newVertex1BJ25S = new GraphVertex(_valuePPRWiad)
		const _returnValuePHJKWXm = await _newVertex1BJ25S.getDegree()
		const _arrayValuee5naSIQ = -6.637256517101401;
		const _arrayValuejZJbRLw = [_arrayValuee5naSIQ]
		const _requiredEdgeyufSDaY = [_arrayValuejZJbRLw]
		const _returnValueicRYZH1 = await _newVertex1BJ25S.hasEdge(_requiredEdgeyufSDaY)
		const _vertexuBB5Rvt = {
		
	}
		const _returnValueFaNJbfq = await _newVertex1BJ25S.hasNeighbor(_vertexuBB5Rvt)
		const _returnValueW9Ye6cY = await _newVertex1BJ25S.getNeighbors()
		const _returnValuevvfTZyy = await _graphLDF4B8l.addVertex(_newVertex1BJ25S)
		const _returnValueFptHhsf = await bfTravellingSalesman(_graphLDF4B8l)
	});
})