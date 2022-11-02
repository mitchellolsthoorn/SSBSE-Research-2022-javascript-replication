export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _returnValueT5nf64 = true;
		const _getAllVerticesk8VpNcl = () => { return _returnValueT5nf64 };
		const _returnValueCovnmLx = null;
		const _getAdjacencyMatrixLpJydCM = () => { return _returnValueCovnmLx };
		const _arrayValueyj9m71 = undefined;
		const _arrayValueHbCL5aU = undefined;
		const _returnValueo2bJQXf = [_arrayValueyj9m71, _arrayValueHbCL5aU]
		const _getVerticesIndices0Uh7tb = () => { return _returnValueo2bJQXf };
		const _graphzi4Tdzj = {
			"getAllVertices": _getAllVerticesk8VpNcl,
		"getAdjacencyMatrix": _getAdjacencyMatrixLpJydCM,
		"getVerticesIndices": _getVerticesIndices0Uh7tb
	}
		const _returnValueryR5vZf = await bfTravellingSalesman(_graphzi4Tdzj)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedxpao0mh = false;
		const _graphcwvqulT = new Graph(_isDirectedxpao0mh)
		const _returnValueXZkAyAJ = -7.826722405558659;
		const _getKeyyL4UvRP = () => { return _returnValueXZkAyAJ };
		const _newVertextNUAF95 = {
			"getKey": _getKeyyL4UvRP
	}
		const _returnValuebrF41pt = await _graphcwvqulT.addVertex(_newVertextNUAF95)
		const _returnValueSzr90GE = await _graphcwvqulT.getVerticesIndices()
		const _returnValuexCXVIJK = await bfTravellingSalesman(_graphcwvqulT)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedZECbK34 = undefined;
		const _graphVsisGNn = new Graph(_isDirectedZECbK34)
		const _returnValuepVwezYq = 1.469428136115038;
		const _valueAiZqip0 = () => { return _returnValuepVwezYq };
		const _newVertexLrtdQ6 = new GraphVertex(_valueAiZqip0)
		const _returnValueDpKmUSh = await _newVertexLrtdQ6.getKey()
		const _arrayValuekUuW5Vj = undefined;
		const _arrayValueqFefDhH = 8.483723949688024;
		const _arrayValueZDnu0S7 = undefined;
		const _arrayValueaYGIv65 = [_arrayValueqFefDhH, _arrayValueZDnu0S7]
		const _vertexwqeBelD = [_arrayValuekUuW5Vj, _arrayValueaYGIv65]
		const _returnValuebjxZsiW = await _newVertexLrtdQ6.hasNeighbor(_vertexwqeBelD)
		const _requiredEdgeKcvhzZ7 = "Xa0";
		const _returnValueeLoFdJR = await _newVertexLrtdQ6.hasEdge(_requiredEdgeKcvhzZ7)
		const _requiredEdgeDLwEdFL = "LXQppHPVQ8t";
		const _returnValueWn4VjdO = await _newVertexLrtdQ6.hasEdge(_requiredEdgeDLwEdFL)
		const _requiredEdgetGp4hUv = {
		
	}
		const _returnValuea4Jw5w = await _newVertexLrtdQ6.hasEdge(_requiredEdgetGp4hUv)
		const _returnValueedPv4fr = await _graphVsisGNn.addVertex(_newVertexLrtdQ6)
		const _arrayValueMJ8F10 = -9.768381140491437;
		const _arrayValueFK6NoyJ = "gznsMBAtk4zlCvQFxLJFjzN4rXYX0RC6WFk3KoTcLQTd8pcdgjAiLkKKHbnm3zOCJ57zK4zqVsaqH9NtRmzyR2C";
		const _returnValueyHbHAA = [_arrayValueMJ8F10, _arrayValueFK6NoyJ]
		const _valuedWp1zHe = () => { return _returnValueyHbHAA };
		const _returnValueYQS9c8k = true;
		const _keyCallbackod8uZpf = () => { return _returnValueYQS9c8k };
		const _startVertexQGoAzNv = new DisjointSetItem(_valuedWp1zHe, _keyCallbackod8uZpf)
		const _returnValuen1bchT6 = "";
		const _addChildRVic3Wa = () => { return _returnValuen1bchT6 };
		const _parentItemr9TvdqL = {
			"addChild": _addChildRVic3Wa
	}
		const _forceSettingParentChildSaimIB = true;
		const _returnValueGNVniOG = await _startVertexQGoAzNv.setParent(_parentItemr9TvdqL, _forceSettingParentChildSaimIB)
		const _returnValuef18cr7Y = await _startVertexQGoAzNv.getRank()
		const _returnValueJKeh5HZ = await _startVertexQGoAzNv.getRank()
		const _arrayValuebXd3DF2 = null;
		const _endVertexULECiGv = [_arrayValuebXd3DF2]
		const _returnValuei1cmA3M = await _graphVsisGNn.findEdge(_startVertexQGoAzNv, _endVertexULECiGv)
		const _valueUfkrhGn = 3.2435168995103396;
		const _returnValueTmRYImp = true;
		const _keyCallbackTyOd6J = () => { return _returnValueTmRYImp };
		const _newVertexeybeAz8 = new DisjointSetItem(_valueUfkrhGn, _keyCallbackTyOd6J)
		const _returnValueddzRnF5 = await _newVertexeybeAz8.isRoot()
		const _returnValueyOiJc5A = await _newVertexeybeAz8.getChildren()
		const _returnValueKEVZkcI = await _graphVsisGNn.addVertex(_newVertexeybeAz8)
		const _returnValuepkbASZ0 = await _graphVsisGNn.getVerticesIndices()
		const _returnValueBk8wiOf = false;
		const _vertexKeyhxSQG76 = () => { return _returnValueBk8wiOf };
		const _returnValueIfujk4 = await _graphVsisGNn.getVertexByKey(_vertexKeyhxSQG76)
		const _returnValueJP34lf6 = await bfTravellingSalesman(_graphVsisGNn)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedE8HC6zR = true;
		const _graphdMlM6h = new Graph(_isDirectedE8HC6zR)
		const _arrayValueJ7McdBF = -3.339053011507488;
		const _arrayValuefwqp6nQ = false;
		const _arrayValuewesIPJ = "rsDEszvdzupTTYgh278C81J4yMVvMlFxmptk6JOdSVXKb3ekj9bUlcQkoqgs6JDkUuVAlQLtF06xz1XPI8Ia2e3iq";
		const _returnValuehqT96NS = [_arrayValueJ7McdBF, _arrayValuefwqp6nQ, _arrayValuewesIPJ]
		const _valueSiiOLCL = () => { return _returnValuehqT96NS };
		const _newVertexrOGbxA8 = new GraphVertex(_valueSiiOLCL)
		const _returnValueGhcj5Mj = await _newVertexrOGbxA8.getDegree()
		const _vertexqaiIRZd = undefined;
		const _returnValueonc9dM = await _newVertexrOGbxA8.hasNeighbor(_vertexqaiIRZd)
		const _returnValueySJFVTF = await _newVertexrOGbxA8.getDegree()
		const _returnValueHOInL1w = await _newVertexrOGbxA8.getKey()
		const _returnValueadQb8Yh = await _graphdMlM6h.addVertex(_newVertexrOGbxA8)
		const _returnValuePpQ1AFR = await bfTravellingSalesman(_graphdMlM6h)
	});
})