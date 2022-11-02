export {}
import dijkstra from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/dijkstra/dijkstra.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('dijkstra', () => {
	it('test for dijkstra', async () => {
		const _returnValueTmQUiHs = false;
		const _getAllVerticesxoaFJ0O = () => { return _returnValueTmQUiHs };
		const _returnValuey8eiZqi = true;
		const _findEdgeeJwq8a = () => { return _returnValuey8eiZqi };
		const _graphu1Hq2lt = {
			"getAllVertices": _getAllVerticesxoaFJ0O,
		"findEdge": _findEdgeeJwq8a
	}
		const _returnValueRsvDLRP = 6.18607716664971;
		const _getKeyYs024am = () => { return _returnValueRsvDLRP };
		const _startVertexGjxLjGM = {
			"getKey": _getKeyYs024am
	}
		const _returnValuev93QGWW = await dijkstra(_graphu1Hq2lt, _startVertexGjxLjGM)
	});

	it('test for dijkstra', async () => {
		const _returnValuekNFT7t9 = []
		const _getAllVerticesJNzNFds = () => { return _returnValuekNFT7t9 };
		const _returnValueouZqE78 = {
		
	}
		const _findEdgeaVWnjWD = () => { return _returnValueouZqE78 };
		const _graphLPj7Hij = {
			"getAllVertices": _getAllVerticesJNzNFds,
		"findEdge": _findEdgeaVWnjWD
	}
		const _returnValuecoEpQZH = false;
		const _getKeyBMd0MaN = () => { return _returnValuecoEpQZH };
		const _startVertexxAhFinb = {
			"getKey": _getKeyBMd0MaN
	}
		const _returnValueGqo0Nkf = await dijkstra(_graphLPj7Hij, _startVertexxAhFinb)
	});
})