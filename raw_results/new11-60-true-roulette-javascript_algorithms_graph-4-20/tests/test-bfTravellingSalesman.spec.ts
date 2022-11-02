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
		const _returnValuejdlOFgu = -7.896581714095473;
		const _getAllVerticesCjWbfuw = () => { return _returnValuejdlOFgu };
		const _returnValuehNebIfJ = undefined;
		const _getAdjacencyMatrixxK9c4K = () => { return _returnValuehNebIfJ };
		const _returnValueB5TJA3l = "XPSuCuAJTCMrlO6LRSNzJo63tR5PjdEHeJmpXBwz39pFcr9W7YClcezVLPhuJYyWSyH8FV3acHr3x7rF8";
		const _getVerticesIndicesDspCrBW = () => { return _returnValueB5TJA3l };
		const _graphBnqa3Dm = {
			"getAllVertices": _getAllVerticesCjWbfuw,
		"getAdjacencyMatrix": _getAdjacencyMatrixxK9c4K,
		"getVerticesIndices": _getVerticesIndicesDspCrBW
	}
		const _returnValueB0pPaPn = await bfTravellingSalesman(_graphBnqa3Dm)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedoPmc94i = false;
		const _graphMXQAdr4 = new Graph(_isDirectedoPmc94i)
		const _returnValueo6ur3yD = "tCo";
		const _getKeyUxcFfOU = () => { return _returnValueo6ur3yD };
		const _newVertexGKYVV2T = {
			"getKey": _getKeyUxcFfOU
	}
		const _returnValuesArJlms = await _graphMXQAdr4.addVertex(_newVertexGKYVV2T)
		const _returnValueqtrtPvf = await _graphMXQAdr4.getVerticesIndices()
		const _returnValuelfWceQ = await bfTravellingSalesman(_graphMXQAdr4)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirecteddVcOqf5 = false;
		const _graphZKTNUR = new Graph(_isDirecteddVcOqf5)
		const _returnValue5pRpTd = await _graphZKTNUR.reverse()
		const _returnValueGyOTBNr = await _graphZKTNUR.toString()
		const _arrayValueoQbjutv = "NXbxQaXsI1unFztB566ppze86RhbV748eRu5gpE7LRvYQlWzBf3AkTd8t43vS";
		const _valueFZu4UwH = [_arrayValueoQbjutv]
		const _newVertexCiZvM2 = new GraphVertex(_valueFZu4UwH)
		const _returnValueEQruBK = await _newVertexCiZvM2.deleteAllEdges()
		const _returnValuegeMDkM7 = await _newVertexCiZvM2.getNeighbors()
		const _returnValueQfG7e2 = await _newVertexCiZvM2.deleteAllEdges()
		const _returnValuevOgIk7q = await _graphZKTNUR.addVertex(_newVertexCiZvM2)
		const _returnValueEUBsJF = await _graphZKTNUR.getAllVertices()
		const _returnValueenZ9cza = await bfTravellingSalesman(_graphZKTNUR)
	});
})