export {}
import dijkstra from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/dijkstra/dijkstra.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('dijkstra', () => {
	it('test for dijkstra', async () => {
		const _returnValueGkljIXp = -9.727248119013323;
		const _graphZhnxCtq = () => { return _returnValueGkljIXp };
		const _arrayValueC1mm49 = "IgHbWiFUEO56GFOGqAL9NmLSzzRCOW0PZmCUQKYUkSO965kQAg9qBpRi5nBoXNyiIr8lLIFEsX4EqpUy4EbMPADMYiJAdJwn";
		const _arrayValueTT8Okd = undefined;
		const _arrayValueT9kBQvI = -3.359018538207188;
		const _startVertexNj1lmKa = [_arrayValueC1mm49, _arrayValueTT8Okd, _arrayValueT9kBQvI]
		const _returnValueditmYqV = await dijkstra(_graphZhnxCtq, _startVertexNj1lmKa)
	});

	it('test for dijkstra', async () => {
		const _isDirectedgBCeSKC = true;
		const _graphLsWA4Yg = new Graph(_isDirectedgBCeSKC)
		const _returnValuexZ3TVU2 = await _graphLsWA4Yg.getVerticesIndices()
		const _returnValueeHHrGSp = await _graphLsWA4Yg.getAllVertices()
		const _returnValueB26bERQ = 0.6576165859410317;
		const _returnValuec9OTEpC = () => { return _returnValueB26bERQ };
		const _getKeyhjEjy9M = () => { return _returnValuec9OTEpC };
		const _startVertexOJFfA0u = {
			"getKey": _getKeyhjEjy9M
	}
		const _returnValueTa8rHhZ = await dijkstra(_graphLsWA4Yg, _startVertexOJFfA0u)
	});
})