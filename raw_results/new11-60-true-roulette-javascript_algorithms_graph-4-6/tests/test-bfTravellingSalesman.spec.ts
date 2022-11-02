export {}
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _isDirectedQWObtFs = true;
		const _grapheaziO1k = new Graph(_isDirectedQWObtFs)
		const _vertexKeypdYm8wR = "mcI9jUv5rjjG3QiBIa8XDbMjhJ";
		const _returnValueNuuoEDe = await _grapheaziO1k.getVertexByKey(_vertexKeypdYm8wR)
		const _returnValueW6ldNSL = await _grapheaziO1k.getVerticesIndices()
		const _returnValueUDcr9E = -5.973709213903801;
		const _getNeighborsakcLDrT = () => { return _returnValueUDcr9E };
		const _vertexMHShewd = {
			"getNeighbors": _getNeighborsakcLDrT
	}
		const _returnValueDHhxloL = await _grapheaziO1k.getNeighbors(_vertexMHShewd)
		const _returnValueMmDnZoL = false;
		const _getNeighborsQGQlmyo = () => { return _returnValueMmDnZoL };
		const _vertexrN0Gm0Y = {
			"getNeighbors": _getNeighborsQGQlmyo
	}
		const _returnValuebBEnb2F = await _grapheaziO1k.getNeighbors(_vertexrN0Gm0Y)
		const _returnValuerJLOZw = await bfTravellingSalesman(_grapheaziO1k)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedtjF7vDl = true;
		const _graphXgs4YXj = new Graph(_isDirectedtjF7vDl)
		const _returnValueUv0Aa8 = await _graphXgs4YXj.getAdjacencyMatrix()
		const _valuelNe7hlJ = null;
		const _returnValueKXEMCLB = -4.489914305234168;
		const _keyCallbackigL9eeU = () => { return _returnValueKXEMCLB };
		const _newVertexSrZ7OBF = new DisjointSetItem(_valuelNe7hlJ, _keyCallbackigL9eeU)
		const _returnValueZRv2ct0 = await _newVertexSrZ7OBF.getKey()
		const _returnValueLXj3rmQ = await _newVertexSrZ7OBF.getChildren()
		const _valued07AtJV = 2.6143075547420764;
		const _keyCallbacknd6ILUn = "a6BWdVlSBCLTWWpoKHy6wxXbMVhr3Mqq2ywPOfWajt40NIoEeftv5tN5Xkj";
		const _parentItems5sHzhv = new DisjointSetItem(_valued07AtJV, _keyCallbacknd6ILUn)
		const _returnValue6FxjN8 = await _parentItems5sHzhv.getRank()
		const _returnValueAezB3v = await _parentItems5sHzhv.getRank()
		const _returnValueCIV4nFL = await _parentItems5sHzhv.getChildren()
		const _returnValueDekq6tZ = await _parentItems5sHzhv.getChildren()
		const _returnValueraz5Hvs = null;
		const _getKeyQKDVI20 = () => { return _returnValueraz5Hvs };
		const _returnValueneNpO7 = true;
		const _setParentCUImLF0 = () => { return _returnValueneNpO7 };
		const _childItemfJFHHVl = {
			"getKey": _getKeyQKDVI20,
		"setParent": _setParentCUImLF0
	}
		const _returnValuehJ1Klxp = await _parentItems5sHzhv.addChild(_childItemfJFHHVl)
		const _forceSettingParentChilduwMOOww = true;
		const _returnValueEDFzcP4 = await _newVertexSrZ7OBF.setParent(_parentItems5sHzhv, _forceSettingParentChilduwMOOww)
		const _returnValuefMYeoF6 = await _graphXgs4YXj.addVertex(_newVertexSrZ7OBF)
		const _returnValuenVtPrPj = await _graphXgs4YXj.getWeight()
		const _returnValueQoW4Rv = await bfTravellingSalesman(_graphXgs4YXj)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedtpqkkWS = true;
		const _graphmCfRTfB = new Graph(_isDirectedtpqkkWS)
		const _returnValuedx2AZ3K = await _graphmCfRTfB.getAdjacencyMatrix()
		const _valueyWrnmtN = "BNOU8daL3b6yJjJnJTTru1KgX2l86zlWItmXV1ZwWnMypWRVK7IUYMgb4jdMP9BDwqnc5wXEgDE4bj7";
		const _newVertexpb2bmdI = new GraphVertex(_valueyWrnmtN)
		const _returnValuecsv2CuC = await _newVertexpb2bmdI.getEdges()
		const _returnValuet2JDul1 = await _graphmCfRTfB.addVertex(_newVertexpb2bmdI)
		const _returnValueG0tyvM8 = "OfysQ4Jl7HDFWjbD8SfIY5eqNFOSy4DMIUSZH7Tr1L5mDUZihmEwIceMAMsOKK1KYSfce1ASGAm26c8kptQ";
		const _getKeyGTWykSY = () => { return _returnValueG0tyvM8 };
		const _newVertexW8X4EZ = {
			"getKey": _getKeyGTWykSY
	}
		const _returnValueQsAOeCo = await _graphmCfRTfB.addVertex(_newVertexW8X4EZ)
		const _returnValuePytZC3f = await _graphmCfRTfB.reverse()
		const _returnValueiQARHCW = await bfTravellingSalesman(_graphmCfRTfB)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedQBfCphd = false;
		const _graphZ1iYDXc = new Graph(_isDirectedQBfCphd)
		const _valuerA9GDox = "h2stICwASv";
		const _newVertextQNGI7S = new GraphVertex(_valuerA9GDox)
		const _returnValueUw2gD9 = await _newVertextQNGI7S.getKey()
		const _requiredEdges0NCoTK = "3jtCTAAW5YAqon2ScHob95jk8MHsFMJi";
		const _returnValuerPHMqA1 = await _newVertextQNGI7S.hasEdge(_requiredEdges0NCoTK)
		const _returnValueLLN1AVW = await _graphZ1iYDXc.addVertex(_newVertextQNGI7S)
		const _returnValuefXfdGwn = await _graphZ1iYDXc.getAllEdges()
		const _vertexKeyN94opsm = {
		
	}
		const _returnValueoLmzEmv = await _graphZ1iYDXc.getVertexByKey(_vertexKeyN94opsm)
		const _returnValuebMdiAde = await bfTravellingSalesman(_graphZ1iYDXc)
	});
})