export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _returnValueY1TKKet = "0Se";
		const _getAllVerticesiyXTLXA = () => { return _returnValueY1TKKet };
		const _returnValueuX0PGEo = 5.785098001586256;
		const _getVertexByKeyu3ogLbV = () => { return _returnValueuX0PGEo };
		const _returnValueYscm0s = null;
		const _getNeighborsSopncc2 = () => { return _returnValueYscm0s };
		const _returnValuehr9TL77 = null;
		const _findEdgeYyUHgQj = () => { return _returnValuehr9TL77 };
		const _graphBW23C2G = {
			"getAllVertices": _getAllVerticesiyXTLXA,
		"getVertexByKey": _getVertexByKeyu3ogLbV,
		"getNeighbors": _getNeighborsSopncc2,
		"findEdge": _findEdgeYyUHgQj
	}
		const _returnValueXQPHb4O = "ETD3lOcgm7T0ZtXq";
		const _returnValueGQkCgGX = () => { return _returnValueXQPHb4O };
		const _getKeyx2VodhD = () => { return _returnValueGQkCgGX };
		const _startVertexjjgHXAa = {
			"getKey": _getKeyx2VodhD
	}
		const _returnValueXoSJJi2 = await bellmanFord(_graphBW23C2G, _startVertexjjgHXAa)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedgTMufmj = undefined;
		const _graphQGhYK8c = new Graph(_isDirectedgTMufmj)
		const _returnValuevsWMkNO = await _graphQGhYK8c.getAllEdges()
		const _returnValuelDJbfsV = await _graphQGhYK8c.getVerticesIndices()
		const _returnValueZDtjC27 = await _graphQGhYK8c.getAllVertices()
		const _returnValuehDVzeML = "V3rNmAusnG3z9vIhOR4nHZ4gz2YamXdcGBQ2JYQc4o5ytV81mBeFZYqaHYEVCoLUIgkhxIyLxrJaxDxmM";
		const _getKeyF38Prr9 = () => { return _returnValuehDVzeML };
		const _startVertexos6FwB = {
			"getKey": _getKeyF38Prr9
	}
		const _returnValueoNuxjU4 = await bellmanFord(_graphQGhYK8c, _startVertexos6FwB)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedxvCSvRR = false;
		const _graphm3xOlO = new Graph(_isDirectedxvCSvRR)
		const _returnValueltmd9Dm = 6.798512236513044;
		const _getKeySx2X9tV = () => { return _returnValueltmd9Dm };
		const _newVertextUbHRsz = {
			"getKey": _getKeySx2X9tV
	}
		const _returnValueyfgaf8k = await _graphm3xOlO.addVertex(_newVertextUbHRsz)
		const _arrayValueIyeblgj = {
		
	}
		const _arrayValueEskmEYM = 3.901421505563169;
		const _arrayValueIuPHGK = "hG2US0XNO7tonuSInzOJiWTyJms04Vheteb40etNcdnEwzHZGwJLiFU6Yeq462vSMMIG8AgDS2IQ0Z1NF9zxt1hjYdVHD5fhWis";
		const _vertexKeygQb9GcM = [_arrayValueIyeblgj, _arrayValueEskmEYM, _arrayValueIuPHGK]
		const _returnValueEuolVSd = await _graphm3xOlO.getVertexByKey(_vertexKeygQb9GcM)
		const _vertexKeyYH4MZYs = "jlzvx7s7T3qwoghOW6Qkx2LjiV";
		const _returnValueSlbhakv = await _graphm3xOlO.getVertexByKey(_vertexKeyYH4MZYs)
		const _vertexKeyq2vPuLK = true;
		const _returnValueKnQRvZI = await _graphm3xOlO.getVertexByKey(_vertexKeyq2vPuLK)
		const _valueNOzu1r1 = true;
		const _returnValueFx0f4MT = {
		
	}
		const _keyCallbackF8dAUCA = () => { return _returnValueFx0f4MT };
		const _startVertexPEj5JL = new DisjointSetItem(_valueNOzu1r1, _keyCallbackF8dAUCA)
		const _returnValueI8vkSV = await _startVertexPEj5JL.getRank()
		const _returnValueoJ3Czc = await _startVertexPEj5JL.isRoot()
		const _returnValuedTxXs9 = await _startVertexPEj5JL.getRoot()
		const _valueG7l4JlX = false;
		const _returnValuexm8l0n9 = 4.778348304397312;
		const _keyCallbackO8jkryS = () => { return _returnValuexm8l0n9 };
		const _childItemPBvbvD = new DisjointSetItem(_valueG7l4JlX, _keyCallbackO8jkryS)
		const _returnValueMU1JwPk = await _childItemPBvbvD.getRank()
		const _returnValueYlkbMcQ = await _childItemPBvbvD.getRank()
		const _returnValueFxBkPPq = await _startVertexPEj5JL.addChild(_childItemPBvbvD)
		const _valueXh7BsqB = "YfBVEePzIWoFez2kCJlhPTS5wQ";
		const _arrayValuebTjFLDu = "rPJnPYzWxOSCF5pFfnLpa7Q7Qf9oIE478ePk";
		const _returnValueSUCqmpe = [_arrayValuebTjFLDu]
		const _keyCallbackEoGqapU = () => { return _returnValueSUCqmpe };
		const _childItemrsJ793H = new DisjointSetItem(_valueXh7BsqB, _keyCallbackEoGqapU)
		const _returnValuenuhrvm6 = await _childItemrsJ793H.isRoot()
		const _returnValuelbDX3Ff = await _childItemrsJ793H.isRoot()
		const _returnValuedEbYXui = await _startVertexPEj5JL.addChild(_childItemrsJ793H)
		const _returnValuey95nBYs = await bellmanFord(_graphm3xOlO, _startVertexPEj5JL)
	});
})