export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _returnValueNVlpOnl = "mTmGhHw0mddPB7FyyIdG5jdjGQQuj3585TxHfiy0LykcJSJyLPunhpEQ4YYyc2HYRGuJ9JcyGbrq6";
		const _getAllVerticescdc41o6 = () => { return _returnValueNVlpOnl };
		const _arrayValuesecEVoj = 8.208112186386362;
		const _arrayValuej2EC07k = false;
		const _arrayValuebpNqQfo = false;
		const _returnValueOHGa4Rx = [_arrayValuesecEVoj, _arrayValuej2EC07k, _arrayValuebpNqQfo]
		const _getVertexByKeybPdWaWm = () => { return _returnValueOHGa4Rx };
		const _returnValueVptuvWX = null;
		const _getNeighborsU9IyZOR = () => { return _returnValueVptuvWX };
		const _returnValueZLme1TT = true;
		const _findEdgetfajDUS = () => { return _returnValueZLme1TT };
		const _grapheb0cSFC = {
			"getAllVertices": _getAllVerticescdc41o6,
		"getVertexByKey": _getVertexByKeybPdWaWm,
		"getNeighbors": _getNeighborsU9IyZOR,
		"findEdge": _findEdgetfajDUS
	}
		const _returnValueBG1VKnf = false;
		const _getKeyxyfieBX = () => { return _returnValueBG1VKnf };
		const _startVertexriF7tna = {
			"getKey": _getKeyxyfieBX
	}
		const _returnValueh9wWq0 = await bellmanFord(_grapheb0cSFC, _startVertexriF7tna)
	});

	it('test for bellmanFord', async () => {
		const _returnValueuU20JLE = []
		const _getAllVerticesoGEbI1I = () => { return _returnValueuU20JLE };
		const _arrayValueAvnrZC7 = {
		
	}
		const _arrayValueZTvsNSn = 4.246075379029481;
		const _arrayValueXyb9kj4 = true;
		const _returnValueoZV1WBe = [_arrayValueAvnrZC7, _arrayValueZTvsNSn, _arrayValueXyb9kj4]
		const _getVertexByKeyOA2cYEe = () => { return _returnValueoZV1WBe };
		const _getNeighborsRwk3h1y = undefined;
		const _returnValuewhLnP7H = undefined;
		const _findEdgeKxD3CIG = () => { return _returnValuewhLnP7H };
		const _graphJMVGxm = {
			"getAllVertices": _getAllVerticesoGEbI1I,
		"getVertexByKey": _getVertexByKeyOA2cYEe,
		"getNeighbors": _getNeighborsRwk3h1y,
		"findEdge": _findEdgeKxD3CIG
	}
		const _returnValuePKm1fHS = null;
		const _getKeyKExN1Qk = () => { return _returnValuePKm1fHS };
		const _startVertext4GbbkS = {
			"getKey": _getKeyKExN1Qk
	}
		const _returnValueFIauImv = await bellmanFord(_graphJMVGxm, _startVertext4GbbkS)
	});
})