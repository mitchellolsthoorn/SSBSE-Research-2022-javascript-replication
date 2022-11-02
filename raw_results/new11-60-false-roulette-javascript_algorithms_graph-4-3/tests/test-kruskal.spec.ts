export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _returnValuePic1L7G = false;
		const _graphQxo2Dcc = () => { return _returnValuePic1L7G };
		const _returnValueUQ2Lhtj = await kruskal(_graphQxo2Dcc)
	});

	it('test for kruskal', async () => {
		const _isDirectedab39O8o = true;
		const _returnValuevCtPoCx = 3.2871437459088337;
		const _getAllEdgesIDElyV2 = () => { return _returnValuevCtPoCx };
		const _returnValuepX3bqAp = -9.187901782875267;
		const _getAllVerticesGqaHsFM = () => { return _returnValuepX3bqAp };
		const _graphgWzZkiu = {
			"isDirected": _isDirectedab39O8o,
		"getAllEdges": _getAllEdgesIDElyV2,
		"getAllVertices": _getAllVerticesGqaHsFM
	}
		const _returnValuexHd5wIS = await kruskal(_graphgWzZkiu)
	});

	it('test for kruskal', async () => {
		const _isDirectedVdrL3J = undefined;
		const _returnValueYCUvx5G = "eks";
		const _getAllEdgesPg5iJnt = () => { return _returnValueYCUvx5G };
		const _returnValueCO3T1yc = "psIvuvYmNlJ2fDLY3KvdFFu440fcczUhTIm8JySqS9anbyPyiMV3yT86kZOoDEA3ubkT";
		const _getAllVerticeswguKDyg = () => { return _returnValueCO3T1yc };
		const _graphH6b0UXa = {
			"isDirected": _isDirectedVdrL3J,
		"getAllEdges": _getAllEdgesPg5iJnt,
		"getAllVertices": _getAllVerticeswguKDyg
	}
		const _returnValueTjZ93Zq = await kruskal(_graphH6b0UXa)
	});
})