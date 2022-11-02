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
		const _returnValueDLcLjPJ = -9.273475006924786;
		const _getAllVerticesTsxvrmQ = () => { return _returnValueDLcLjPJ };
		const _returnValuesLZIqT5 = undefined;
		const _getAdjacencyMatrixk8aagEe = () => { return _returnValuesLZIqT5 };
		const _returnValueQFfQD47 = 0.08055211725090317;
		const _getVerticesIndicesWkJgKae = () => { return _returnValueQFfQD47 };
		const _graphgo0gHx = {
			"getAllVertices": _getAllVerticesTsxvrmQ,
		"getAdjacencyMatrix": _getAdjacencyMatrixk8aagEe,
		"getVerticesIndices": _getVerticesIndicesWkJgKae
	}
		const _returnValueUBNN24 = await bfTravellingSalesman(_graphgo0gHx)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedzX9vE2N = false;
		const _graphnH2YCc0 = new Graph(_isDirectedzX9vE2N)
		const _returnValuepDxUzBn = await _graphnH2YCc0.getWeight()
		const _returnValueEfUYPGB = await _graphnH2YCc0.getAllEdges()
		const _returnValueLvcvPjS = {
		
	}
		const _getKeySUJXk5e = () => { return _returnValueLvcvPjS };
		const _newVertexf8Raw0v = {
			"getKey": _getKeySUJXk5e
	}
		const _returnValuefNDZuJ3 = await _graphnH2YCc0.addVertex(_newVertexf8Raw0v)
		const _returnValueCt1MOUq = await bfTravellingSalesman(_graphnH2YCc0)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedzgt2CnP = false;
		const _graphOSl2vQ = new Graph(_isDirectedzgt2CnP)
		const _valuewYNMjkR = -4.185648821055908;
		const _returnValueTxFAcDs = null;
		const _returnValueMlZY40z = () => { return _returnValueTxFAcDs };
		const _keyCallbackFXUNfga = () => { return _returnValueMlZY40z };
		const _startVertexjD9bJsn = new DisjointSetItem(_valuewYNMjkR, _keyCallbackFXUNfga)
		const _returnValueQe4IDY = await _startVertexjD9bJsn.getRoot()
		const _returnValueAkhgQAM = await _startVertexjD9bJsn.getRank()
		const _endVertexbU2kVBq = undefined;
		const _returnValuemdibsxr = await _graphOSl2vQ.findEdge(_startVertexjD9bJsn, _endVertexbU2kVBq)
		const _returnValueMCRSyxW = await _graphOSl2vQ.reverse()
		const _returnValuecsHIAnu = await _graphOSl2vQ.getVerticesIndices()
		const _valuexTNlnxw = false;
		const _newVertexHRW3AG0 = new GraphVertex(_valuexTNlnxw)
		const _returnValueozTiJRM = await _newVertexHRW3AG0.getNeighbors()
		const _returnValueaxqOzEl = await _newVertexHRW3AG0.getNeighbors()
		const _requiredEdgeppSbtyl = null;
		const _returnValuenuIHUCc = await _newVertexHRW3AG0.hasEdge(_requiredEdgeppSbtyl)
		const _returnValueWX8X0g1 = await _graphOSl2vQ.addVertex(_newVertexHRW3AG0)
		const _returnValueZH4nVKh = await _graphOSl2vQ.reverse()
		const _returnValuehdJ0X5M = await bfTravellingSalesman(_graphOSl2vQ)
	});
})