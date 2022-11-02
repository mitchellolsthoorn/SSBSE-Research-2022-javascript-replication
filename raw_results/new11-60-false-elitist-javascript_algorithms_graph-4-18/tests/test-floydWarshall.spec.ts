export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _returnValueo00Ts4Q = "XlnAs9Bnz0mwIIPUCdcEnsizUbktwpI8qHNtgoi7ChsonNQlUklDp4fOi12bCci3TNC";
		const _getAllVerticesQJIMgXg = () => { return _returnValueo00Ts4Q };
		const _returnValueKwpA2z7 = undefined;
		const _findEdgeCXcpauf = () => { return _returnValueKwpA2z7 };
		const _graph36Hsq5 = {
			"getAllVertices": _getAllVerticesQJIMgXg,
		"findEdge": _findEdgeCXcpauf
	}
		const _returnValueIwXvzcq = await floydWarshall(_graph36Hsq5)
	});

	it('test for floydWarshall', async () => {
		const _arrayValueNnO5ANQ = -7.24168391134182;
		const _returnValueUW3FmLX = [_arrayValueNnO5ANQ]
		const _getAllVerticesL0COckR = () => { return _returnValueUW3FmLX };
		const _returnValueitwhuhC = undefined;
		const _findEdgehdg3zRD = () => { return _returnValueitwhuhC };
		const _graphEAuNft5 = {
			"getAllVertices": _getAllVerticesL0COckR,
		"findEdge": _findEdgehdg3zRD
	}
		const _returnValueMZOTPVH = await floydWarshall(_graphEAuNft5)
	});

	it('test for floydWarshall', async () => {
		const _arrayValueuJHS2Ne = true;
		const _arrayValueW3jr0Vu = 0.7214057704839618;
		const _arrayValuebQKfNdX = [_arrayValueW3jr0Vu]
		const _arrayValueejhjcHf = true;
		const _arrayValuencNE0eL = {
		
	}
		const _arrayValueNcI4Pr4 = null;
		const _arrayValuei2vs4M = false;
		const _arrayValueZ10nbwU = 0.9458839372515229;
		const _arrayValueuhuz0Gi = undefined;
		const _arrayValuewWuAtab = [_arrayValueNcI4Pr4, _arrayValuei2vs4M, _arrayValueZ10nbwU, _arrayValueuhuz0Gi]
		const _arrayValuetkwyXJT = [_arrayValuencNE0eL, _arrayValuewWuAtab]
		const _arrayValueEB6fIBr = [_arrayValueejhjcHf, _arrayValuetkwyXJT]
		const _arrayValued3fhl4s = 1.1972033050465;
		const _arrayValueKOC7I6 = false;
		const _arrayValueXuGY7gU = [_arrayValueEB6fIBr, _arrayValued3fhl4s, _arrayValueKOC7I6]
		const _arrayValueFFoGxa8 = "cS8pR8UvJ5MWARBI1eOMtkLqE7h4TKM89de8o4aUd1";
		const _returnValuezNu2Ive = [_arrayValueuJHS2Ne, _arrayValuebQKfNdX, _arrayValueXuGY7gU, _arrayValueFFoGxa8]
		const _getAllVerticesPxHs8CC = () => { return _returnValuezNu2Ive };
		const _returnValuej0xSFb2 = null;
		const _findEdgernjwgkd = () => { return _returnValuej0xSFb2 };
		const _graphnhcTGch = {
			"getAllVertices": _getAllVerticesPxHs8CC,
		"findEdge": _findEdgernjwgkd
	}
		const _returnValueb1Jmizw = await floydWarshall(_graphnhcTGch)
	});
})