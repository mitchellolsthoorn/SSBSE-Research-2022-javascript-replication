export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _graphacj4LuB = 6.972732579065909;
		const _returnValueL9UiAQ = await bfTravellingSalesman(_graphacj4LuB)
	});

	it('test for bfTravellingSalesman', async () => {
		const _returnValueFEPunmc = 9.237889139728846;
		const _getAllVerticeskct0oA = () => { return _returnValueFEPunmc };
		const _returnValuetY6iLzW = "cZR9LDCOWOE6JDOBFNJrqqKsUBigC2Cw6ofgK8XjyVKaitszQdXp6SzEy6TPY3H8w7aJ";
		const _returnValueNMhuckO = () => { return _returnValuetY6iLzW };
		const _returnValuecR1nRpx = () => { return _returnValueNMhuckO };
		const _getAdjacencyMatrixKd9yCnh = () => { return _returnValuecR1nRpx };
		const _returnValuemJxNYye = undefined;
		const _getVerticesIndicesOxNf2Kz = () => { return _returnValuemJxNYye };
		const _graphwprqFyQ = {
			"getAllVertices": _getAllVerticeskct0oA,
		"getAdjacencyMatrix": _getAdjacencyMatrixKd9yCnh,
		"getVerticesIndices": _getVerticesIndicesOxNf2Kz
	}
		const _returnValueCkgJ6nt = await bfTravellingSalesman(_graphwprqFyQ)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedEknD7h = true;
		const _graphAmPU7AK = new Graph(_isDirectedEknD7h)
		const _returnValuenOGt9Pi = {
		
	}
		const _arrayValueWSpamcL = () => { return _returnValuenOGt9Pi };
		const _arrayValueBkBg4c0 = false;
		const _arrayValueHtPO2Y9 = [_arrayValueWSpamcL, _arrayValueBkBg4c0]
		const _arrayValueUZocgmX = null;
		const _returnValueVyY1SCs = [_arrayValueHtPO2Y9, _arrayValueUZocgmX]
		const _getKeyuf7ZWZ = () => { return _returnValueVyY1SCs };
		const _newVertexLIUiOj5 = {
			"getKey": _getKeyuf7ZWZ
	}
		const _returnValuezHna9JR = await _graphAmPU7AK.addVertex(_newVertexLIUiOj5)
		const _returnValueZCwDXt = await bfTravellingSalesman(_graphAmPU7AK)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirected3asv0V = false;
		const _graphIcTqrdB = new Graph(_isDirected3asv0V)
		const _arrayValueFWCcw3w = "eC7EtaRRp7RRNI45Qmf7YtW6pjOLTsF2DiqCCld";
		const _arrayValuecMkXRUw = 5.27624895981246;
		const _returnValueoZQ1fuc = [_arrayValueFWCcw3w, _arrayValuecMkXRUw]
		const _valuePTxKKVk = () => { return _returnValueoZQ1fuc };
		const _newVertexyKBiw9A = new GraphVertex(_valuePTxKKVk)
		const _returnValuePxJMAvv = await _newVertexyKBiw9A.getEdges()
		const _returnValuezvdDu0r = await _newVertexyKBiw9A.getDegree()
		const _returnValueBqhfcED = null;
		const _vertexEiU42xS = () => { return _returnValueBqhfcED };
		const _returnValueXk4RSgS = await _newVertexyKBiw9A.findEdge(_vertexEiU42xS)
		const _returnValueFLPu6vD = await _graphIcTqrdB.addVertex(_newVertexyKBiw9A)
		const _returnValueOoWuxyh = await bfTravellingSalesman(_graphIcTqrdB)
	});
})