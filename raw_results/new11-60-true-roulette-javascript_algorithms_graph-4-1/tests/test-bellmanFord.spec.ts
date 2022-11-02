export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _getAllVerticesWa6vbW = null;
		const _getVertexByKeyt16ZlUG = "Pib3G0urWBID6QjU65UL6witJLf2K5oi7HZvVL355lj";
		const _arrayValuenqnjGjp = 0.28091768566781816;
		const _arrayValueCKHKGeK = 1.1134136682155304;
		const _arrayValuem7BLWAX = {
		
	}
		const _returnValuen6HKKcB = [_arrayValuenqnjGjp, _arrayValueCKHKGeK, _arrayValuem7BLWAX]
		const _getNeighborsPt7SnIa = () => { return _returnValuen6HKKcB };
		const _returnValuehKZpYzB = undefined;
		const _findEdgeFlvf5kH = () => { return _returnValuehKZpYzB };
		const _graphinGS54k = {
			"getAllVertices": _getAllVerticesWa6vbW,
		"getVertexByKey": _getVertexByKeyt16ZlUG,
		"getNeighbors": _getNeighborsPt7SnIa,
		"findEdge": _findEdgeFlvf5kH
	}
		const _startVertexgubA2Xv = "djYLYicv48ygLa8vXlNyLEfVSccwY9Udn1HBu5wKk2hMYf9Xzpfv7IvL4wjFuFlAxWbmzVv5cpo5D2cLJe4o5";
		const _returnValueJBAZGf2 = await bellmanFord(_graphinGS54k, _startVertexgubA2Xv)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedolnAPH8 = true;
		const _graphklljpu = new Graph(_isDirectedolnAPH8)
		const _returnValuerDkpU2Z = await _graphklljpu.getAllVertices()
		const _vertexKeytoeLAhR = undefined;
		const _returnValue3OaiXb = await _graphklljpu.getVertexByKey(_vertexKeytoeLAhR)
		const _returnValueNsuB4NB = await _graphklljpu.reverse()
		const _arrayValueEoRcMeQ = "ODiIUA1tbi42";
		const _arrayValueCGMDBau = false;
		const _returnValueUnvGrI0 = [_arrayValueEoRcMeQ, _arrayValueCGMDBau]
		const _getKeyMwqnYg6 = () => { return _returnValueUnvGrI0 };
		const _startVertexfyrTRez = {
			"getKey": _getKeyMwqnYg6
	}
		const _returnValueOYoSo6V = await bellmanFord(_graphklljpu, _startVertexfyrTRez)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedpsjHKpU = false;
		const _graphCykzNdm = new Graph(_isDirectedpsjHKpU)
		const _returnValuehbcMm0o = await _graphCykzNdm.getAdjacencyMatrix()
		const _returnValuentlga7m = "pKTKx5zWsDqwgMxeLis2Xqz79QFBRCUF20LwGeDHBtfstco8SafWCDxkASh4Q0Fov8Y9kOfs7td9aWBIxE4tYPITU";
		const _valueARWm8eN = () => { return _returnValuentlga7m };
		const _startVertexRxIJjkB = new GraphVertex(_valueARWm8eN)
		const _returnValuec6RHw08 = null;
		const _returnValuelfqrokr = () => { return _returnValuec6RHw08 };
		const _vertexfu0OS53 = () => { return _returnValuelfqrokr };
		const _returnValuexYyESQo = await _startVertexRxIJjkB.hasNeighbor(_vertexfu0OS53)
		const _requiredEdgeYf8venc = "S7jRPuRAQst4233eTYbFedHaxjPrpVdJQaJNU3HOTWbzK963KtzN";
		const _returnValueyujpnvQ = await _startVertexRxIJjkB.hasEdge(_requiredEdgeYf8venc)
		const _returnValueyDswbvK = await _startVertexRxIJjkB.deleteAllEdges()
		const _returnValueW7ML0mW = await _startVertexRxIJjkB.deleteAllEdges()
		const _endVertexVW1HEyP = null;
		const _returnValueHbzHkVv = await _graphCykzNdm.findEdge(_startVertexRxIJjkB, _endVertexVW1HEyP)
		const _valueMEjTQnJ = "ezuLZhDZdwi8vEUpGxwBiQhUqK0GzLpOcvwZyiSOuqIsVGdkpi00DmFuKbGFxg2FEHOmvNPJfPDhBEQ5Kzs";
		const _newVertexFGw93gk = new GraphVertex(_valueMEjTQnJ)
		const _returnValueOenR6tl = await _newVertexFGw93gk.getNeighbors()
		const _returnValueEcZdwjd = await _graphCykzNdm.addVertex(_newVertexFGw93gk)
		const _valueFSn3dk9 = false;
		const _returnValuexFIa2aG = true;
		const _keyCallbackqyPocN = () => { return _returnValuexFIa2aG };
		const _startVertexA2XYWj7 = new DisjointSetItem(_valueFSn3dk9, _keyCallbackqyPocN)
		const _returnValuetD4m5Sg = await _startVertexA2XYWj7.getChildren()
		const _returnValuesfPxTpu = await _startVertexA2XYWj7.getChildren()
		const _returnValueMiKcLs1 = await _startVertexA2XYWj7.getRoot()
		const _returnValueKDW6fpF = null;
		const _getKeysSPRJ7n = () => { return _returnValueKDW6fpF };
		const _returnValueVr9OC2M = {
		
	}
		const _setParentjl5pWP = () => { return _returnValueVr9OC2M };
		const _childItemTBr7wOQ = {
			"getKey": _getKeysSPRJ7n,
		"setParent": _setParentjl5pWP
	}
		const _returnValueElCMCMv = await _startVertexA2XYWj7.addChild(_childItemTBr7wOQ)
		const _returnValuefqaarDP = await _startVertexA2XYWj7.isRoot()
		const _returnValueDnNTbqY = await bellmanFord(_graphCykzNdm, _startVertexA2XYWj7)
	});
})