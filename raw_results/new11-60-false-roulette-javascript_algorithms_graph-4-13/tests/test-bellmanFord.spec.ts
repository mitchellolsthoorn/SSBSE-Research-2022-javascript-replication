export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _returnValuehK8znn0 = "wRcTnFdj55bbSwyY0L72GAeq";
		const _getAllVerticesIeP0VOn = () => { return _returnValuehK8znn0 };
		const _returnValuendsGFEK = {
		
	}
		const _getVertexByKeys9CayHg = () => { return _returnValuendsGFEK };
		const _returnValuerBlLgLj = true;
		const _getNeighborsYAQDU2Y = () => { return _returnValuerBlLgLj };
		const _returnValuemvXe1VJ = {
		
	}
		const _findEdgeyHNQopt = () => { return _returnValuemvXe1VJ };
		const _graphJAIvesd = {
			"getAllVertices": _getAllVerticesIeP0VOn,
		"getVertexByKey": _getVertexByKeys9CayHg,
		"getNeighbors": _getNeighborsYAQDU2Y,
		"findEdge": _findEdgeyHNQopt
	}
		const _startVertexJBvxBAB = "QqSUK9pABUctJrStrxEc1UOcnE8Lh5r8cOnEdWYPDso";
		const _returnValueO1eHxPk = await bellmanFord(_graphJAIvesd, _startVertexJBvxBAB)
	});

	it('test for bellmanFord', async () => {
		const _graphRP5Ubkp = undefined;
		const _returnValuexdCFWke = undefined;
		const _getKeyh3F5idf = () => { return _returnValuexdCFWke };
		const _startVertexXIKkA15 = {
			"getKey": _getKeyh3F5idf
	}
		const _returnValueEXKK7Hn = await bellmanFord(_graphRP5Ubkp, _startVertexXIKkA15)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedyEeYLR = false;
		const _grapheGrBhLh = new Graph(_isDirectedyEeYLR)
		const _returnValueryMBz5 = "tLZx9haPFtJn4aIuocDvt11uAOlr8c";
		const _getKeyoy9uQy = () => { return _returnValueryMBz5 };
		const _startVertexTsHhbY5 = {
			"getKey": _getKeyoy9uQy
	}
		const _endVertexph7BRDK = true;
		const _returnValuehQEgMNo = await _grapheGrBhLh.findEdge(_startVertexTsHhbY5, _endVertexph7BRDK)
		const _returnValueNd8Pg6B = "MrN1YzGaYUoOIapASiJ6ANOfYBxyjTjaHBG2VbOnN6S";
		const _getKeyME6Do7a = () => { return _returnValueNd8Pg6B };
		const _startVertexXdunNiT = {
			"getKey": _getKeyME6Do7a
	}
		const _returnValueZ9Lqmp6 = await bellmanFord(_grapheGrBhLh, _startVertexXdunNiT)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedoPD8ysd = "M7CtEkBiRrtumBDKdu";
		const _graph8vrAeA = new Graph(_isDirectedoPD8ysd)
		const _returnValueRuJj1WF = await _graph8vrAeA.reverse()
		const _arrayValueE5iF3OP = {
		
	}
		const _vertexKeywVKZPzG = [_arrayValueE5iF3OP]
		const _returnValueNzjZ9RU = await _graph8vrAeA.getVertexByKey(_vertexKeywVKZPzG)
		const _returnValuegeA6GXY = await _graph8vrAeA.getVerticesIndices()
		const _returnValueQR6WQYt = await _graph8vrAeA.getAllVertices()
		const _returnValueD2wlnu6 = undefined;
		const _getKeyDTnBzLt = () => { return _returnValueD2wlnu6 };
		const _newVertexqkxX0Ow = {
			"getKey": _getKeyDTnBzLt
	}
		const _returnValueWXubaWT = await _graph8vrAeA.addVertex(_newVertexqkxX0Ow)
		const _returnValueKPYBrCn = true;
		const _getKeyGevAz0U = () => { return _returnValueKPYBrCn };
		const _startVertexRS3pzxw = {
			"getKey": _getKeyGevAz0U
	}
		const _returnValueKSxH97G = await bellmanFord(_graph8vrAeA, _startVertexRS3pzxw)
	});
})