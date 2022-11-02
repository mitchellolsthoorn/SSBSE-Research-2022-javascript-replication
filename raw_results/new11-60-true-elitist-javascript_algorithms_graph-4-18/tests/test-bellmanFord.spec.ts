export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _returnValueiIv5tZ = null;
		const _getAllVerticesGwEa1iT = () => { return _returnValueiIv5tZ };
		const _returnValuehcW3XkV = true;
		const _getVertexByKeyyMphnPr = () => { return _returnValuehcW3XkV };
		const _returnValueDZlpxOX = {
		
	}
		const _getNeighborsTsosCG2 = () => { return _returnValueDZlpxOX };
		const _returnValueESU6Fd5 = true;
		const _findEdgeNKqeyhv = () => { return _returnValueESU6Fd5 };
		const _graphydpauP = {
			"getAllVertices": _getAllVerticesGwEa1iT,
		"getVertexByKey": _getVertexByKeyyMphnPr,
		"getNeighbors": _getNeighborsTsosCG2,
		"findEdge": _findEdgeNKqeyhv
	}
		const _returnValuejDTJnka = undefined;
		const _getKeyECsiLYR = () => { return _returnValuejDTJnka };
		const _startVertexApBhgoS = {
			"getKey": _getKeyECsiLYR
	}
		const _returnValuedKnMS1L = await bellmanFord(_graphydpauP, _startVertexApBhgoS)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedDKNjl8i = false;
		const _graphW7spBHB = new Graph(_isDirectedDKNjl8i)
		const _returnValueAFaO1p3 = await _graphW7spBHB.getAllVertices()
		const _returnValueXSVYKjj = await _graphW7spBHB.toString()
		const _returnValue7WVndR = null;
		const _getKeyeszJdYN = () => { return _returnValue7WVndR };
		const _newVertexxj3ssM8 = {
			"getKey": _getKeyeszJdYN
	}
		const _returnValueurHayVu = await _graphW7spBHB.addVertex(_newVertexxj3ssM8)
		const _arrayValueZmRJv8R = "K8oFtHjkjmJ2gQGley";
		const _arrayValuenGPw4V3 = -1.3031403637397467;
		const _returnValueM3foMVE = [_arrayValueZmRJv8R, _arrayValuenGPw4V3]
		const _getKeydc6On5k = () => { return _returnValueM3foMVE };
		const _newVertexra1Gjeo = {
			"getKey": _getKeydc6On5k
	}
		const _returnValuenhP349A = await _graphW7spBHB.addVertex(_newVertexra1Gjeo)
		const _returnValueNXKugQL = -3.9649200309677415;
		const _getKeyUImQssu = () => { return _returnValueNXKugQL };
		const _startVertexWQT3W0p = {
			"getKey": _getKeyUImQssu
	}
		const _returnValueQ5p9io = await bellmanFord(_graphW7spBHB, _startVertexWQT3W0p)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedJExtN9g = true;
		const _graphzI9WxKn = new Graph(_isDirectedJExtN9g)
		const _returnValueeloRVoB = await _graphzI9WxKn.getWeight()
		const _vertexKeySDd7oxa = undefined;
		const _returnValuesW1Eiro = await _graphzI9WxKn.getVertexByKey(_vertexKeySDd7oxa)
		const _returnValueV8ECTeN = true;
		const _getKey0L50cC = () => { return _returnValueV8ECTeN };
		const _startVertexO4ezg96 = {
			"getKey": _getKey0L50cC
	}
		const _returnValuepKshHl6 = await bellmanFord(_graphzI9WxKn, _startVertexO4ezg96)
	});
})