export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _getAllVerticeszQtB29q = -6.015488893815446;
		const _returnValuevyOiz4M = -2.7873715058862656;
		const _getVertexByKeyjFM3c5 = () => { return _returnValuevyOiz4M };
		const _returnValueydm4hme = null;
		const _getNeighborsdfvcY3 = () => { return _returnValueydm4hme };
		const _returnValuesDZgyUD = {
		
	}
		const _findEdgekQaRgDe = () => { return _returnValuesDZgyUD };
		const _graphuRbl1K = {
			"getAllVertices": _getAllVerticeszQtB29q,
		"getVertexByKey": _getVertexByKeyjFM3c5,
		"getNeighbors": _getNeighborsdfvcY3,
		"findEdge": _findEdgekQaRgDe
	}
		const _returnValueGpOm0n = false;
		const _getKeydrSLnbR = () => { return _returnValueGpOm0n };
		const _startVertexEphjeGW = {
			"getKey": _getKeydrSLnbR
	}
		const _returnValuesZaczn5 = await bellmanFord(_graphuRbl1K, _startVertexEphjeGW)
	});

	it('test for bellmanFord', async () => {
		const _returnValuennQV5au = []
		const _getAllVerticeseXHA8gZ = () => { return _returnValuennQV5au };
		const _returnValuediNSBbz = null;
		const _getVertexByKeyweFCJm = () => { return _returnValuediNSBbz };
		const _returnValuenVTcgjw = "cALyCytCvQLW8rCNADFVbZhHvLHRz7YRbXOQq";
		const _getNeighborsEacREJO = () => { return _returnValuenVTcgjw };
		const _returnValueqEMOn18 = {
		
	}
		const _findEdgez3k59sa = () => { return _returnValueqEMOn18 };
		const _graphE6zP86 = {
			"getAllVertices": _getAllVerticeseXHA8gZ,
		"getVertexByKey": _getVertexByKeyweFCJm,
		"getNeighbors": _getNeighborsEacREJO,
		"findEdge": _findEdgez3k59sa
	}
		const _returnValueub3GOGY = true;
		const _getKeyT4PGAX = () => { return _returnValueub3GOGY };
		const _startVertexg325he2 = {
			"getKey": _getKeyT4PGAX
	}
		const _returnValues5Y0SQc = await bellmanFord(_graphE6zP86, _startVertexg325he2)
	});
})