export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _arrayValueu7tnGsK = "8kqilRGaGCQO3";
		const _arrayValueJqQQYym = true;
		const _arrayValueDqWOvmL = false;
		const _returnValuezQcv29g = [_arrayValueu7tnGsK, _arrayValueJqQQYym, _arrayValueDqWOvmL]
		const _getAllVerticesDKfnJIe = () => { return _returnValuezQcv29g };
		const _getVertexByKeyBTYrwA = null;
		const _getNeighborsaOneQkA = "rcU2CtEhrpQWjwad5LH6UhNJR";
		const _arrayValueRFuQOBP = "Jt";
		const _returnValueY9XRASP = [_arrayValueRFuQOBP]
		const _findEdgeWvkBRu2 = () => { return _returnValueY9XRASP };
		const _graphXK5tVRq = {
			"getAllVertices": _getAllVerticesDKfnJIe,
		"getVertexByKey": _getVertexByKeyBTYrwA,
		"getNeighbors": _getNeighborsaOneQkA,
		"findEdge": _findEdgeWvkBRu2
	}
		const _arrayValuePYYr6p = undefined;
		const _arrayValuegzmVg1 = undefined;
		const _arrayValueDX5xj2o = "Ip2W6NXaRgBGYowHdKZTOtmMtXAKfiqQuG58lg7KafriQRB3jwv3gchkUDh4YMydeuoaob3dQPuX";
		const _returnValueQCYK4X = [_arrayValuePYYr6p, _arrayValuegzmVg1, _arrayValueDX5xj2o]
		const _getKeyK8nKA88 = () => { return _returnValueQCYK4X };
		const _startVertexUYtPtWt = {
			"getKey": _getKeyK8nKA88
	}
		const _returnValueZPHxbju = await bellmanFord(_graphXK5tVRq, _startVertexUYtPtWt)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedulN1ZMt = false;
		const _graphjyoStto = new Graph(_isDirectedulN1ZMt)
		const _returnValuehUGXS4H = await _graphjyoStto.getAllEdges()
		const _returnValueu5iPzpD = await _graphjyoStto.toString()
		const _arrayValuewl8R4L = null;
		const _arrayValuerh70eB6 = 8.07296776351587;
		const _returnValueZ8NxM39 = [_arrayValuewl8R4L, _arrayValuerh70eB6]
		const _getKeyGhmFTx8 = () => { return _returnValueZ8NxM39 };
		const _startVertexzvLO6th = {
			"getKey": _getKeyGhmFTx8
	}
		const _returnValuehhWb8TE = await bellmanFord(_graphjyoStto, _startVertexzvLO6th)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedcF9u7W = true;
		const _graphWqDuvMr = new Graph(_isDirectedcF9u7W)
		const _returnValueMx96mBD = undefined;
		const _getKeyB4lnbSM = () => { return _returnValueMx96mBD };
		const _newVertexRrZ6Znc = {
			"getKey": _getKeyB4lnbSM
	}
		const _returnValueGYPFXkq = await _graphWqDuvMr.addVertex(_newVertexRrZ6Znc)
		const _returnValuemRvkDQN = await _graphWqDuvMr.reverse()
		const _returnValueuwUm8k4 = await _graphWqDuvMr.toString()
		const _returnValueMxr9P3I = undefined;
		const _getKeyflYolsM = () => { return _returnValueMxr9P3I };
		const _startVertexzqLQmW8 = {
			"getKey": _getKeyflYolsM
	}
		const _returnValueI6aeAHh = await bellmanFord(_graphWqDuvMr, _startVertexzqLQmW8)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedhnYD0mj = true;
		const _graphkwtG7ZZ = new Graph(_isDirectedhnYD0mj)
		const _returnValueua3bM0 = await _graphkwtG7ZZ.getAdjacencyMatrix()
		const _returnValueg9zjeT = await _graphkwtG7ZZ.getVerticesIndices()
		const _returnValuekVhWUhp = "rwxXkqPLVwcwLbI6Yhw4lQEz83bRkkwyOyYkFJKB5";
		const _getKeyofjZDKf = () => { return _returnValuekVhWUhp };
		const _newVertexnEQnpt = {
			"getKey": _getKeyofjZDKf
	}
		const _returnValueawwDVLz = await _graphkwtG7ZZ.addVertex(_newVertexnEQnpt)
		const _returnValueQRrBiOP = {
		
	}
		const _getNeighborsJDKyJDG = () => { return _returnValueQRrBiOP };
		const _vertexbPXuJKd = {
			"getNeighbors": _getNeighborsJDKyJDG
	}
		const _returnValues1mRoSY = await _graphkwtG7ZZ.getNeighbors(_vertexbPXuJKd)
		const _returnValueXznkwsT = await _graphkwtG7ZZ.getAllVertices()
		const _returnValueOCUFEbg = 3.294668061456802;
		const _getKeydY7fGDk = () => { return _returnValueOCUFEbg };
		const _startVertexPErbkcf = {
			"getKey": _getKeydY7fGDk
	}
		const _returnValueaXGXYpT = await bellmanFord(_graphkwtG7ZZ, _startVertexPErbkcf)
	});
})