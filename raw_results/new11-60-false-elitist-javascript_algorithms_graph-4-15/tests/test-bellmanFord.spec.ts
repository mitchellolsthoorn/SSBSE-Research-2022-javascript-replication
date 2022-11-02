export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _returnValueN3ZXJf7 = false;
		const _getAllVerticeshqTpB5x = () => { return _returnValueN3ZXJf7 };
		const _returnValueSaZI7Ju = false;
		const _getVertexByKeyVCXfIJ = () => { return _returnValueSaZI7Ju };
		const _returnValueq2D2ERt = undefined;
		const _getNeighborsXy8ajke = () => { return _returnValueq2D2ERt };
		const _returnValueDMTnK7m = 2.96950212122967;
		const _findEdgeUEgpluP = () => { return _returnValueDMTnK7m };
		const _graphAvgT1wd = {
			"getAllVertices": _getAllVerticeshqTpB5x,
		"getVertexByKey": _getVertexByKeyVCXfIJ,
		"getNeighbors": _getNeighborsXy8ajke,
		"findEdge": _findEdgeUEgpluP
	}
		const _returnValuenESTbN = null;
		const _returnValuey17WrDP = () => { return _returnValuenESTbN };
		const _getKeyMAaoPnA = () => { return _returnValuey17WrDP };
		const _startVertexCNzsJht = {
			"getKey": _getKeyMAaoPnA
	}
		const _returnValueo66tpDP = await bellmanFord(_graphAvgT1wd, _startVertexCNzsJht)
	});

	it('test for bellmanFord', async () => {
		const _returnValueyjQEeP1 = []
		const _getAllVerticesBhuRkks = () => { return _returnValueyjQEeP1 };
		const _returnValuekrHtbj = undefined;
		const _getVertexByKeyjkXTzsS = () => { return _returnValuekrHtbj };
		const _returnValuery0vu8q = true;
		const _getNeighborsJhmFqJb = () => { return _returnValuery0vu8q };
		const _returnValueeqMZKuO = null;
		const _findEdgevY2rdOO = () => { return _returnValueeqMZKuO };
		const _graphEdtZpxD = {
			"getAllVertices": _getAllVerticesBhuRkks,
		"getVertexByKey": _getVertexByKeyjkXTzsS,
		"getNeighbors": _getNeighborsJhmFqJb,
		"findEdge": _findEdgevY2rdOO
	}
		const _returnValuevSaBQlB = 2.080376225065095;
		const _getKeyFLx42dV = () => { return _returnValuevSaBQlB };
		const _startVertextyyp6am = {
			"getKey": _getKeyFLx42dV
	}
		const _returnValueVd2UT7J = await bellmanFord(_graphEdtZpxD, _startVertextyyp6am)
	});
})